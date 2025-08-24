document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for your message! We will get back to you soon.';
    this.reset();
  });
  