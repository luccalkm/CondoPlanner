using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.AuthServices.DTOs;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Services.UserServices
{
    public class UserService : IUserService
    {
        private readonly UserManager<AppUser> _userManager;

        public UserService(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<AppUser?> CreateOrUpdate(CreateOrUpdateUserDto dto)
        {
            var user = await _userManager.FindByEmailAsync(dto.Email);

            if (user == null)
            {
                user = new AppUser
                {
                    Email = dto.Email,
                    UserName = dto.Email,
                    FullName = dto.FullName,
                    UnitNumber = dto?.UnitNumber,
                    IsAdmin = dto.IsAdmin,
                    ManagedCondominiums = new()
                };

                var result = await _userManager.CreateAsync(user, dto.Password);
                if (!result.Succeeded)
                {
                    throw new Exception("Some error occurred when creating the user. Please try again.");
                }
            }
            else
            {
                user.FullName = dto.FullName;
                user.UnitNumber = dto.UnitNumber;
                user.IsAdmin = dto.IsAdmin;

                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    throw new Exception("Some error occurred when updating the user. Please try again.");
                }
            }

            return user;
        }

        public async Task<AppUser?> GetUserByIdAsync(string userId)
        {
            return await _userManager.FindByIdAsync(userId);
        }

        public async Task<IEnumerable<AppUser>> GetUsers()
        {
            return await Task.FromResult(_userManager.Users);
        }
    }
}
