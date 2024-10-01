using CondoPlanner.Application.DTOs.Condominium;
using CondoPlanner.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs.CommomArea
{
    public class CreateCommonAreaDto
    {
        public string Name { get; }
        public int Capacity { get; }
        public decimal CostPerHour { get; }
        public TimeSpan? AvailableFrom { get; }
        public TimeSpan? AvailableUntil { get; }
        public int CondominiumId { get; }
    }
}
