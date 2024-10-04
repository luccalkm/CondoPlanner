using CondoPlanner.API.Infrastructure.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Services.UserServices
{
    public interface IUserService
    {
        Task<AppUser?> CreateOrUpdate(CreateOrUpdateUserDto dto);
        Task<AppUser?> GetUserByIdAsync(string userId);
        Task<IEnumerable<AppUser>> GetUsers();
    }
}
