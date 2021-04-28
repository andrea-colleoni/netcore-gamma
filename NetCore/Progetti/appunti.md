# Comandi utili

## Installazione EF Tools

dotnet tool install --global dotnet-ef   
dotnet tool update --global dotnet-ef

## Scaffold database

dotnet ef dbcontext scaffold "Server=(local);Database=ore-lavorate;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Context

## Creazione migrations

dotnet ef migrations add iniziale

## Applicazione migrations

dotnet ef database update

# Links

- https://microservices.io/
- https://jwt.io/
- https://en.wikipedia.org/wiki/Mediator_pattern
- https://docs.microsoft.com/it-it/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-application-layer-implementation-web-api#the-command-process-pipeline-how-to-trigger-a-command-handler

