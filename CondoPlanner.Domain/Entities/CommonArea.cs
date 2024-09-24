namespace CondoPlanner.Domain.Entities
{
    public class CommonArea
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public decimal CostPerHour { get; set; }
        public TimeSpan AvailableFrom { get; set; }
        public TimeSpan AvailableUntil { get; set; }

        // Relação com o Condominium
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }

        // Lista de reservas associadas à área comum
        public ICollection<Reservation> Reservations { get; set; }
    }
}

