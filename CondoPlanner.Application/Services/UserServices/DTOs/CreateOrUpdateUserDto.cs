using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Services.UserServices.DTOs
{
    public class CreateOrUpdateUserDto
    {
        public string Email { get; set; }
        public string FullName { get; set; }
        public string? UnitNumber { get; set; }
        public bool IsAdmin { get; set; }
        public string Password { get; set; }

    }
}
