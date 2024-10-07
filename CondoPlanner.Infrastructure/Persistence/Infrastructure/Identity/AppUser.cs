using CondoPlanner.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace CondoPlanner.API.Infrastructure.Identity
{
    public class AppUser : IdentityUser
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string? CPF { get; set; }
        public string? UnitNumber { get; set; }
        public bool IsAdmin { get; set; }
        public ICollection<Condominium>? ManagedCondominiums { get; set; }
    }
}
