namespace CondoPlanner.Domain.Entities
{
    public class Condominium
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int NumberOfResidences { get; set; }

        public ICollection<CommonArea>? CommonAreas { get; set; }
        public ICollection<CondominiumResident>? Residents { get; set; }
        public string AdministratorId { get; set; }
    }
}
