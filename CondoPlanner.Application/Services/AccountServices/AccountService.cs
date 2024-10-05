using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.Services.AccountServices.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CondoPlanner.Application.Services.AccountServices
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<IdentityResult> RegisterAsync(RegisterUserDto registerDto)
        {
            var existingUser = await _userManager.Users.SingleOrDefaultAsync(u => u.Email == registerDto.Email);

            if (existingUser != null)
            {
                throw new Exception("Usuário com esse e-mail já foi cadastrado no sistema. Por favor, verifique suas informações e tente novamente.");
            }

            var user = new AppUser
            {
                FullName = registerDto.FullName,
                Email = registerDto.Email,
                UserName = registerDto.Email,
                UnitNumber = registerDto.UnitNumber,
                IsAdmin = registerDto.IsAdmin,
                CPF = registerDto.CPF,
            };

            return await _userManager.CreateAsync(user, registerDto.Password);
        }

        public async Task<string?> LoginAsync(LoginDto loginDto)
        {
            if (string.IsNullOrEmpty(loginDto.Email) || string.IsNullOrEmpty(loginDto.Password))
                throw new Exception("Credenciais de login são inválidas");

            var user = await _userManager.Users.SingleOrDefaultAsync(u => u.Email == loginDto.Email);

            if (user == null)
            {
                throw new Exception("Não existe um usuário cadastrado com esse e-mail. Por favor, tente novamente após verificar suas informações.");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
            {
                throw new Exception("Senha inválida. Por favor, tente novamente.");
            }

            return GenerateJwtToken(user);
        }

        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }

        private string GenerateJwtToken(AppUser user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim("IsAdmin", user.IsAdmin.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                "api",
                claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
