using CondoPlanner.Application.Services;

namespace CondoPlanner.API.Utils.Extensions
{
    public static class WebApplicationBuilderExtensions
    {
        public static void InitializeServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<IReservationService, ReservationService>();
        }
    }
}
