# 🌐 JuniorCoders Website - Live Hosting Guide

## Your Website is Now on GitHub!
Repository: https://github.com/dida-mlambo/juniorcoders-website

## 🚀 Make Your Website Live (GitHub Pages)

### Step-by-Step Instructions:

1. **Visit your repository**: [https://github.com/dida-mlambo/juniorcoders-website](https://github.com/dida-mlambo/juniorcoders-website)

2. **Click "Settings"** (tab at the top of your repository page)

3. **Find "Pages"** in the left sidebar menu

4. **Configure GitHub Pages**:
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
   - Click **"Save"**

5. **Your website will be live at**:
   ```
   https://dida-mlambo.github.io/juniorcoders-website/
   ```

6. **Wait 2-5 minutes** for GitHub to build and deploy your site

7. **Look for the green checkmark** ✅ in your repository to confirm deployment

## 🔄 How to Update Your Live Website

### Method 1: Using the Update Script
```bash
# Navigate to your website folder
cd ~/Documents/JuniorCoders_Website

# Run the update script
./update-website.sh
```

### Method 2: Manual Git Commands
```bash
# Navigate to your website folder
cd ~/Documents/JuniorCoders_Website

# Add your changes
git add .

# Commit with a message
git commit -m "Updated website content"

# Push to GitHub (automatically updates live site)
git push origin main
```

## 🎯 What You Get:

### ✅ **Free Professional Website**
- Live URL: `https://dida-mlambo.github.io/juniorcoders-website/`
- No monthly hosting fees
- SSL certificate (https://) included
- Fast global CDN delivery

### ✅ **Easy Updates**
- Edit files on your Mac
- Run update script
- Changes go live in 2-5 minutes

### ✅ **Professional Features**
- Custom domain support (optional)
- Version control and backups
- Collaboration ready
- Mobile responsive

## 🌍 Custom Domain (Optional)

If you want to use your own domain (like `juniorcoders.zw`):

1. **Buy a domain** from a registrar (Namecheap, GoDaddy, etc.)
2. **In GitHub Pages settings**, add your custom domain
3. **Update DNS records** at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: dida-mlambo.github.io
   ```

## 📱 Mobile & Social Media Integration

Your website includes:
- ✅ Responsive mobile design
- ✅ Social media links (Facebook, Instagram, LinkedIn, TikTok)
- ✅ Contact forms
- ✅ School partnership features
- ✅ All your programs (Scratch, Robotics, Game Dev, Projects Assist)

## 🎉 Next Steps

1. **Enable GitHub Pages** (follow steps above)
2. **Test your live website**
3. **Share your URL** with students and schools
4. **Update content** as needed using the update script

## 🆘 Need Help?

- **GitHub Pages Documentation**: https://docs.github.com/en/pages
- **Custom Domain Setup**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Your JuniorCoders website is ready to inspire the next generation of African coders!** 🚀
