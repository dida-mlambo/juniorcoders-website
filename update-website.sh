#!/bin/bash

# JuniorCoders Website Update Script
# Run this script whenever you make changes to update your live website

echo "🚀 Updating JuniorCoders Website..."

# Add all changes
git add .

# Ask for commit message
read -p "📝 Describe your changes: " commit_message

# Commit changes
git commit -m "$commit_message"

# Push to GitHub (which automatically updates your live website)
git push origin main

echo "✅ Website updated successfully!"
echo "🌐 Your changes will be live at: https://dida-mlambo.github.io/juniorcoders-website/"
echo "⏱️  Allow 2-5 minutes for changes to appear online"
