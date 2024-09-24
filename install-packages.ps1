# Pacotes para o projeto API
dotnet add "CondoPlanner.API/CondoPlanner.API.csproj" package "Duende.IdentityServer"
dotnet add "CondoPlanner.API/CondoPlanner.API.csproj" package "Duende.IdentityServer.AspNetIdentity"
dotnet add "CondoPlanner.API/CondoPlanner.API.csproj" package "Microsoft.AspNetCore.Identity.EntityFrameworkCore"
dotnet add "CondoPlanner.API/CondoPlanner.API.csproj" package "Microsoft.EntityFrameworkCore.Sqlite"
dotnet add "CondoPlanner.API/CondoPlanner.API.csproj" package "Microsoft.AspNetCore.Authentication.JwtBearer"

# Instalar a ferramenta dotnet-ef globalmente para migrações
dotnet tool install --global dotnet-ef

# Gerar a migração inicial para o contexto de Identity e aplicar a migração
dotnet ef migrations add InitialIdentity --context AppIdentityDbContext --project "CondoPlanner.API/CondoPlanner.API.csproj"
dotnet ef database update --context AppIdentityDbContext --project "CondoPlanner.API/CondoPlanner.API.csproj"