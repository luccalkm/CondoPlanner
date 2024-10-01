# Criação da solução principal
dotnet new sln -n "CondoPlanner"

# Criação de cada projeto
dotnet new webapi -n "CondoPlanner.API"
dotnet new classlib -n "CondoPlanner.Application"
dotnet new classlib -n "CondoPlanner.Domain"
dotnet new classlib -n "CondoPlanner.Infrastructure"

# Adicionar os projetos à solução
dotnet sln add "CondoPlanner.API/CondoPlanner.API.csproj"
dotnet sln add "CondoPlanner.Application/CondoPlanner.Application.csproj"
dotnet sln add "CondoPlanner.Domain/CondoPlanner.Domain.csproj"
dotnet sln add "CondoPlanner.Infrastructure/CondoPlanner.Infrastructure.csproj"


# Adicionar referências entre os projetos
dotnet add "CondoPlanner.API/CondoPlanner.API.csproj" reference "CondoPlanner.Application/CondoPlanner.Application.csproj"
dotnet add "CondoPlanner.Application/CondoPlanner.Application.csproj" reference "CondoPlanner.Domain/CondoPlanner.Domain.csproj"
dotnet add "CondoPlanner.API/CondoPlanner.API.csproj" reference "CondoPlanner.Infrastructure/CondoPlanner.Infrastructure.csproj"
dotnet add "CondoPlanner.Application/CondoPlanner.Application.csproj" reference "CondoPlanner.Infrastructure/CondoPlanner.Infrastructure.csproj"
