using CondoPlanner.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs.Condominium
{
    public class CondominiumCreateDto
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int NumberOfResidences { get; set; }

        public int IdAdministrator { get; set; }
    }
}
