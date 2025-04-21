// Example: Highlight the active nav link dynamically (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // You can add more JS here as needed, e.g. for login/signup modals
  