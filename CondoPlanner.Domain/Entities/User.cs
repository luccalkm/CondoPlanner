namespace CondoPlanner.Domain.Entities
{
    public class User
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public string UnitNumber { get; set; }
        //public File? ProofOfResidence { get; set; }
    }
}
