// Smooth reveal animation for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.15,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        sectionObserver.observe(section);
    });
};

// Skill items hover effect
const initSkillsAnimation = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
};

// Smooth scroll for any anchor links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Add parallax effect to header
const initParallax = () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });
};

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    revealSections();
    initSkillsAnimation();
    initSmoothScroll();
    initParallax();
});

// Add background to navbar on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
        nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

// Add fade-in animation for sections
const sections = document.querySelectorAll('section');
const fadeInOptions = {
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, fadeInOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    fadeInObserver.observe(section);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

// Animate sections on scroll
const animateSections = () => {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
};

// Animate skill items
const animateSkills = () => {
    const skills = document.querySelectorAll('.skill-item');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, observerOptions);

    skills.forEach(skill => {
        skillObserver.observe(skill);
    });
};

// Parallax effect for hero section
const parallaxHero = () => {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });
};

// Typing effect for hero text
const typeWriter = () => {
    const text = "DevOps Engineer & Cloud Enthusiast";
    const tagline = document.querySelector('.tagline');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    tagline.textContent = '';
    setTimeout(type, 1500);
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    animateSections();
    animateSkills();
    parallaxHero();
    typeWriter();
});

// Share and Resume Download functionality
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('shareButton');
    const resumeButton = document.getElementById('resumeButton');

    // Share functionality
    shareButton.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Gudavalli Karthik - Cloud & DevOps Engineer',
                    text: 'Check out my portfolio showcasing my cloud and DevOps projects!',
                    url: 'https://karthikhub.site'
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const dummy = document.createElement('input');
                document.body.appendChild(dummy);
                dummy.value = 'https://karthikhub.site';
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
                alert('Portfolio link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    });

    // Resume download functionality
    if (resumeButton) {
        resumeButton.addEventListener('click', handleResumeDownload);
    }
});

// Resume download functionality
document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.getElementById('resumeButton');
    if (!resumeButton) return;

    resumeButton.addEventListener('click', handleResumeDownload);
});

async function handleResumeDownload(e) {
    e.preventDefault();
    
    try {
        const fileId = '1TzFRNK8Nhu24YLZQpWEG55kV3iCy_Xwn';
        // Use the direct download link format
        const downloadUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
        
        // Open in new tab for better download experience
        window.open(downloadUrl, '_blank');
    } catch (error) {
        console.error('Error downloading resume:', error);
    }
} 
