
# react-dotnet-vitejs
Sample project using netcore 5, ViteJS, React and TypeScript. Runs via netcore CLI or F5 within Visual Studio.

## Prerequisites
 - .NET 5.0 (or higher) SDK
 - Node.js 12.0.0 or higher

## Build
```
git clone https://github.com/click2install/react-dotnet-vitejs.git
cd react-dotnet-vitejs
dotnet run
```
Browse to https://localhost:5001 to see the working app. 
The first run will install all `npm` dependencies.

## Publish
```
dotnet publish
```

All assets will be in the `www` folder. Testing the production build can be done with
```
set ASPNETCORE_ENVIRONMENT=Production
dotnet run --no-launch-profile
```
Browse to https://localhost:5001 to see the working production built app.