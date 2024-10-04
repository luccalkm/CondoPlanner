using AutoMapper;
using CondoPlanner.Application.Services.CommonDTOs.Condominium;
using CondoPlanner.Domain.Entities;
using CondoPlanner.Infrastructure.Persistence.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CondoPlanner.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CondominiumController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public CondominiumController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/<CondominiumController>
        [HttpGet]
        public IActionResult GetAll()
        {
            var condominiums = _context.Condominiums
                                .AsNoTracking()
                                .ToList();

            var dtos = _mapper.Map<IEnumerable<CondominiumDto>>(condominiums);

            var response = new ResponseDto<IEnumerable<CondominiumDto>>
            {
                Success = true,
                Data = dtos
            };

            return Ok(response);
        }

        // GET api/<CondominiumController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var condominium = _context.Condominiums
                               .AsNoTracking()
                               .FirstOrDefault(c => c.Id == id);

            var dto = _mapper.Map<CondominiumDto>(condominium);

            var response = new ResponseDto<CondominiumDto>
            {
                Success = true,
                Data = dto
            };

            return Ok(response);
        }

        // POST api/<CondominiumController>
        [HttpPost]
        public async Task<ActionResult> CreateCondominium(CondominiumCreateDto input)
        {
            var admin = await _context.Users.FindAsync(input.IdAdministrator);

            if (admin == null)
                return NotFound(new ResponseDto<CondominiumDto>
                {
                    Success = false,
                    Message = "Administrator not found.",
                });

            var condominium = _mapper.Map<Condominium>(input);

            _context.Condominiums.Add(condominium);
            await _context.SaveChangesAsync();

            var condominiumDto = _mapper.Map<CondominiumDto>(condominium);

            var response = new ResponseDto<CondominiumDto>
            {
                Success = true,
                Message = "Condominium created successfully.",
                Data = condominiumDto
            };

            return CreatedAtAction("Post", response);
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
