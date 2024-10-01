using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs.User
{
    public class UserDto
    {
        public string Id { get; }
        public string FullName { get; }
        public string CPF { get;}
        public string Email { get; }
        public string UnitNumber { get; }
        //public File? ProofOfResidence { get; }
    }
}
