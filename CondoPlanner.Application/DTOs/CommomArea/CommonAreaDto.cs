using CondoPlanner.Application.DTOs.Condominium;
using CondoPlanner.Domain.Entities;

namespace CondoPlanner.Application.DTOs.CommomArea
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
