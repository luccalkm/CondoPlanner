using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CondoPlanner.Domain.Entities;
using CondoPlanner.Infrastructure.Persistence.Infrastructure;
using CondoPlanner.Application.Services.CommonDTOs.CommomArea;
using CondoPlanner.Application.Services.CommonDTOs.Condominium;
using CondoPlanner.Application.Services.CommonDTOs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CondoPlanner.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonAreaController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;


        public CommonAreaController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        // GET: api/<CommonAreaController>
        [HttpGet]
        public IActionResult GetAll()
        {
            var commonAreas = _context.CommonAreas
                                .AsNoTracking()
                                .ToList();

            var dtos = _mapper.Map<IEnumerable<CommonAreaDto>>(commonAreas);

            var response = new ResponseDto<IEnumerable<CommonAreaDto>>
            {
                Success = true,
                Data = dtos
            };

            return Ok(response);
        }

        // GET api/<CommonAreaController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var commonArea = _context.CommonAreas
                                .AsNoTracking()
                                .FirstOrDefault(c => c.Id == id);

            var dto = _mapper.Map<CommonAreaDto>(commonArea);

            var response = new ResponseDto<CommonAreaDto>
            {
                Success = true,
                Data = dto
            };

            return Ok(response);
        }

        // POST api/<CommonAreaController>
        [HttpPost]
        public async Task<ActionResult> CreateCommonArea(CreateCommonAreaDto input)
        {
            var condominium = await _context.Condominiums.FindAsync(input.CondominiumId);

            if (condominium == null)
                return NotFound(new ResponseDto<CondominiumDto>
                {
                    Success = false,
                    Message = "Condominium not found.",
                });

            var commonArea = _mapper.Map<CommonArea>(input);

            _context.CommonAreas.Add(commonArea);
            await _context.SaveChangesAsync();

            var dto = _mapper.Map<CommonAreaDto>(commonArea);

            var response = new ResponseDto<CommonAreaDto>
            {
                Success = true,
                Message = "CommonArea created successfully.",
                Data = dto
            };

            return CreatedAtAction("Post", response);
        }

        // PUT api/<CommonAreaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CommonAreaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
