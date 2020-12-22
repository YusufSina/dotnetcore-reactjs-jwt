FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.sln .
COPY Backend.API/*.csproj ./Backend.API/
COPY Backend.Core/*.csproj ./Backend.Core/
COPY Backend.Infrastructure/*.csproj ./Backend.Infrastructure/

RUN dotnet restore

COPY Backend.API/. ./Backend.API/
COPY Backend.Core/. ./Backend.Core/
COPY Backend.Infrastructure/. ./Backend.Infrastructure/

WORKDIR /app
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "Backend.API.dll"]
