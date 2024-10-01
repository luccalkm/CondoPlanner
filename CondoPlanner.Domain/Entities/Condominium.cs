namespace CondoPlanner.Domain.Entities
{
    public class Condominium
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int NumberOfResidences { get; set; }

        public ICollection<CommonArea>? CommonAreas { get; set; }
        public ICollection<User>? Residents { get; set; }
        public User Administrator { get; set; }
        public int AdministratorId { get; set; }
    }
}
