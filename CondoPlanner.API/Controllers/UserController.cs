using AutoMapper;
using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.Services.UserServices.DTOs;
using CondoPlanner.Infrastructure.Persistence.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CondoPlanner.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;


        public UserController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/<UserController>
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _context.Users
                                .AsNoTracking()
                                .ToList();

            var dtos = _mapper.Map<IEnumerable<UserDto>>(users);

            var response = new ResponseDto<IEnumerable<UserDto>>
            {
                Success = true,
                Data = dtos
            };

            return Ok(response);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _context.Users
                               .AsNoTracking()
                               .FirstOrDefault(c => c.Id == id.ToString());

            var dto = _mapper.Map<UserDto>(user);

            var response = new ResponseDto<UserDto>
            {
                Success = true,
                Data = dto
            };

            return Ok(response);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult> Post(UserCreateDto input)
        {
            var admin = await _context.Users.FindAsync(input.CPF);

            if (admin == null)
                return NotFound(new ResponseDto<UserDto>
                {
                    Success = false,
                    Message = "Administrator not found.",
                });

            var user = _mapper.Map<AppUser>(input);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            var userDto = _mapper.Map<UserDto>(user);

            var response = new ResponseDto<UserDto>
            {
                Success = true,
                Message = "Condominium created successfully.",
                Data = userDto
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
