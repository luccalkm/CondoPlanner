using CondoPlanner.API.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace CondoPlanner.Infrastructure
{
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            // Obter o diretório atual onde o comando está sendo executado
            var basePath = Directory.GetCurrentDirectory();

            // Verificar se o arquivo appsettings.json está no diretório esperado
            var appSettingsPath = Path.Combine(basePath, "appsettings.json");

            if (!File.Exists(appSettingsPath))
            {
                // Se o arquivo não for encontrado, definir o caminho manualmente
                basePath = Path.Combine(basePath, "../CondoPlanner.API");
            }

            // Carregar o arquivo de configuração a partir do caminho correto
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            optionsBuilder.UseSqlite(connectionString);

            return new AppDbContext(optionsBuilder.Options);
        }
    }
}
