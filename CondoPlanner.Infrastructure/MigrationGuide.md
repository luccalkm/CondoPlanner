## Criar uma Migração

`dotnet ef migrations add InitialCreate --project CondoPlanner.Infrastructure/CondoPlanner.Infrastructure.csproj --startup-project CondoPlanner.API/CondoPlanner.API.csproj`

### Explicação:

- --project: Especifica onde está o DbContext.
- --startup-project: Especifica o projeto que contém o Program.cs e a configuração de serviços.

## Aplicar as Migrações

`dotnet ef database update --project CondoPlanner.Infrastructure/CondoPlanner.Infrastructure.csproj --startup-project CondoPlanner.API/CondoPlanner.API.csproj`
