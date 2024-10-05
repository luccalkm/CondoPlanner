namespace CondoPlanner.Application.Services.CondominiumServices.DTOs
{
    public class CondominiumCreateDto
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int NumberOfResidences { get; set; }
        public string IdAdministrator { get; set; }
    }
}
