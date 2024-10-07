using AutoMapper;
using CondoPlanner.Application.Services.AccountServices.DTOs;
using CondoPlanner.Application.Services.CommonDTOs;
using CondoPlanner.Application.Services.CondominiumServices;
using CondoPlanner.Application.Services.CondominiumServices.DTOs;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace CondoPlanner.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CondominiumController : ControllerBase
    {
        private readonly ICondominiumService _condominiumService;
        private readonly IMapper _mapper;

        public CondominiumController(ICondominiumService condominiumService, IMapper mapper)
        {
            _condominiumService = condominiumService;
            _mapper = mapper;
        }

        // TODO: Mudar para UserService
        [HttpGet("admin/{userId}")]
        public async Task<ResponseDto<IEnumerable<CondominiumDto>>> GetCondominiumByAdministratorId(string userId)
        {
            var condominiums = await _condominiumService.GetCondominiumFromUserId(userId);
            var response = new ResponseDto<IEnumerable<CondominiumDto>>
            {
                StatusCode = HttpStatusCode.OK,
                Success = true,
                Data = condominiums
            };

            return response;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCondominiumById(int id)
        {
            var condominium = await _condominiumService.GetCondominiumDetailsAsync(id);
            if (condominium == null)
            {
                return NotFound(new ResponseDto<CondominiumDto>
                {
                    Success = false,
                    Message = "Condominium not found."
                });
            }

            var response = new ResponseDto<CondominiumDto>
            {
                Success = true,
                Data = condominium
            };

            return Ok(response);
        }

        [HttpPost]
        public async Task<ResponseDto<CondominiumDto>> CreateCondominium(CondominiumCreateDto input)
        {
            try
            {
                var condominiumDto = await _condominiumService.CreateCondominiumAsync(input);

                return new ResponseDto<CondominiumDto>
                {
                    StatusCode = HttpStatusCode.Created,
                    Success = true,
                    Message = "Condomínio registrar com sucesso.",
                    Data = condominiumDto
                };
            }
            catch
            {
                return new ResponseDto<CondominiumDto>
                {
                    StatusCode = HttpStatusCode.InternalServerError,
                    Success = false,
                    Message = "Ocorreu um erro ao registrar o condomínio.",
                    Data = null
                };
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCondominium(int id)
        {
            try
            {
                await _condominiumService.DeleteCondominiumAsync(id);
                return Ok(new ResponseDto<object>
                {
                    Success = true,
                    Message = "Condominium deleted successfully."
                });
            }
            catch (Exception ex)
            {
                return NotFound(new ResponseDto<object>
                {
                    Success = false,
                    Message = ex.Message
                });
            }
        }
    }
}
