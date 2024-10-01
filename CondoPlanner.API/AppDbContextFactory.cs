//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Design;
//using Microsoft.Extensions.Configuration;
//using System.IO;

//namespace CondoPlanner.Infrastructure.Persistence.Infrastructure
//{
//    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
//    {
//        public AppDbContext CreateDbContext(string[] args)
//        {
//            var basePath = Directory.GetCurrentDirectory();

//            var appSettingsPath = Path.Combine(basePath, "appsettings.json");

//            if (!File.Exists(appSettingsPath))
//            {
//                basePath = Path.Combine(basePath, "../CondoPlanner.API");
//            }

//            IConfigurationRoot configuration = new ConfigurationBuilder()
//                .SetBasePath(basePath)
//                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
//                .Build();

//            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
//            var connectionString = configuration.GetConnectionString("DefaultConnection");

//            optionsBuilder.UseSqlite(connectionString);

//            return new AppDbContext(optionsBuilder.Options);
//        }
//    }
//}
