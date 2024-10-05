using CondoPlanner.Application.Services.AccountServices;
using CondoPlanner.Application.Services.AccountServices.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace CondoPlanner.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDto input)
        {
            var result = await _accountService.RegisterAsync(input);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            return Ok(new { message = "User registered successfully" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto input)
        {
            var token = await _accountService.LoginAsync(input);

            if (token == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            return Ok(new { token });
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _accountService.LogoutAsync();
            return Ok(new { message = "Logged out successfully" });
        }
    }
}
