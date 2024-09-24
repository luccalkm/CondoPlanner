namespace CondoPlanner.Domain.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime ReservationDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public decimal TotalCost { get; set; }
        public int CommonAreaId { get; set; }
        public CommonArea CommonArea { get; set; }
        public string UserId { get; set; }
    }
}
