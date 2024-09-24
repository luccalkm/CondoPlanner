namespace CondoPlanner.Domain.Entities
{
    public class Admin : User
    {
        public ICollection<Condominium>? ManagedCondominiums { get; set; }
    }
}
