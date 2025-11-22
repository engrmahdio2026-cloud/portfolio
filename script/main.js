// =============================================
// QUANTUM ENGINEERING PORTFOLIO JS - ENHANCED
// Version 4.0 | Professional Grade | 500+ Lines
// =============================================

class QuantumPortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupPerformanceMonitoring();
        this.initThemeSystem();
        this.initNavigation();
        this.initAnimations();
        this.initGitHubIntegration();
        this.initProjectFiltering();
        this.initQuantumEffects();
        this.initARVRElements();
        this.initPWA();
        this.initFormHandler();
        this.initScrollEffects();
        this.initCounters();
        this.initSkillsAnimation();
        this.initModalSystem();
        this.initPerformanceOptimizations();
    }

    // =============================================
    // PERFORMANCE MONITORING SYSTEM
    // =============================================

    setupPerformanceMonitoring() {
        // Performance metrics
        this.performanceMetrics = {
            loadTime: performance.now(),
            animationFPS: 0,
            memoryUsage: 0
        };

        // Monitor FPS
        this.setupFPSMonitor();

        // Monitor memory
        this.setupMemoryMonitor();

        // Display performance metrics
        this.displayPerformanceMetrics();
    }

    setupFPSMonitor() {
        let frameCount = 0;
        let lastTime = performance.now();

        const measureFPS = () => {
            frameCount++;
            const currentTime = performance.now();

            if (currentTime - lastTime >= 1000) {
                this.performanceMetrics.animationFPS = Math.round((frameCount * 1000) / (currentTime - lastTime));
                frameCount = 0;
                lastTime = currentTime;
            }

            requestAnimationFrame(measureFPS);
        };

        measureFPS();
    }

    setupMemoryMonitor() {
        if (performance.memory) {
            setInterval(() => {
                this.performanceMetrics.memoryUsage = Math.round(performance.memory.usedJSHeapSize / 1048576);
            }, 5000);
        }
    }

    displayPerformanceMetrics() {
        const loadTime = performance.now() - this.performanceMetrics.loadTime;
        const monitor = document.getElementById('performanceMonitor');

        if (monitor) {
            const loadTimeElement = monitor.querySelector('#loadTime');
            if (loadTimeElement) {
                loadTimeElement.textContent = `${Math.round(loadTime)}ms`;
            }
        }
    }

    // =============================================
    // QUANTUM DESIGN SYSTEM
    // =============================================

    initQuantumEffects() {
        this.createQuantumParticles();
        this.initQuantumRipples();
        this.initQuantumWaves();
        this.init3DModelInteractions();
    }

    createQuantumParticles() {
        const quantumContainer = document.querySelector('.quantum-elements');
        if (!quantumContainer) return;

        // Create additional particles dynamically
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            particle.setAttribute('data-particle', i + 5);

            // Random positioning
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const size = Math.random() * 20 + 10;
            const delay = Math.random() * 10;

            particle.style.cssText = `
                left: ${left}%;
                top: ${top}%;
                width: ${size}px;
                height: ${size}px;
                animation-delay: ${delay}s;
            `;

            quantumContainer.appendChild(particle);
        }

        // Animate particles on scroll
        this.animateParticlesOnScroll();
    }

    animateParticlesOnScroll() {
        const particles = document.querySelectorAll('.quantum-particle');

        const animateParticles = () => {
            particles.forEach((particle, index) => {
                const scrollY = window.scrollY;
                const speed = (index % 3 + 1) * 0.5;
                const movement = Math.sin(scrollY * 0.01 * speed) * 20;

                particle.style.transform = `translateY(${movement}px) rotate(${movement}deg)`;
            });
        };

        window.addEventListener('scroll', animateParticles);
    }

    initQuantumRipples() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.quantum-btn');
            if (!target) return;

            const ripple = document.createElement('div');
            ripple.className = 'quantum-ripple-effect';

            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;

            target.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    initQuantumWaves() {
        const waves = document.querySelectorAll('.quantum-wave');
        waves.forEach((wave, index) => {
            wave.style.animationDelay = `${index * 2}s`;
        });
    }

    init3DModelInteractions() {
        const model = document.querySelector('.quantum-model');
        if (!model) return;

        let isDragging = false;
        let previousX = 0;
        let rotationY = 0;
        let rotationX = 0;

        model.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousX = e.clientX;
            model.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const deltaX = e.clientX - previousX;
            rotationY += deltaX * 0.5;

            model.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
            previousX = e.clientX;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            model.style.cursor = 'grab';
        });

        // Touch events for mobile
        model.addEventListener('touchstart', (e) => {
            isDragging = true;
            previousX = e.touches[0].clientX;
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;

            const deltaX = e.touches[0].clientX - previousX;
            rotationY += deltaX * 0.5;

            model.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
            previousX = e.touches[0].clientX;
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
        });
    }

    // =============================================
    // GITHUB INTEGRATION SYSTEM
    // =============================================

    initGitHubIntegration() {
        this.fetchGitHubStats();
        this.fetchGitHubRepos();
        this.setupGitHubContributions();
    }

    async fetchGitHubStats() {
        try {
            // Simulated GitHub stats - replace with actual API calls
            const stats = {
                repos: 15,
                stars: 23,
                forks: 12,
                contributions: 128
            };

            this.updateGitHubStats(stats);
        } catch (error) {
            console.warn('GitHub stats fetch failed:', error);
            this.updateGitHubStats({
                repos: 8,
                stars: 15,
                forks: 6,
                contributions: 89
            });
        }
    }

    updateGitHubStats(stats) {
        // Update GitHub stats counters
        this.animateCounter('.github-stats .stat-number[data-count]', stats);

        // Update hero stats
        const githubStat = document.querySelector('.hero-stats .stat[data-stat="github"] h3');
        if (githubStat) {
            githubStat.setAttribute('data-count', stats.repos);
            this.startCounter(githubStat);
        }
    }

    async fetchGitHubRepos() {
        try {
            // Simulated repository data
            const repos = [{
                    name: "structural-design",
                    description: "Structural analysis and design tools",
                    stars: 8,
                    forks: 3,
                    language: "Python",
                    url: "https://github.com/engenmahdiodowa/structural-design"
                },
                {
                    name: "engineering-tools",
                    description: "Collection of engineering calculation tools",
                    stars: 5,
                    forks: 2,
                    language: "VBA",
                    url: "https://github.com/engenmahdiodowa/engineering-tools"
                },
                {
                    name: "academic-projects",
                    description: "University projects and research",
                    stars: 10,
                    forks: 7,
                    language: "MATLAB",
                    url: "https://github.com/engenmahdiodowa/academic-projects"
                }
            ];

            this.displayGitHubRepos(repos);
        } catch (error) {
            console.warn('GitHub repos fetch failed:', error);
        }
    }

    displayGitHubRepos(repos) {
        // This would dynamically create repo cards or update existing ones
        console.log('GitHub Repos:', repos);

        // Update project cards with GitHub data
        const projectCards = document.querySelectorAll('.project-card[data-github-repo]');
        projectCards.forEach(card => {
            const repoName = card.getAttribute('data-github-repo');
            const repo = repos.find(r => r.name === repoName);

            if (repo) {
                const githubBadge = card.querySelector('.github-badge');
                if (githubBadge) {
                    githubBadge.innerHTML = `<i class="fab fa-github"></i><span>${repo.stars} Stars</span>`;
                }
            }
        });
    }

    setupGitHubContributions() {
        // Simulate contribution graph
        const graph = document.getElementById('contributionGraph');
        if (!graph) return;

        // Create a simple contribution grid
        let contributionsHTML = '';
        for (let i = 0; i < 56; i++) { // 8 weeks
            const count = Math.floor(Math.random() * 5);
            const intensity = count > 0 ? `var(--primary-${300 + count * 100})` : 'var(--dark-light)';
            contributionsHTML += `<div class="contribution-day" style="background-color: ${intensity}"></div>`;
        }

        graph.innerHTML = contributionsHTML;
    }

    // =============================================
    // PROJECT FILTERING SYSTEM
    // =============================================

    initProjectFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectGrid = document.getElementById('projectsGrid');

        if (!filterButtons.length || !projectGrid) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter, projectGrid);
            });
        });
    }

    filterProjects(filter, grid) {
        const projects = grid.querySelectorAll('.project-card');
        let visibleCount = 0;

        projects.forEach(project => {
            const categories = project.getAttribute('data-category').split(' ');
            const shouldShow = filter === 'all' || categories.includes(filter);

            if (shouldShow) {
                project.style.display = 'block';
                visibleCount++;

                // Add animation delay for staggered appearance
                project.style.animationDelay = `${visibleCount * 0.1}s`;
            } else {
                project.style.display = 'none';
            }
        });

        // Add quantum animation to visible projects
        if (visibleCount > 0) {
            this.animateFilteredProjects(projects, filter);
        }
    }

    animateFilteredProjects(projects, filter) {
        projects.forEach((project, index) => {
            const categories = project.getAttribute('data-category').split(' ');
            const shouldShow = filter === 'all' || categories.includes(filter);

            if (shouldShow) {
                project.style.animation = 'none';
                setTimeout(() => {
                    project.style.animation = 'quantumScaleIn 0.6s ease forwards';
                }, index * 100);
            }
        });
    }

    // =============================================
    // AR/VR READY SYSTEM
    // =============================================

    initARVRElements() {
        const arToggle = document.getElementById('arToggle');
        if (!arToggle) return;

        arToggle.addEventListener('click', () => {
            this.toggleARView();
        });
    }

    toggleARView() {
        const model = document.querySelector('.quantum-model');
        if (!model) return;

        model.classList.toggle('ar-mode');

        if (model.classList.contains('ar-mode')) {
            this.enterARMode();
        } else {
            this.exitARMode();
        }
    }

    enterARMode() {
        // Placeholder for AR implementation
        console.log('Entering AR Mode - Ready for WebXR integration');

        // Show AR instructions
        const arInstructions = document.createElement('div');
        arInstructions.className = 'ar-instructions';
        arInstructions.innerHTML = `
            <div class="ar-overlay">
                <h3>AR View Activated</h3>
                <p>Point your camera at a flat surface to place the model</p>
                <button class="btn btn-primary" onclick="portfolio.exitARMode()">Exit AR</button>
            </div>
        `;

        document.body.appendChild(arInstructions);
    }

    exitARMode() {
        const model = document.querySelector('.quantum-model');
        const arInstructions = document.querySelector('.ar-instructions');

        if (model) model.classList.remove('ar-mode');
        if (arInstructions) arInstructions.remove();
    }

    // =============================================
    // PWA SYSTEM
    // =============================================

    initPWA() {
        this.registerServiceWorker();
        this.setupInstallPrompt();
    }

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        }
    }

    setupInstallPrompt() {
        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;

            // Show install button
            this.showInstallPrompt();
        });

        window.addEventListener('appinstalled', () => {
            console.log('PWA installed successfully');
            deferredPrompt = null;
        });
    }

    showInstallPrompt() {
        // Create install prompt UI
        const installPrompt = document.createElement('div');
        installPrompt.className = 'install-prompt quantum-card';
        installPrompt.innerHTML = `
            <div class="install-content">
                <h4>Install Portfolio App</h4>
                <p>Add to your home screen for better experience</p>
                <div class="install-actions">
                    <button class="btn btn-primary" id="installBtn">Install</button>
                    <button class="btn btn-outline" id="dismissBtn">Later</button>
                </div>
            </div>
        `;

        document.body.appendChild(installPrompt);

        // Add event listeners
        document.getElementById('installBtn').addEventListener('click', this.installApp);
        document.getElementById('dismissBtn').addEventListener('click', () => {
            installPrompt.remove();
        });
    }

    installApp() {
        // This would trigger the PWA install prompt
        console.log('Installing PWA...');
    }

    // =============================================
    // ENHANCED THEME SYSTEM
    // =============================================

    initThemeSystem() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        const themeIcon = themeToggle.querySelector('i');
        const savedTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        // Apply saved theme
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeIcon) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        }

        // Enhanced theme toggle with quantum effects
        themeToggle.addEventListener('click', () => {
            this.toggleThemeWithEffects(themeIcon);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    this.enableDarkMode(themeIcon);
                } else {
                    this.enableLightMode(themeIcon);
                }
            }
        });
    }

    toggleThemeWithEffects(themeIcon) {
        // Add transition effects
        document.body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

        if (document.body.classList.contains('dark-mode')) {
            this.enableLightMode(themeIcon);
        } else {
            this.enableDarkMode(themeIcon);
        }

        // Remove transition after animation
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }

    enableDarkMode(themeIcon) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        this.emitThemeChange('dark');
    }

    enableLightMode(themeIcon) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        if (themeIcon) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
        this.emitThemeChange('light');
    }

    emitThemeChange(theme) {
        // Dispatch event for other components to listen to
        const event = new CustomEvent('themeChange', { detail: { theme } });
        document.dispatchEvent(event);
    }

    // =============================================
    // ENHANCED NAVIGATION SYSTEM
    // =============================================

    initNavigation() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupNavbarEffects();
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.querySelector('.nav-menu');

        if (!mobileMenuToggle || !navMenu) return;

        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');

            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }

            // Add quantum pulse effect
            this.triggerQuantumPulse(mobileMenuToggle);
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const updateActiveNav = () => {
            let current = '';
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                    this.triggerNavPulse(link);
                }
            });
        };

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }

    setupNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const updateNavbar = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', updateNavbar);
        updateNavbar();
    }

    triggerNavPulse(navLink) {
        const pulse = navLink.querySelector('.nav-pulse');
        if (pulse) {
            pulse.style.animation = 'none';
            setTimeout(() => {
                pulse.style.animation = 'quantumPulse 0.6s ease';
            }, 10);
        }
    }

    triggerQuantumPulse(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'quantumPulse 0.4s ease';
        }, 10);
    }

    // =============================================
    // ANIMATION SYSTEM
    // =============================================

    initAnimations() {
        this.initAOS();
        this.initScrollAnimations();
        this.initTimelineProgress();
    }

    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out-quart',
                once: true,
                mirror: false,
                offset: 100
            });
        }
    }

    initScrollAnimations() {
        // Custom scroll animations for quantum elements
        const quantumElements = document.querySelectorAll('[data-aos-quantum="true"]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('quantum-animate');
                    this.triggerQuantumEffect(entry.target);
                }
            });
        }, { threshold: 0.3 });

        quantumElements.forEach(el => observer.observe(el));
    }

    triggerQuantumEffect(element) {
        // Add quantum animation effects
        element.style.animation = 'quantumReveal 1s ease forwards';
    }

    initTimelineProgress() {
        const updateTimelineProgress = () => {
            const timelineLines = document.querySelectorAll('.line-progress');

            timelineLines.forEach(line => {
                const section = line.closest('.quantum-section');
                if (!section) return;

                const scrollTop = window.scrollY;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const scrollPosition = scrollTop - sectionTop;
                const progress = (scrollPosition / sectionHeight) * 100;

                if (progress >= 0 && progress <= 100) {
                    line.style.height = Math.min(100, Math.max(0, progress)) + '%';
                }
            });
        };

        window.addEventListener('scroll', updateTimelineProgress);
        updateTimelineProgress();
    }

    // =============================================
    // ENHANCED FORM HANDLING
    // =============================================

    initFormHandler() {
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');

        if (!contactForm || !submitBtn) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(contactForm, submitBtn);
        });

        // Real-time validation with quantum effects
        this.setupFormValidation(contactForm);
    }

    setupFormValidation(form) {
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.validateField(input);
            });

            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    validateField(field) {
        const formGroup = field.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');

        // Reset state
        formGroup.classList.remove('error', 'success');

        // Basic validation
        let isValid = true;
        let message = '';

        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(field.value.trim());
                message = 'Please enter a valid email address';
                break;

            case 'text':
                isValid = field.value.trim().length >= 2;
                message = 'Please enter at least 2 characters';
                break;

            case 'select-one':
                isValid = field.value !== '';
                message = 'Please select an option';
                break;

            default:
                isValid = field.value.trim().length > 0;
                message = 'This field is required';
        }

        if (!isValid && field.value.trim()) {
            formGroup.classList.add('error');
            if (errorMessage) errorMessage.textContent = message;
        } else if (field.value.trim()) {
            formGroup.classList.add('success');
        }
    }

    async handleFormSubmission(form, submitBtn) {
        // Reset previous states
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('error'));

        // Validate all fields
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

        inputs.forEach(input => {
            this.validateField(input);
            if (input.parentElement.classList.contains('error')) {
                isValid = false;
            }
        });

        if (!isValid) {
            this.showNotification('Please fix the errors before submitting.', 'error');
            return;
        }

        // Show loading state with quantum effect
        submitBtn.classList.add('btn-loading');
        this.triggerQuantumPulse(submitBtn);

        try {
            // Simulate API call
            await this.submitFormData(new FormData(form));

            this.showNotification('Thank you for your message! I will get back to you soon.', 'success');
            form.reset();

            // Reset form states
            formGroups.forEach(group => group.classList.remove('success'));

        } catch (error) {
            this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            submitBtn.classList.remove('btn-loading');
        }
    }

    async submitFormData(formData) {
        // Simulate network request
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                Math.random() > 0.1 ? resolve() : reject(new Error('Network error'));
            }, 2000);
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `quantum-notification quantum-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);

        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    // =============================================
    // ENHANCED SCROLL EFFECTS
    // =============================================

    initScrollEffects() {
        this.initScrollProgress();
        this.initBackToTop();
        this.initParallaxEffects();
    }

    initScrollProgress() {
        const scrollProgress = document.getElementById('scrollProgress');
        if (!scrollProgress) return;

        const updateScrollProgress = () => {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

            scrollProgress.style.width = scrollPercent + '%';

            // Add quantum glow effect at certain scroll points
            if (scrollPercent > 25 && scrollPercent < 75) {
                scrollProgress.classList.add('quantum-glow');
            } else {
                scrollProgress.classList.remove('quantum-glow');
            }
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress();
    }

    initBackToTop() {
        const backToTopButton = document.getElementById('backToTop');
        if (!backToTopButton) return;

        const updateBackToTop = () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        };

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            this.triggerQuantumPulse(backToTopButton);
        });

        window.addEventListener('scroll', updateBackToTop);
        updateBackToTop();
    }

    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.quantum-particle, .quantum-wave');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;

            parallaxElements.forEach((element, index) => {
                const speed = (index % 3 + 1) * 0.3;
                const yPos = -(scrollTop * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // =============================================
    // COUNTER SYSTEM
    // =============================================

    initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    startCounter(counter) {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                this.triggerQuantumPulse(counter);
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    }

    animateCounter(selector, stats) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const statType = element.closest('.stat-item').querySelector('.stat-label').textContent.toLowerCase();
            const value = stats[this.getStatKey(statType)] || 0;
            element.setAttribute('data-count', value);
            this.startCounter(element);
        });
    }

    getStatKey(label) {
        const mapping = {
            'repositories': 'repos',
            'stars': 'stars',
            'forks': 'forks',
            'contributions': 'contributions'
        };
        return mapping[label] || label;
    }

    // =============================================
    // SKILLS ANIMATION
    // =============================================

    initSkillsAnimation() {
        const skillProgresses = document.querySelectorAll('.skill-progress');
        if (!skillProgresses.length) return;

        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkills();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.querySelector('.about-skills');
        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }
    }

    animateSkills() {
        const skillProgresses = document.querySelectorAll('.skill-progress');

        skillProgresses.forEach((progress, index) => {
            const width = progress.getAttribute('data-width');

            setTimeout(() => {
                progress.style.width = width + '%';
                this.triggerQuantumPulse(progress);
            }, index * 200);
        });
    }

    // =============================================
    // MODAL SYSTEM
    // =============================================

    initModalSystem() {
        this.setupProjectModals();
        this.setupModalHandlers();
    }

    setupProjectModals() {
        const projectButtons = document.querySelectorAll('.project-details-btn');

        projectButtons.forEach(button => {
            button.addEventListener('click', () => {
                const projectCard = button.closest('.project-card');
                this.openProjectModal(projectCard);
            });
        });
    }

    openProjectModal(projectCard) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');

        if (!modal || !modalBody) return;

        const title = projectCard.querySelector('h3').textContent;
        const description = projectCard.querySelector('.project-description').textContent;
        const tech = projectCard.querySelector('.project-tech').innerHTML;

        modalBody.innerHTML = `
            <div class="modal-project">
                <h2>${title}</h2>
                <div class="modal-tech">${tech}</div>
                <p>${description}</p>
                <div class="modal-actions">
                    <a href="#" class="btn btn-primary">View Live Demo</a>
                    <a href="#" class="btn btn-outline">GitHub Repository</a>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    setupModalHandlers() {
        const modal = document.getElementById('projectModal');
        const closeBtn = document.getElementById('modalClose');

        if (!modal || !closeBtn) return;

        closeBtn.addEventListener('click', () => this.closeModal());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    closeModal() {
            const modal = document.getElementById('projectModal');
            if (!modal) return;

            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        // Real email integration with EmailJS
    initEmailIntegration() {
        // EmailJS configuration
        this.emailjsConfig = {
            serviceID: 'your_service_id',
            templateID: 'your_template_id',
            userID: 'your_user_id'
        };

        // Initialize EmailJS
        emailjs.init(this.emailjsConfig.userID);
    }

    async sendEmail(formData) {
        try {
            const response = await emailjs.send(
                this.emailjsConfig.serviceID,
                this.emailjsConfig.templateID, {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    project: formData.get('project'),
                    message: formData.get('message'),
                    reply_to: formData.get('email')
                }
            );

            return response;
        } catch (error) {
            throw new Error('Email sending failed: ' + error.text);
        }
    }

    // Enhanced GitHub API integration
    async fetchRealGitHubStats() {
        try {
            const response = await fetch('https://api.github.com/users/engenmahdiodowa');
            const data = await response.json();

            const reposResponse = await fetch('https://api.github.com/users/engenmahdiodowa/repos');
            const reposData = await reposResponse.json();

            return {
                repos: data.public_repos,
                stars: reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0),
                forks: reposData.reduce((acc, repo) => acc + repo.forks_count, 0),
                followers: data.followers
            };
        } catch (error) {
            console.warn('GitHub API fetch failed:', error);
            return this.getFallbackStats();
        }
    }

    // Performance monitoring
    initPerformanceAnalytics() {
        // Google Analytics 4
        this.gtag('config', 'GA_MEASUREMENT_ID');

        // Custom performance metrics
        this.trackCoreWebVitals();
        this.trackUserInteractions();
    }

    trackCoreWebVitals() {
        // LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
            gtag('event', 'core_web_vital', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(lastEntry.startTime)
            });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // CV Download functionality
    initCVDownload() {
        const downloadBtn = document.querySelector('a[href*="download"]');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadCV();
            });
        }
    }

    downloadCV() {
        // Create and trigger download
        const link = document.createElement('a');
        link.href = '/assets/documents/Engr_Mahdi_Mohamed_Odowa_CV.pdf';
        link.download = 'Engr_Mahdi_Mohamed_Odowa_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Track download event
        gtag('event', 'cv_download', {
            event_category: 'Engagement',
            event_label: 'CV Download'
        });
    }

    // Enhanced touch gestures
    initTouchGestures() {
        const model = document.querySelector('.quantum-model');
        if (!model) return;

        let touchStartX = 0;
        let touchStartY = 0;
        let rotationY = 0;
        let rotationX = 0;

        model.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            e.preventDefault();
        });

        model.addEventListener('touchmove', (e) => {
            if (!touchStartX || !touchStartY) return;

            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;

            const deltaX = touchX - touchStartX;
            const deltaY = touchY - touchStartY;

            rotationY += deltaX * 0.5;
            rotationX += deltaY * 0.5;

            model.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;

            touchStartX = touchX;
            touchStartY = touchY;

            e.preventDefault();
        });
    }

    // =============================================
    // PERFORMANCE OPTIMIZATIONS
    // =============================================

    initPerformanceOptimizations() {
        this.setupLazyLoading();
        this.setupIntersectionObserver();
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        // Lazy load images
        const lazyImages = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    setupIntersectionObserver() {
        // Generic intersection observer for various elements
        this.observers = new Map();
    }

    optimizeAnimations() {
        // Use will-change for elements that will be animated
        const animatedElements = document.querySelectorAll('.quantum-particle, .quantum-wave, .quantum-btn');

        animatedElements.forEach(el => {
            el.style.willChange = 'transform, opacity';
        });
    }

    // =============================================
    // UTILITY METHODS
    // =============================================

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}


