#!/bin/bash

# GitHub Pages Deployment Script for Star Wars Characters
# This script helps with local testing and provides deployment instructions

echo "🚀 Star Wars Characters - GitHub Pages Deployment"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔨 Building project for production..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Commit and push your changes to the main branch:"
    echo "   git add ."
    echo "   git commit -m 'Add GitHub Pages deployment setup'"
    echo "   git push origin main"
    echo ""
    echo "2. Enable GitHub Pages in your repository:"
    echo "   - Go to Settings → Pages"
    echo "   - Set Source to 'GitHub Actions'"
    echo ""
    echo "3. Your site will be available at:"
    echo "   https://ro-off.github.io/star-wars-characters/"
    echo ""
    echo "4. To preview the build locally:"
    echo "   npm run preview"
    echo ""
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
