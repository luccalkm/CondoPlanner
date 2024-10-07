using AutoMapper;
using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.Services.CondominiumServices.DTOs;
using CondoPlanner.Application.Services.UserServices.DTOs;
using CondoPlanner.Domain.Entities;
using CondoPlanner.Infrastructure.Persistence.Infrastructure;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Services.CondominiumServices
{
    public class CondominiumService : ICondominiumService
    {
        private readonly AppDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public CondominiumService(AppDbContext context, UserManager<AppUser> userManager, IMapper mapper)
        {
            _context = context;
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CondominiumDto>> GetAllCondominumsFromUserAsync(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                throw new KeyNotFoundException("User not found.");
            }

            var managedCondominiums = await _context.Condominiums
                .Where(c => c.AdministratorId == userId)
                .ToListAsync();

            var residentCondominiums = await _context.CondominiumResidents
                .Where(cr => cr.ResidentId == userId)
                .Select(cr => cr.Condominium)
                .ToListAsync();

            var allCondominiums = managedCondominiums
                .Union(residentCondominiums)
                .ToList();

            return _mapper.Map<IEnumerable<CondominiumDto>>(allCondominiums);
        }

        public async Task<CondominiumDto> GetCondominiumDetailsAsync(int condominiumId)
        {
            var condominium = await _context.Condominiums
                .AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == condominiumId);

            if (condominium == null)
                throw new Exception("Condominium not found");

            var administrator = await _userManager.FindByIdAsync(condominium.AdministratorId);
            if (administrator == null)
                throw new Exception("Administrator not found");

            var residents = new List<AppUser>();
            foreach (var residentLink in condominium.Residents)
            {
                var resident = await _userManager.FindByIdAsync(residentLink.ResidentId);
                if (resident != null)
                {
                    residents.Add(resident);
                }
            }

            return new CondominiumDto
            {
                Id = condominium.Id,
                Name = condominium.Name,
                Address = condominium.Address,
                Administrator = new UserDto
                {
                    FullName = administrator.FullName,
                    Email = administrator.Email
                },
                Residents = residents.Select(r => new UserDto
                {
                    FullName = r.FullName,
                    Email = r.Email
                }).ToList()
            };
        }


        public async Task<CondominiumDto> CreateCondominiumAsync(CondominiumCreateDto input)
        {
            var admin = await _userManager.FindByIdAsync(input.IdAdministrator);

            if (admin == null)
                throw new Exception("Usuário informado não encontrado.");

            if (admin is { IsAdmin: false })
            {
                throw new Exception("Usuário não é administrador e não pode registar um condomínio.");
            }

            var condominium = _mapper.Map<Condominium>(input);

            _context.Condominiums.Add(condominium);
            await _context.SaveChangesAsync();

            var condominiumDto = _mapper.Map<CondominiumDto>(condominium);
            condominiumDto.Administrator = new UserDto
            {
                FullName = admin.FullName,
                Email = admin.Email
            };

            return condominiumDto;
        }

        public async Task DeleteCondominiumAsync(int id)
        {
            var condominium = await _context.Condominiums.FindAsync(id);

            if (condominium == null)
                throw new Exception("Condominium not found");

            _context.Condominiums.Remove(condominium);
            await _context.SaveChangesAsync();
        }
    }
}