// =============================================
// INITIALIZATION
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio with enhanced features
    window.portfolio = new QuantumPortfolio();

    // Add CSS for dynamic elements
    const dynamicStyles = `
        .quantum-ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: quantumRipple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes quantumRipple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes quantumReveal {
            0% {
                opacity: 0;
                transform: translateY(30px) scale(0.9);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        @keyframes quantumPulse {
            0% {
                box-shadow: 0 0 0 0 rgba(0, 102, 204, 0.4);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(0, 102, 204, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(0, 102, 204, 0);
            }
        }
        
        @keyframes quantumScaleIn {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .quantum-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--lighter-color);
            border-radius: var(--radius-lg);
            padding: var(--space-4) var(--space-6);
            box-shadow: var(--shadow-xl);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            z-index: var(--z-tooltip);
            border-left: 4px solid var(--primary-color);
        }
        
        .quantum-notification.show {
            transform: translateX(0);
        }
        
        .quantum-notification-success {
            border-left-color: var(--success-color);
        }
        
        .quantum-notification-error {
            border-left-color: var(--error-color);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: var(--space-3);
        }
        
        .ar-instructions {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: var(--z-modal);
        }
        
        .ar-overlay {
            background: var(--lighter-color);
            padding: var(--space-8);
            border-radius: var(--radius-xl);
            text-align: center;
            max-width: 400px;
        }
        
        .install-prompt {
            position: fixed;
            bottom: 20px;
            right: 20px;
            max-width: 300px;
            z-index: var(--z-tooltip);
            animation: slideInUp 0.3s ease;
        }
        
        @keyframes slideInUp {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;


    const styleSheet = document.createElement('style');
    styleSheet.textContent = dynamicStyles;
    document.head.appendChild(styleSheet);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumPortfolio;
}