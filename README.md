
# react-dotnet-vitejs
Sample project using netcore 5, ViteJS, React and TypeScript. 
The entry HTML page is a Razor view that renders the user details into the entry page HTML and read using a React Context Provider. No authenticated is added to this code, you can easily scaffold the netcore Identity and render a mapped `User` object from the `User.Identity` property instead.

The netcore SPA services is configured to output to the same folder as Vite so the application can be run in debug from the netcore CLI or the usual F5 within Visual Studio.

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