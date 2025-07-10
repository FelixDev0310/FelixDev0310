
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function updateColorScheme(e) {
      console.log(e.matches ? 'Dark mode activated' : 'Light mode activated');
    }

    colorSchemeQuery.addListener(updateColorScheme);
    updateColorScheme(colorSchemeQuery);


    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode === 'enabled') {
      body.classList.add('dark-mode');
    } else if (savedMode === 'disabled') {
      body.classList.remove('dark-mode');
    } else if (colorSchemeQuery.matches) {
      body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });

    document.getElementById('languageToggle').addEventListener('click', function() {
      window.location.href = 'index.html';
    });

    ScrollReveal().reveal('.animate__animated', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      interval: 100,
      reset: true
    });

    window.addEventListener('scroll', function() {
      const header = document.getElementById('main-header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const galleryImages = document.querySelectorAll('.galeria-section img');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__zoomIn');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.1});

    galleryImages.forEach(img => {
      observer.observe(img);
    });

    document.querySelectorAll('.main-nav-links a').forEach(link => {
      const lottieSrc = link.getAttribute('data-lottie-src');
      const lottiePlayer = link.querySelector('lottie-player');
      
      link.addEventListener('mouseenter', () => {
        lottiePlayer.setSpeed(1.5);
      });
      
      link.addEventListener('mouseleave', () => {
        lottiePlayer.setSpeed(1);
      });
    });