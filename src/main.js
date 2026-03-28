// Sayfa yüklendiğinde çalışacak ana fonksiyon
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');

  // 1. Scroll Efekti: Sayfa aşağı kaydırıldığında Navbar stilini değiştir
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '10px 0';
      navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.95)'; // Biraz şeffaf koyu renk
      navbar.style.backdropFilter = 'blur(10px)'; // Arka planı bulanıklaştır (Modern dokunuş)
    } else {
      navbar.style.padding = '0';
      navbar.style.backgroundColor = '#111827';
      navbar.style.backdropFilter = 'none';
    }
  });

  // 2. Aktif Link İşaretleme: Kaydırdıkça hangi bölümde olduğumuzu anla
  const sections = document.querySelectorAll('section, header');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current) && current !== '') {
        link.style.color = '#D4AF37'; // Altın sarısı vurgu
      } else {
        link.style.color = 'white';
      }
    });
  });

  // 3. Basit Konsol Logu (Projenin çalıştığını doğrulamak için)
  console.log("Çukurambar Foto Web Sitesi Hazır!");
});

/**
 * Premium Özellik: Resimler için Lazy Load 
 * Eğer ileride galeri eklersen bu performans sağlar.
 */
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in'); // CSS ile animasyon eklenebilir
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
  observer.observe(card);
});