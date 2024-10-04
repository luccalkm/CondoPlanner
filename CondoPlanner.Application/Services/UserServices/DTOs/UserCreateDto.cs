using CondoPlanner.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Services.UserServices.DTOs
{
    public class UserCreateDto
    {
        public string FullName { get; }
        public string CPF { get; }
        public string Email { get; }
        public string UnitNumber { get; }
    }
}
