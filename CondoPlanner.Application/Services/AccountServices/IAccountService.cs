using CondoPlanner.Application.Services.AccountServices.DTOs;
using Microsoft.AspNetCore.Identity;

namespace CondoPlanner.Application.Services.AccountServices
{
    public interface IAccountService
    {
        Task<IdentityResult> RegisterAsync(RegisterUserDto registerDto);
        Task<LoginResponseDto> LoginAsync(LoginDto loginDto);
        Task LogoutAsync();
    }
}
