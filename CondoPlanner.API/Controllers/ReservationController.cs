using Microsoft.AspNetCore.Mvc;
using CondoPlanner.Application.Services.ReservationServices;
using CondoPlanner.Application.Services.ReservationServices.DTOs;
using CondoPlanner.Application.Services.CommonDTOs;

namespace CondoPlanner.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _reservationService;

        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetReservations()
        {
            var dtos = await _reservationService.GetAllReservationsAsync();

            var response = new ResponseDto<IEnumerable<ReservationDto>>
            {
                Success = true,
                Data = dtos
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReservationById(int id)
        {
            var dto = await _reservationService.GetReservationByIdAsync(id);

            if (dto == null)
            {
                return NotFound(new ResponseDto<ReservationDto>
                {
                    Success = false,
                    Message = "Reserva não encontrada.",
                    Data = null
                });
            }

            var response = new ResponseDto<ReservationDto>
            {
                Success = true,
                Data = dto
            };

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<ResponseDto<ReservationDto>>> CreateOrUpdateReservation(CreateOrEditReservationDto input)
        {
            var response = await _reservationService.CreateOrUpdateReservationAsync(input);

            if (input.Id == 0 && response.Success)
            {
                return CreatedAtAction(nameof(GetReservationById), new { id = response.Data.Id }, response);
            }

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            var response = await _reservationService.DeleteReservationAsync(id);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
