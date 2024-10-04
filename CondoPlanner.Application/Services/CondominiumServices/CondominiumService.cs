using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.Services.CondominiumServices.DTOs;
using CondoPlanner.Application.Services.UserServices.DTOs;
using CondoPlanner.Infrastructure.Persistence.Infrastructure;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Services.CondominiumServices
{
    public class CondominiumService
    {
        private readonly AppDbContext _context;
        private readonly UserManager<AppUser> _userManager;

        public CondominiumService(AppDbContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<CondominiumDto> GetCondominiumDetailsAsync(int condominiumId)
        {
            var condominium = await _context.Condominiums
                .FirstOrDefaultAsync(c => c.Id == condominiumId);

            if (condominium == null)
                throw new Exception("Condominium not found");

            var administrator = await _userManager.FindByIdAsync(condominium.AdministratorId);
            if (administrator == null)
                throw new Exception("Administrator not found");

            var residents = new List<AppUser>();
            foreach (var residentId in condominium.ResidentsIds)
            {
                var resident = await _userManager.FindByIdAsync(residentId);
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
    }

}
