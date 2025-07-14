# Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Automatic Deployment (Recommended)

The project will automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages with Actions**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push your changes**:

   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to the "Actions" tab in your GitHub repository
   - Watch the deployment workflow run
   - Once completed, your site will be available at: `https://ro-off.github.io/star-wars-characters/`

## Manual Build (For Testing)

To test the build locally before deployment:

```bash
# Build the project
npm run deploy

# Preview the built project locally
npm run preview
```

## Configuration Details

The deployment setup includes:

- **Vite Configuration**: Base path set to `/star-wars-characters/` for GitHub Pages
- **Router Configuration**: Uses web history with proper base path
- **SPA Routing**: Includes 404.html and index.html scripts for client-side routing
- **GitHub Actions**: Automated build and deployment workflow

## Troubleshooting

If deployment fails:

1. Check the Actions tab for error messages
2. Ensure GitHub Pages is enabled with "GitHub Actions" as source
3. Verify the repository name matches the base path in configuration
4. Make sure all dependencies are properly listed in package.json

## File Structure

```
.github/workflows/deploy.yml  # GitHub Actions workflow
public/404.html              # SPA routing fallback
index.html                   # Main HTML with SPA routing script
vite.config.ts              # Vite configuration with base path
src/router.ts               # Vue Router with web history
```
