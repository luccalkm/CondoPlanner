## Criar uma Migra��o

`dotnet ef migrations add InitialCreate --project CondoPlanner.Infrastructure/CondoPlanner.Infrastructure.csproj --startup-project CondoPlanner.API/CondoPlanner.API.csproj`

### Explica��o:

- --project: Especifica onde est� o DbContext.
- --startup-project: Especifica o projeto que cont�m o Program.cs e a configura��o de servi�os.

## Aplicar as Migra��es

`dotnet ef database update --project CondoPlanner.Infrastructure/CondoPlanner.Infrastructure.csproj --startup-project CondoPlanner.API/CondoPlanner.API.csproj`
