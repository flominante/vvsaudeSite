# VV Saúde Clinic Website (React)

Professional and modern 6-page clinic website built with React.

## Pages included

- Landing page with:
  - Initial hero slider
  - Contact form
  - Links and sections for clinic info, specialties, and partners
- About page
- Team page
- Specialties page
- News page
- Contact page

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Build output is generated in `dist/`.

## Integrating in ASP.NET Core

You have two common options:

1. **Serve React as static files from ASP.NET Core**
   - Build this app (`npm run build`).
   - Copy the generated `dist/` files into your ASP.NET Core `wwwroot/` folder.
   - Configure fallback routing to `index.html` for SPA routes.

2. **Host React separately and call ASP.NET Core APIs**
   - Deploy this React app in a static host (or reverse proxy route).
   - Keep ASP.NET Core as backend API.

For option 1, configure fallback in `Program.cs` with:

```csharp
app.UseDefaultFiles();
app.UseStaticFiles();
app.MapFallbackToFile("index.html");
```

> Note: If your ASP.NET Core app is under a virtual directory, set Vite `base` in `vite.config.js` accordingly.
