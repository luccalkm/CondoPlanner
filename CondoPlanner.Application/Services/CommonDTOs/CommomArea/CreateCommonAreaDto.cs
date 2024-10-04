namespace CondoPlanner.Application.Services.CommonDTOs.CommomArea
{
    public class CreateCommonAreaDto
    {
        public string Name { get; set; }
        public int Capacity { get; set;  }
        public decimal CostPerHour { get; set; }
        public TimeSpan? AvailableFrom { get; set; }
        public TimeSpan? AvailableUntil { get; set; }
        public int CondominiumId { get; set; }
    }
}
