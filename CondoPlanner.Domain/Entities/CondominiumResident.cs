using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Domain.Entities
{
    public class CondominiumResident
    {
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }

        public string ResidentId { get; set; }
    }
}
