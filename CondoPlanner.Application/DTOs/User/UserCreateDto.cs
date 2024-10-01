using CondoPlanner.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs.Condominium
{
    public class UserCreateDto
    {
        public string FullName { get; }
        public string CPF { get; }
        public string Email { get; }
    }
}
