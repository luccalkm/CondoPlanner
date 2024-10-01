using System.ComponentModel.DataAnnotations;

namespace CondoPlanner.Application.DTOs.Auth
{
    public class RegisterUserDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public string Password { get; set; }
        public string UnitNumber { get; set; }
        public bool IsAdmin { get; set; }
    }
}
