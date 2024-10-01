using CondoPlanner.Application.DTOs.Condominium;
using CondoPlanner.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs
{
    public class CommonAreaDto
    {
        public int Id { get; }
        public string Name { get; }
        public int Capacity { get; }
        public decimal CostPerHour { get; }
        public TimeSpan AvailableFrom { get; }
        public TimeSpan AvailableUntil { get; }

        // Relação com o Condominium
        public int CondominiumId { get; }
        public CondominiumDto Condominium { get; }

        // Lista de reservas associadas à área comum
        public ICollection<Reservation>? Reservations { get; }
    }
}
