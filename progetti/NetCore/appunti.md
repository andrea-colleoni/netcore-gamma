# Comandi utili

## Installazione EF Tools

dotnet tool install --global dotnet-ef   
dotnet tool update --global dotnet-ef

## Scaffold database

dotnet ef dbcontext scaffold "Server=(local);Database=ore-lavorate;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Context

## Creazione migrations

