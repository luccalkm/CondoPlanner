using AutoMapper;
using CondoPlanner.API.Infrastructure;
using CondoPlanner.Application.DTOs;
using CondoPlanner.Application.DTOs.Condominium;
using CondoPlanner.Application.DTOs.Reservation;
using CondoPlanner.Application.DTOs.User;
using CondoPlanner.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CondoPlanner.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;


        public ReservationController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/<ReservationController>
        [HttpGet]
        public IActionResult GetAll()
        {
            var reservations = _context.Reservations
                                .AsNoTracking()
                                .ToList();

            var dtos = _mapper.Map<IEnumerable<ReservationDto>>(reservations);

            var response = new ResponseDto<IEnumerable<ReservationDto>>
            {
                Success = true,
                Data = dtos
            };

            return Ok(response);
        }

        // GET api/<ReservationController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var reservation = _context.Reservations
                               .AsNoTracking()
                               .FirstOrDefault(c => c.Id == id.ToString());

            var dto = _mapper.Map<ReservationDto>(reservation);

            var response = new ResponseDto<ReservationDto>
            {
                Success = true,
                Data = dto
            };

            return Ok(response);
        }

        // POST api/<ReservationController>
        [HttpPost]
        public async Task<ActionResult> Post(ReservationCreateDto input)
        {
            var admin = await _context.Reservations.FindAsync(input.Id);

            if (admin == null)
                return NotFound(new ResponseDto<ReservationDto>
                {
                    Success = false,
                    Message = "Administrator not found.",
                });

            var reservation = _mapper.Map<Reservation>(input);

            _context.Users.Add(reservation);
            await _context.SaveChangesAsync();

            var reservationDto = _mapper.Map<ReservationDto>(reservation);

            var response = new ResponseDto<ReservationDto>
            {
                Success = true,
                Message = "Reservation created successfully.",
                Data = reservationDto
            };

            return CreatedAtAction(nameof(Post), response);
        }

        // PUT api/<CondominiumController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CondominiumController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
