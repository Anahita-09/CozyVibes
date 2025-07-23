// Music Player and Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentAudio = null;
    let isPlaying = false;
    let currentTrackIndex = 0;
    let playlist = [];

    // Initialize the music player
    function initializeMusicPlayer() {
        setupMusicCards();
        setupPlayerControls();
        setupMusicFilters();
        setupProgressBar();
        updatePlaylist();
    }

    // Setup music cards with click handlers
    function setupMusicCards() {
        const musicCards = document.querySelectorAll('.music-card');
        musicCards.forEach((card, index) => {
            const src = card.getAttribute('data-src');
            if (src) {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                    playTrackByIndex(index);
                });
            }
            
            // Add hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });

            // Add click animation
            card.addEventListener('mousedown', () => {
                card.style.transform = 'scale(0.98)';
            });
            card.addEventListener('mouseup', () => {
                card.style.transform = '';
            });
        });
    }

    // Play track by index
    function playTrackByIndex(index) {
        const musicCards = document.querySelectorAll('.music-card');
        const card = musicCards[index];
        const src = card.getAttribute('data-src');
        
        if (!src) return;

        currentTrackIndex = index;
        
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }

        const audio = new Audio(src);
        currentAudio = audio;
        audio.volume = 0.7; // Set default volume

        audio.addEventListener('canplay', () => {
            audio.play();
            isPlaying = true;
            updatePlayerUI();
            updatePlayButton();
        });

        audio.addEventListener('timeupdate', () => {
            updateProgressBar();
        });

        audio.addEventListener('ended', () => {
            playNextTrack();
        });

        audio.addEventListener('error', (e) => {
            console.error('Error loading audio:', e);
            alert('Error loading audio file: ' + src);
        });

        audio.load();
    }

    // Setup player controls
    function setupPlayerControls() {
        const playBtn = document.getElementById('playBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (playBtn) {
            playBtn.addEventListener('click', togglePlay);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', playPreviousTrack);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', playNextTrack);
        }
    }

    // Toggle play/pause
    function togglePlay() {
        if (!currentAudio) return;

                    if (isPlaying) {
                        currentAudio.pause();
                        isPlaying = false;
                    } else {
                        currentAudio.play();
                        isPlaying = true;
                    }
        updatePlayButton();
    }

    // Play next track
    function playNextTrack() {
        const musicCards = document.querySelectorAll('.music-card');
        const visibleCards = Array.from(musicCards).filter(card => 
            card.style.display !== 'none'
        );
        
        if (visibleCards.length === 0) return;

        const currentVisibleIndex = visibleCards.findIndex(card => 
            card === musicCards[currentTrackIndex]
        );
        
        const nextVisibleIndex = (currentVisibleIndex + 1) % visibleCards.length;
        const nextCard = visibleCards[nextVisibleIndex];
        const nextIndex = Array.from(musicCards).indexOf(nextCard);
        
        playTrackByIndex(nextIndex);
    }

    // Play previous track
    function playPreviousTrack() {
        const musicCards = document.querySelectorAll('.music-card');
        const visibleCards = Array.from(musicCards).filter(card => 
            card.style.display !== 'none'
        );
        
        if (visibleCards.length === 0) return;

        const currentVisibleIndex = visibleCards.findIndex(card => 
            card === musicCards[currentTrackIndex]
        );
        
        const prevVisibleIndex = currentVisibleIndex === 0 ? 
            visibleCards.length - 1 : currentVisibleIndex - 1;
        const prevCard = visibleCards[prevVisibleIndex];
        const prevIndex = Array.from(musicCards).indexOf(prevCard);
        
        playTrackByIndex(prevIndex);
    }

    // Update play button icon
    function updatePlayButton() {
        const playBtn = document.getElementById('playBtn');
        if (!playBtn) return;

        const icon = playBtn.querySelector('i');
        if (icon) {
            icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
        }
    }

    // Update player UI with current track info
    function updatePlayerUI() {
        const musicCards = document.querySelectorAll('.music-card');
        const currentCard = musicCards[currentTrackIndex];
        
        if (!currentCard) return;

        // Remove active class from all cards
        musicCards.forEach(card => {
            card.classList.remove('playing');
        });
        
        // Add active class to current card
        currentCard.classList.add('playing');

        const audioPlayer = document.getElementById('audioPlayer');
        const currentTrack = document.getElementById('currentTrack');
        const currentArtist = document.getElementById('currentArtist');

        if (audioPlayer) audioPlayer.classList.add('active');
        if (currentTrack) currentTrack.textContent = currentCard.querySelector('h3')?.textContent || '';
        if (currentArtist) currentArtist.textContent = currentCard.querySelector('p')?.textContent || '';
    }

    // Setup music filters
    function setupMusicFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const musicCards = document.querySelectorAll('.music-card');
        
        if (filterButtons.length === 0) {
            console.log('No filter buttons found');
            return;
        }
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                console.log('Filtering by:', filter);
                
                let visibleCount = 0;
                musicCards.forEach(card => {
                    const language = card.getAttribute('data-language');
                    if (filter === 'all' || language === filter) {
                        card.style.display = '';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                console.log(`Showing ${visibleCount} cards for filter: ${filter}`);
                
                // Show message if no songs are available
                const musicGrid = document.querySelector('.music-grid');
                let noSongsMessage = musicGrid.querySelector('.no-songs-message');
                
                if (visibleCount === 0) {
                    if (!noSongsMessage) {
                        noSongsMessage = document.createElement('div');
                        noSongsMessage.className = 'no-songs-message';
                        noSongsMessage.innerHTML = `
                            <div style="text-align: center; padding: 2rem; color: var(--cozy-dark);">
                                <i class="fas fa-music" style="font-size: 2rem; opacity: 0.5; margin-bottom: 1rem;"></i>
                                <p>No songs available in this category</p>
                            </div>
                        `;
                        musicGrid.appendChild(noSongsMessage);
                    }
                } else if (noSongsMessage) {
                    noSongsMessage.remove();
                }
                
                // If current track is now hidden, stop playback
                if (currentAudio && musicCards[currentTrackIndex].style.display === 'none') {
                    currentAudio.pause();
                    isPlaying = false;
                    updatePlayButton();
                }
            });
        });
    }

    // Setup progress bar
    function setupProgressBar() {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.addEventListener('click', (e) => {
                if (!currentAudio) return;
                
                const rect = progressBar.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const width = rect.width;
                const percentage = clickX / width;
                
                currentAudio.currentTime = percentage * currentAudio.duration;
            });
        }
    }

    // Update progress bar
    function updateProgressBar() {
        if (!currentAudio) return;

        const progressFill = document.getElementById('progressFill');
        const currentTimeSpan = document.getElementById('currentTime');
        const totalTimeSpan = document.getElementById('totalTime');

        if (progressFill) {
            const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
            progressFill.style.width = progress + '%';
        }

        if (currentTimeSpan) {
            currentTimeSpan.textContent = formatTime(currentAudio.currentTime);
        }

        if (totalTimeSpan) {
            totalTimeSpan.textContent = formatTime(currentAudio.duration);
        }
    }

    // Format time in MM:SS
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Update playlist array
    function updatePlaylist() {
        const musicCards = document.querySelectorAll('.music-card');
        playlist = Array.from(musicCards).map(card => ({
            src: card.getAttribute('data-src'),
            title: card.querySelector('h3')?.textContent || '',
            artist: card.querySelector('p')?.textContent || '',
            language: card.getAttribute('data-language') || ''
        }));
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowLeft') {
            e.preventDefault();
            playPreviousTrack();
        } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            playNextTrack();
        }
    });

    // Initialize everything
    initializeMusicPlayer();
});

// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
});
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
    if (window.scrollY > 100) {
        navbar.style.background = '#fff9ec';
        navbar.style.boxShadow = '0 2px 16px 0 rgba(180,180,180,0.10)';
    } else {
        navbar.style.background = '#fff9ec';
        navbar.style.boxShadow = 'none';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.music-card, .about-content, .contact-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact form handling (only if form exists)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
        });
    }
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
    }

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
    }
}); 