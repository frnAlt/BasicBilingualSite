// Basic Knowledge of Singing - Interactive Features
// Author: Farhan Muh Tasim

(function() {
    'use strict';

    // Theme Management
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Language Management
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'en';
    
    // Mobile Menu Management
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    // Initialize Theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }

    // Toggle Theme
    function toggleTheme() {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Initialize Language
    function initLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        currentLang = savedLang;
        updateLanguage(currentLang);
    }

    // Update Language
    function updateLanguage(lang) {
        const enElements = document.querySelectorAll('[data-lang="en"]');
        const bnElements = document.querySelectorAll('[data-lang="bn"]');
        
        if (lang === 'en') {
            enElements.forEach(el => el.style.display = '');
            bnElements.forEach(el => el.style.display = 'none');
            html.setAttribute('lang', 'en');
        } else {
            enElements.forEach(el => el.style.display = 'none');
            bnElements.forEach(el => el.style.display = '');
            html.setAttribute('lang', 'bn');
        }
    }

    // Toggle Language
    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        updateLanguage(currentLang);
        localStorage.setItem('language', currentLang);
        
        // Add smooth transition effect
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 200);
    }

    // Toggle Mobile Menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        
        // Change icon
        if (mobileMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }

    // Close mobile menu when clicking on a link
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }

    // Navbar Scroll Effect
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Smooth Scroll to Section
    function smoothScrollToSection(e) {
        const target = e.currentTarget.getAttribute('href');
        
        if (target && target.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(target);
            
            if (element) {
                const offset = navbar.offsetHeight;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        }
    }

    // Intersection Observer for Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        const animatedElements = document.querySelectorAll('.glass-card, .hover-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Event Listeners
    function initEventListeners() {
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        // Language toggle
        if (langToggle) {
            langToggle.addEventListener('click', toggleLanguage);
        }

        // Mobile menu toggle
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Smooth scroll for all navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', smoothScrollToSection);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', handleScroll);

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    closeMobileMenu();
                }
            }
        });

        // Close mobile menu on window resize if screen becomes larger
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Social Media Link Handlers (for demonstration)
    function initSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Check if href is just "#" (placeholder)
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                    const platform = link.querySelector('span').textContent;
                    showMessage(`Connect with us on ${platform}! (Link to be added)`);
                }
            });
        });
    }

    // Show temporary message
    function showMessage(text) {
        const message = document.createElement('div');
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(37, 99, 235, 0.95);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            animation: fadeIn 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 3000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);

    // Initialize everything when DOM is loaded
    function init() {
        initTheme();
        initLanguage();
        initEventListeners();
        initScrollAnimations();
        initSocialLinks();
        
        console.log('Basic Knowledge of Singing - Website Loaded Successfully');
        console.log('Developed by Farhan Muh Tasim');
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
