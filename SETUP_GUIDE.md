# JuniorCoders Website Setup Guide

## 🚀 Quick Start

### Step 1: Customize Your Information
Open `index.html` and replace these placeholders with your actual details:

```html
<!-- Social Media Links -->
<a href="YOUR_FACEBOOK_URL" target="_blank" class="social-link">
<a href="YOUR_TWITTER_URL" target="_blank" class="social-link">
<a href="YOUR_INSTAGRAM_URL" target="_blank" class="social-link">
<a href="YOUR_LINKEDIN_URL" target="_blank" class="social-link">
<a href="YOUR_YOUTUBE_URL" target="_blank" class="social-link">

<!-- Contact Information -->
<p>+263 XX XXX XXXX<br>Mon-Fri 8AM-6PM</p>
<p>your-email@domain.com<br>contact@juniorcoders.zw</p>
<a href="YOUR_LINKTREE_URL" target="_blank">LinkTree</a>
<a href="YOUR_WEBSITE_URL" target="_blank">Website</a>

<!-- Phone Links -->
<a href="tel:+263XXXXXXXXX" class="btn btn-secondary">
```

### Step 2: Add Your Logo
1. Save your logo as `logo.png` in the `images/` folder
2. Replace the robot icon in the navigation:
```html
<!-- Replace this -->
<i class="fas fa-robot"></i>
<span>JuniorCoders</span>

<!-- With this -->
<img src="images/logo.png" alt="JuniorCoders Logo" style="height: 40px;">
<span>JuniorCoders</span>
```

### Step 3: Update Colors (Optional)
If you have specific brand colors, update them in `styles.css`:
```css
:root {
    --blue-color: #YOUR_BLUE_COLOR;
    --primary-color: #YOUR_PRIMARY_COLOR;
    --secondary-color: #YOUR_SECONDARY_COLOR;
}
```

### Step 4: Add Real Images
Replace the placeholder images with actual photos:

1. **Hero Section Image**:
```html
<!-- Add after hero-visual div -->
<div class="hero-image">
    <img src="images/hero-students-coding.jpg" alt="Students learning robotics">
</div>
```

2. **About Section Image**:
```html
<!-- Replace the placeholder -->
<div class="about-image">
    <img src="images/about-team.jpg" alt="JuniorCoders team and students">
</div>
```

3. **Program Images**:
```html
<!-- Add to each program card -->
<div class="program-image">
    <img src="images/blockly-program.jpg" alt="Blockly Programming">
</div>
```

### Step 5: Test Locally
```bash
# Navigate to your website folder
cd ~/Documents/JuniorCoders_Website

# Start local server
python3 -m http.server 8000

# Open in browser: http://localhost:8000
```

## 📸 Image Upload Instructions

### For Images You Want to Upload:

1. **Save images** to the `images/` folder with descriptive names:
   - `hero-main.jpg` - Main hero section image
   - `about-team.jpg` - Team/about section photo  
   - `blockly-kids.jpg` - Kids using Blockly
   - `robotics-students.jpg` - Students with robots
   - `coding-teens.jpg` - Teenagers coding
   - `game-dev.jpg` - Game development session
   - `university-projects.jpg` - University students
   - `school-partnership.jpg` - School collaboration
   - `logo.png` - Your company logo

2. **Update HTML** to reference your images:
```html
<img src="images/your-image-name.jpg" alt="Descriptive text">
```

3. **Add CSS styling** if needed:
```css
.your-image-class {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: var(--shadow);
}
```

## 🌐 Publishing Your Website

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository called `juniorcoders-website`
3. Upload all your files
4. Enable GitHub Pages in repository settings
5. Your site will be live at: `https://yourusername.github.io/juniorcoders-website`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop your website folder
3. Get a free subdomain or connect your own domain

### Option 3: Traditional Web Hosting
1. Purchase hosting from a provider
2. Upload files via FTP
3. Point your domain to the hosting

## 🔧 Common Customizations

### Change Program Ages
Update the age ranges in the program cards:
```html
<div class="program-age">Ages 6-10</div>
```

### Add New Programs
Copy an existing program card and modify:
```html
<div class="program-card">
    <div class="card-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Program Name</h3>
    <p>Program description...</p>
    <ul class="program-features">
        <li><i class="fas fa-check"></i> Feature 1</li>
        <li><i class="fas fa-check"></i> Feature 2</li>
        <li><i class="fas fa-check"></i> Feature 3</li>
    </ul>
    <div class="program-age">Age Range</div>
</div>
```

### Modify Contact Form
Add/remove fields in the contact form:
```html
<div class="form-group">
    <input type="text" name="new-field" placeholder="New Field" required>
</div>
```

## 🎨 Design Tips

### Image Guidelines:
- **Hero images**: 1200x600px minimum
- **Program images**: 400x300px
- **About images**: 800x600px
- **Logo**: Multiple sizes (favicon: 32x32px, header: 200x50px)

### Photo Style:
- Bright, well-lit photos
- Students actively engaged
- Diverse representation
- Professional but approachable
- Consistent color grading

### Content Tips:
- Keep text concise and engaging
- Use action words
- Highlight benefits, not just features
- Include testimonials if available
- Add specific achievements/numbers

## 📱 Testing Checklist

Before going live, test:
- [ ] All links work
- [ ] Contact form submits properly
- [ ] Images load correctly
- [ ] Responsive design on mobile
- [ ] Fast loading speed
- [ ] All contact information is correct
- [ ] Social media links are accurate
- [ ] Spelling and grammar check

## 🆘 Troubleshooting

### Images Not Loading:
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify file extensions match (jpg, png, etc.)

### Layout Issues:
- Clear browser cache
- Check CSS syntax
- Validate HTML markup

### Contact Form Not Working:
- For production, you'll need a backend service
- Consider using Netlify Forms or Formspree
- Test email validation

---

**Need Help?** 
Feel free to ask questions about customizing your website!
