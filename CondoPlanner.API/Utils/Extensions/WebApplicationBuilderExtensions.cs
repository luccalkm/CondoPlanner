using CondoPlanner.Application.Services.AccountServices;
using CondoPlanner.Application.Services.CondominiumServices;
using CondoPlanner.Application.Services.ReservationServices;

namespace CondoPlanner.API.Utils.Extensions
{
    public static class WebApplicationBuilderExtensions
    {
        public static void InitializeServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<IReservationService, ReservationService>();
            builder.Services.AddScoped<IAccountService, AccountService>();
            builder.Services.AddScoped<ICondominiumService, CondominiumService>();
        }
    }
}
