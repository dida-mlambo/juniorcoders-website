// Smooth scrolling and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveNav);
    
    // Collaboration form modal functionality
    window.openCollaborationForm = function() {
        showCollaborationModal();
    };
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                program: formData.get('program'),
                message: formData.get('message')
            };
            
            // Validate form
            if (!data.name || !data.email || !data.program) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner loading"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('program-card')) {
                    const cards = entry.target.parentElement.querySelectorAll('.program-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
                        }, 100);
                    });
                }
                
                if (entry.target.classList.contains('feature')) {
                    const features = entry.target.parentElement.querySelectorAll('.feature');
                    features.forEach((feature, index) => {
                        setTimeout(() => {
                            feature.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
                        }, 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.program-card, .feature, .about-content, .contact-content');
    animateElements.forEach(el => observer.observe(el));
    
    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing animation after page load
        setTimeout(typeWriter, 1000);
    }
    
    // Parallax effect for floating icons
    const floatingIcons = document.querySelectorAll('.floating-icons i');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        floatingIcons.forEach((icon, index) => {
            const speed = 0.2 + (index * 0.1);
            icon.style.transform = `translateY(${parallax * speed}px) rotate(${scrolled * 0.01}deg)`;
        });
    });
    
    // Counter animation for hero stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            }
        }
        
        updateCounter();
    }
    
    // Animate counters when hero section is visible
    const heroStats = document.querySelectorAll('.stat-number');
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroStats.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    if (number) {
                        animateCounter(stat, number);
                    }
                });
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
    
    // Particle effect for hero background
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${5 + Math.random() * 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            hero.appendChild(particle);
        }
        
        // Add particle animation CSS
        if (!document.getElementById('particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes floatParticle {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Initialize particles
    createParticles();
    
    // Program card hover effects
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('featured') ? 'scale(1.05)' : 'translateY(0) scale(1)';
        });
    });
    
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.type !== 'submit') {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: rippleEffect 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });
    
    // Add ripple effect CSS
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function showCollaborationModal() {
    // Remove existing modal if any
    const existingModal = document.querySelector('.collaboration-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'collaboration-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeCollaborationModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-handshake"></i> School Partnership Request</h2>
                <button class="modal-close" onclick="closeCollaborationModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form id="collaborationForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="schoolName">School Name *</label>
                        <input type="text" id="schoolName" name="schoolName" required>
                    </div>
                    <div class="form-group">
                        <label for="contactPerson">Contact Person *</label>
                        <input type="text" id="contactPerson" name="contactPerson" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="position">Position/Title</label>
                        <input type="text" id="position" name="position" placeholder="e.g., Principal, IT Coordinator">
                    </div>
                    <div class="form-group">
                        <label for="collaborationEmail">Email *</label>
                        <input type="email" id="collaborationEmail" name="email" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="collaborationPhone">Phone</label>
                        <input type="tel" id="collaborationPhone" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="studentCount">Number of Students</label>
                        <select id="studentCount" name="studentCount">
                            <option value="">Select range</option>
                            <option value="1-50">1-50 students</option>
                            <option value="51-100">51-100 students</option>
                            <option value="101-200">101-200 students</option>
                            <option value="201-500">201-500 students</option>
                            <option value="500+">500+ students</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="collaborationType">Partnership Type</label>
                    <div class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="collaborationType" value="curriculum"> Curriculum Integration
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="collaborationType" value="afterschool"> After-school Clubs
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="collaborationType" value="training"> Teacher Training
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="collaborationType" value="equipment"> Equipment Supply
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="collaborationMessage">Tell us about your school's needs</label>
                    <textarea id="collaborationMessage" name="message" rows="4" 
                              placeholder="Describe your current STEM program, goals, and how we can help..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-full">
                    <i class="fas fa-paper-plane"></i>
                    Send Partnership Request
                </button>
            </form>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Handle form submission
    const form = document.getElementById('collaborationForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            schoolName: formData.get('schoolName'),
            contactPerson: formData.get('contactPerson'),
            email: formData.get('email')
        };
        
        if (!data.schoolName || !data.contactPerson || !data.email) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner loading"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Partnership request sent! We\'ll contact you within 24 hours.', 'success');
            closeCollaborationModal();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
    
    // Add modal CSS if not exists
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(5px);
            }
            .modal-content {
                background: white;
                border-radius: 20px;
                padding: 0;
                max-width: 600px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .modal-header {
                background: linear-gradient(135deg, #1877F2 0%, #42A5F5 100%);
                color: white;
                padding: 2rem;
                border-radius: 20px 20px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-header h2 {
                margin: 0;
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .modal-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background 0.3s ease;
            }
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            .modal-content form {
                padding: 2rem;
            }
            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
            .form-group {
                margin-bottom: 1.5rem;
            }
            .form-group label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 600;
                color: #2C3E50;
            }
            .form-group input,
            .form-group select,
            .form-group textarea {
                width: 100%;
                padding: 1rem;
                border: 2px solid #ECF0F1;
                border-radius: 10px;
                font-size: 1rem;
                transition: border-color 0.3s ease;
            }
            .form-group input:focus,
            .form-group select:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: #1877F2;
            }
            .checkbox-group {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
                margin-top: 0.5rem;
            }
            .checkbox-label {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-weight: normal;
                cursor: pointer;
            }
            .checkbox-label input {
                width: auto;
                margin: 0;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @media (max-width: 768px) {
                .form-row {
                    grid-template-columns: 1fr;
                }
                .checkbox-group {
                    grid-template-columns: 1fr;
                }
                .modal-content {
                    width: 95%;
                    margin: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

window.closeCollaborationModal = function() {
    const modal = document.querySelector('.collaboration-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Bootcamp Calendar Modal
window.openBootcampModal = function() {
    showBootcampCalendarModal();
}

function showBootcampCalendarModal() {
    // Remove existing modal if any
    const existingModal = document.querySelector('.bootcamp-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'bootcamp-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeBootcampModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-calendar-alt"></i> Add Bootcamp to Calendar</h2>
                <button class="modal-close" onclick="closeBootcampModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="calendar-options">
                <h3>🚀 JuniorCoders Holiday Coding Bootcamp</h3>
                <div class="event-details">
                    <p><strong>📅 Dates:</strong> December 15-19, 2025</p>
                    <p><strong>⏰ Time:</strong> 9:00 AM - 1:00 PM daily</p>
                    <p><strong>👥 Ages:</strong> 6 years and above</p>
                    <p><strong>📍 Location:</strong> JuniorCoders Zimbabwe</p>
                    <p><strong>📚 Topics:</strong> Scratch Programming, Basic Robotics, Game Creation</p>
                </div>
                <div class="calendar-buttons">
                    <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=JuniorCoders%20Holiday%20Coding%20Bootcamp&dates=20251215T070000Z/20251219T110000Z&details=5-day%20intensive%20coding%20bootcamp%20covering%20Scratch%20programming%2C%20basic%20robotics%2C%20and%20game%20creation.%20Ages%206%2B.%20Daily%20sessions%209AM-1PM.%20Contact%20%2B263%2071%20743%203719%20for%20registration.&location=JuniorCoders%20Zimbabwe&recur=RRULE:FREQ=DAILY;COUNT=5" target="_blank" class="btn btn-primary calendar-btn">
                        <i class="fab fa-google"></i>
                        Add to Google Calendar
                    </a>
                    <a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0APRODID:-//JuniorCoders//Bootcamp//EN%0ABEGIN:VEVENT%0AUID:juniorcoders-bootcamp-2025@juniorcoders.zw%0ADTSTAMP:20240916T000000Z%0ADTSTART:20251215T070000Z%0ADTEND:20251219T110000Z%0ASUMMARY:JuniorCoders Holiday Coding Bootcamp%0ADESCRIPTION:5-day intensive coding bootcamp covering Scratch programming, basic robotics, and game creation. Ages 6+. Daily sessions 9AM-1PM. Contact +263 71 743 3719 for registration.%0ALOCATION:JuniorCoders Zimbabwe%0ARRULE:FREQ=DAILY;COUNT=5%0AEND:VEVENT%0AEND:VCALENDAR" download="juniorcoders-bootcamp.ics" class="btn btn-secondary calendar-btn">
                        <i class="fas fa-download"></i>
                        Download .ics File
                    </a>
                    <a href="https://outlook.live.com/calendar/0/deeplink/compose?subject=JuniorCoders%20Holiday%20Coding%20Bootcamp&startdt=2025-12-15T09:00:00&enddt=2025-12-19T13:00:00&body=5-day%20intensive%20coding%20bootcamp%20covering%20Scratch%20programming%2C%20basic%20robotics%2C%20and%20game%20creation.%20Ages%206%2B.%20Contact%20%2B263%2071%20743%203719%20for%20registration.&location=JuniorCoders%20Zimbabwe" target="_blank" class="btn btn-secondary calendar-btn">
                        <i class="fab fa-microsoft"></i>
                        Add to Outlook
                    </a>
                </div>
                <div class="registration-reminder">
                    <p><strong>📞 Ready to Register?</strong></p>
                    <a href="https://wa.me/263717433719?text=Hi%20JuniorCoders!%20I%20just%20added%20the%20December%20bootcamp%20to%20my%20calendar%20and%20I'm%20ready%20to%20register.%20Please%20send%20me%20the%20registration%20details!" target="_blank" class="btn btn-primary whatsapp-register">
                        <i class="fab fa-whatsapp"></i>
                        Register via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add calendar modal CSS if not exists
    if (!document.getElementById('calendar-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'calendar-modal-styles';
        style.textContent = `
            .calendar-options {
                padding: 2rem;
            }
            .calendar-options h3 {
                text-align: center;
                color: #FF6B35;
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }
            .event-details {
                background: #f8f9fa;
                padding: 1.5rem;
                border-radius: 10px;
                margin-bottom: 2rem;
                border-left: 4px solid #FF6B35;
            }
            .event-details p {
                margin-bottom: 0.8rem;
                color: #2C3E50;
            }
            .event-details p:last-child {
                margin-bottom: 0;
            }
            .calendar-buttons {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 2rem;
            }
            .calendar-btn {
                justify-content: center;
                text-decoration: none;
            }
            .registration-reminder {
                text-align: center;
                padding-top: 2rem;
                border-top: 2px solid #eee;
            }
            .registration-reminder p {
                margin-bottom: 1rem;
                color: #2C3E50;
                font-size: 1.1rem;
            }
            .whatsapp-register {
                background: #25D366 !important;
                text-decoration: none;
            }
            .whatsapp-register:hover {
                background: #128C7E !important;
            }
            @media (max-width: 768px) {
                .calendar-options {
                    padding: 1rem;
                }
                .calendar-options h3 {
                    font-size: 1.5rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

window.closeBootcampModal = function() {
    const modal = document.querySelector('.bootcamp-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? '#2E8B57' : type === 'error' ? '#E74C3C' : '#3498DB'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        margin-left: auto;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Preloader
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="robot-loader">
                <i class="fas fa-robot"></i>
            </div>
            <h3>Loading JuniorCoders...</h3>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
        </div>
    `;
    
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFD700 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .preloader-content {
            text-align: center;
            color: white;
        }
        .robot-loader {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: robotBounce 1s ease-in-out infinite;
        }
        .loading-bar {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            overflow: hidden;
            margin: 1rem auto;
        }
        .loading-progress {
            width: 0;
            height: 100%;
            background: white;
            animation: loadingProgress 2s ease-in-out;
        }
        @keyframes robotBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes loadingProgress {
            0% { width: 0; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(preloader);
    
    // Remove preloader after animation
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 2500);
});
