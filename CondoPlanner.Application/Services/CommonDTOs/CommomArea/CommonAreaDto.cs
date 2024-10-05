
using CondoPlanner.Application.Services.CondominiumServices.DTOs;
using CondoPlanner.Domain.Entities;

namespace CondoPlanner.Application.Services.CommonDTOs.CommomArea
{
    public class CommonAreaDto
    {
        public int Id { get; set;  }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public decimal CostPerHour { get; set; }
        public TimeSpan AvailableFrom { get; set; }
        public TimeSpan AvailableUntil { get; set; }

        public int CondominiumId { get; set; }
        public CondominiumDto Condominium { get; set; }
        public ICollection<Reservation>? Reservations { get; set; }
    }
}
