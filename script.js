// ===== анимация при прокрутке =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => revealObserver.observe(el));

// ===== динамическое заполнение шкал навыков =====
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      fill.style.width = fill.dataset.width + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach((fill) => skillObserver.observe(fill));

// ===== кнопка «наверх» =====
const toTopBtn = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    toTopBtn.classList.add('visible');
  } else {
    toTopBtn.classList.remove('visible');
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== интерактивная форма обратной связи =====
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // простая валидация
  if (!name || !email || !message) {
    status.textContent = 'Пожалуйста, заполните все поля.';
    status.className = 'form-status error';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    status.textContent = 'Введите корректный email.';
    status.className = 'form-status error';
    return;
  }

  // имитация успешной отправки
  status.textContent = 'Спасибо! Ваше сообщение отправлено.';
  status.className = 'form-status success';
  form.reset();

  // сброс статуса через 5 секунд
  setTimeout(() => {
    status.textContent = '';
    status.className = 'form-status';
  }, 5000);
});

// плавная навигация =====
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});