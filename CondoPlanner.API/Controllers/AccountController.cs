using CondoPlanner.Application.Services.AccountServices;
using CondoPlanner.Application.Services.AccountServices.DTOs;
using CondoPlanner.Application.Services.CommonDTOs;
using CondoPlanner.Application.Services.CondominiumServices.DTOs;
using CondoPlanner.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Net;

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

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterUserDto input)
        {
            var result = await _accountService.RegisterAsync(input);

            if (!result.Succeeded)
            {
                var errorMessages = string.Join("; ", result.Errors.Select(e => e.Description));
                var errorResponse = new ResponseDto<string>
                {
                    Success = false,
                    Message = errorMessages,
                    Data = null
                };
                return BadRequest(errorResponse);
            }

            var response = new ResponseDto<bool>
            {
                Success = true,
                Message = "Usuário registrado com sucesso.",
                Data = true
            };

            return Ok(response);
        }

        [HttpPost("Login")]
        public async Task<ResponseDto<string>> Login(LoginDto input)
        {
            var token = await _accountService.LoginAsync(input);

            if (token == null)
            {
                return new ResponseDto<string>
                {
                    StatusCode = HttpStatusCode.Unauthorized,
                    Success = false,
                    Message = "E-mail ou senha inválidos.",
                    Data = null
                };
            }

            return new ResponseDto<string>
            {
                StatusCode = HttpStatusCode.OK,
                Success = true,
                Message = "Login realizado com sucesso.",
                Data = token
            };
        }

        [HttpPost("Logout")]
        public async Task<IActionResult> Logout()
        {
            await _accountService.LogoutAsync();

            var successResponse = new ResponseDto<bool>
            {
                Success = true,
                Message = "Logout realizado com sucesso.",
                Data = true
            };

            return Ok(successResponse);
        }
    }
}
