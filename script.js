/**
 * zolcode.hu – Alapvető interakciók (Vanilla JS, külső függőség nélkül)
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Aktuális évszám automatikus beállítása a láblécben
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobil menü automatikus bezárása menüpontra kattintás után
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');

  if (navbarCollapse && typeof bootstrap !== 'undefined') {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  }

  // 3. E-mail cím egykattintásos másolása vágólapra
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');

  if (copyBtn && emailText && navigator.clipboard) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailText.textContent.trim());
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="bi bi-check2 text-success"></i>';
        copyBtn.setAttribute('title', 'Másolva!');

        setTimeout(() => {
          copyBtn.innerHTML = originalIcon;
          copyBtn.setAttribute('title', 'E-mail cím másolása');
        }, 2000);
      } catch (err) {
        console.error('Nem sikerült a másolás:', err);
      }
    });
  }
});

// 4. Lebegő "Vissza a tetejére" gomb megjelenítése és működése
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }