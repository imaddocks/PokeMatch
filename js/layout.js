// === Load the header HTML and initialise header behaviours ===
fetch('/partials/header.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('header#header').innerHTML = data;

    // === Mobile Nav Toggle (Hamburger Menu) ===
    const hamburger = document.querySelector('.hamburger img');
    const mobileNav = document.getElementById('mobileNav');
    const originalIcon = '/icons/bars-solid.png';
    const closeIcon = '/icons/xmark-solid.png';

    if (hamburger && mobileNav) {
      // Toggle menu visibility on hamburger click
      hamburger.parentElement.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('show');
        hamburger.src = isOpen ? closeIcon : originalIcon;
      });

      // Auto-close menu when any link is clicked
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('show');
          hamburger.src = originalIcon;
        });
      });
    }

    // === Auto-close nav if clicking outside the menu ===
    document.addEventListener('click', (e) => {
      const isClickInsideNav = mobileNav.contains(e.target);
      const isClickOnHamburger = hamburger.parentElement.contains(e.target);

      if (!isClickInsideNav && !isClickOnHamburger && mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show');
        hamburger.src = originalIcon;
      }
    });

    // === Dark Mode Toggle ===
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    function setTheme(mode) {
      body.classList.toggle('dark-mode', mode === 'dark');
      moonIcon.style.display = mode === 'dark' ? 'none' : 'inline';
      sunIcon.style.display = mode === 'dark' ? 'inline' : 'none';
      localStorage.setItem('theme', mode);
    }

    // Toggle theme when button is clicked
    themeToggle?.addEventListener('click', () => {
      const isDark = body.classList.contains('dark-mode');
      setTheme(isDark ? 'light' : 'dark');
    });

    // Set theme based on saved preference or system setting
    const savedTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  });

// === Load the footer HTML and update the year ===
fetch('/partials/footer.html')
  .then(res => res.text())
  .then(data => {
    // Insert the footer HTML
    document.getElementById('footer').innerHTML = data;

    // === Update year dynamically ===
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // === Back to Top Button Logic ===
    const backToTopBtn = document.querySelector(".back-to-top");

    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      });

      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // === Cookie Banner Logic ===

    // === Cookie Banner Logic ===
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');

    if (cookieBanner && acceptBtn) {
      // Show banner only if user hasn't accepted yet
      if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex'; // or block, depending on your layout
      }

      // On accept, save preference and hide banner
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
      });
    }
  });