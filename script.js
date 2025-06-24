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
        const fileId = '1Irc8mlAkszCZeBBkJmY04pbRXatqHnV0';
        // Use the direct download link format
        const downloadUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
        
        // Open in new tab for better download experience
        window.open(downloadUrl, '_blank');
    } catch (error) {
        console.error('Error downloading resume:', error);
    }
}

// === Chatbot Logic ===
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

function addChatMessage(message, sender = 'bot') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chatbot-message ${sender}`;
    msgDiv.textContent = message;
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getPortfolioResponse(question) {
    const q = question.toLowerCase();
    // About
    if (q.includes('name') || q.includes('who are you')) {
        return "I'm Gudavalli Karthik, a Cloud & DevOps Engineer.";
    }
    if (q.includes('email') || q.includes('contact')) {
        return "You can reach me at karthikgudavalli7@gmail.com or via LinkedIn.";
    }
    if (q.includes('linkedin')) {
        return "Here's my LinkedIn: https://www.linkedin.com/in/karthikgudavalli";
    }
    if (q.includes('github')) {
        return "Check out my GitHub: https://github.com/karthik9441";
    }
    if (q.includes('skills') || q.includes('technologies')) {
        return "My skills include AWS, Docker, Linux, Git, HTML, CSS, JavaScript, Python, Flask, Web3, and more.";
    }
    if (q.includes('projects') || q.includes('work')) {
        return "Some of my projects: Blockchain-Based Drug Packaging, AWS VPC Deployment, Static Website Hosting, Node.js in Docker, and more. Ask about any for details!";
    }
    if (q.includes('experience') || q.includes('intern')) {
        return "I've interned at SynchroServe (DevOps) and Madblocks Technologies (AI/IoT/Blockchain).";
    }
    if (q.includes('education') || q.includes('study') || q.includes('college')) {
        return "I completed my B.Tech in Computer Science at KITS, with a CGPA of 7.71.";
    }
    if (q.includes('certification') || q.includes('certifications')) {
        return "I hold certifications in AWS Cloud Foundations, Python for Data Science (IBM), Azure AI Fundamentals, Data Analytics, and Java Full Stack.";
    }
    if (q.includes('hobbies') || q.includes('interests')) {
        return "My hobbies include playing badminton, exploring technology, and continuous learning.";
    }
    if (q.includes('resume')) {
        return "You can download my resume using the 'Download Resume' button on the homepage.";
    }
    // Greetings
    if (q.match(/\b(hi|hello|hey|greetings)\b/)) {
        return "Hello! How can I help you? You can ask about my skills, experience, projects, or anything else.";
    }
    // Fallback
    return null;
}

function getIntelligentResponse(question) {
    // Simple fallback for unrelated questions
    if (question.trim().endsWith('?')) {
        return "That's an interesting question! My main focus is on my portfolio, but I can try to help if you ask about my skills, experience, or projects.";
    }
    return "I'm here to answer questions about my portfolio, skills, experience, and more!";
}

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('chatbot-hidden');
    if (!chatbotWindow.classList.contains('chatbot-hidden')) {
        setTimeout(() => chatbotInput.focus(), 200);
    }
});
chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.add('chatbot-hidden');
});

chatbotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMsg = chatbotInput.value.trim();
    if (!userMsg) return;
    addChatMessage(userMsg, 'user');
    chatbotInput.value = '';
    setTimeout(() => {
        let response = getPortfolioResponse(userMsg);
        if (!response) response = getIntelligentResponse(userMsg);
        addChatMessage(response, 'bot');
    }, 600);
});

// Greet on open
chatbotToggle.addEventListener('click', () => {
    if (chatbotMessages.childElementCount === 0) {
        setTimeout(() => {
            addChatMessage("Hi! I'm your portfolio assistant. Ask me anything about my skills, experience, or projects.");
        }, 400);
    }
}); 
