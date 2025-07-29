#!/bin/bash

# Build Test Script
# This script validates the production build

echo "🚀 Starting SlipStream Build Validation..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Type checking
echo "🔍 Running type check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type check failed!"
    exit 1
fi

# Linting
echo "🧹 Running linter..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed!"
    exit 1
fi

# Build for production
echo "🏗️ Building for production..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Check if build artifacts exist
echo "✅ Checking build artifacts..."
if [ ! -d "dist" ]; then
    echo "❌ Build directory not found!"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo "❌ Index.html not found in build!"
    exit 1
fi

# Calculate build size
BUILD_SIZE=$(du -sh dist/ | cut -f1)
echo "📊 Build size: $BUILD_SIZE"

# Start preview server (optional)
if [ "$1" = "--preview" ]; then
    echo "🌐 Starting preview server..."
    npm run preview
fi

echo "✅ Build validation completed successfully!"
echo "🎉 SlipStream is ready for deployment!"
