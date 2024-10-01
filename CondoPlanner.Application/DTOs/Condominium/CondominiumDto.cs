using CondoPlanner.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs.Condominium
{
    public class CondominiumDto
    {
        public string Name { get; }
        public string Address { get; }
        public int NumberOfResidences { get; }
        public ICollection<CommonArea>? CommonAreas { get; }
        public ICollection<User>? Residents { get; }
        public UserDto Administrator { get; }
    }
}
