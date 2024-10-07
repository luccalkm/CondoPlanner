namespace CondoPlanner.Domain.Entities
{
    public class CommonArea
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public decimal CostPerHour { get; set; }
        public string AvailableFrom { get; set; }
        public string AvailableUntil { get; set; }
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }
}

