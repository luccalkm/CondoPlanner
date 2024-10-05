using AutoMapper;
using CondoPlanner.Application.Services.CommonDTOs;
using CondoPlanner.Application.Services.CondominiumServices;
using CondoPlanner.Application.Services.CondominiumServices.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CondoPlanner.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CondominiumController : ControllerBase
    {
        private readonly ICondominiumService _condominiumService;
        private readonly IMapper _mapper;

        public CondominiumController(ICondominiumService condominiumService, IMapper mapper)
        {
            _condominiumService = condominiumService;
            _mapper = mapper;
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetAllCondominumsFromUser(string userId)
        {
            var condominiums = await _condominiumService.GetAllCondominumsFromUserAsync(userId);
            var response = new ResponseDto<IEnumerable<CondominiumDto>>
            {
                Success = true,
                Data = condominiums
            };

            return Ok(response);
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
        public async Task<ActionResult> CreateCondominium(CondominiumCreateDto input)
        {
            try
            {
                var condominiumDto = await _condominiumService.CreateCondominiumAsync(input);
                var response = new ResponseDto<CondominiumDto>
                {
                    Success = true,
                    Message = "Condominium created successfully.",
                    Data = condominiumDto
                };

                return CreatedAtAction(nameof(GetCondominiumById), new { id = condominiumDto.Id }, response);
            }
            catch (Exception ex)
            {
                return BadRequest(new ResponseDto<CondominiumDto>
                {
                    Success = false,
                    Message = ex.Message
                });
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
