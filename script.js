document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
  
    // Clear previous success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'none';
  
    // Validate fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Display success message
    successMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    successMessage.style.display = 'block';
  
    // Optionally, clear the form
    document.getElementById('contactForm').reset();
  });
  