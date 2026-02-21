// Mobile Menu Toggle Logic
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Form Submission Logic
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);
    const formArea = document.getElementById('formContainer');

    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            formArea.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h2>Request Received!</h2>
                    <p>Thank you for reaching out. Your detailed roofing information has been sent to our Buffalo specialists.</p>
                    <p>A representative will review your request and contact you soon.</p>
                    <button onclick="location.reload()" class="btn-submit" style="margin-top: 30px; width: auto; padding: 12px 30px;">Send Another Request</button>
                </div>
            `;
            document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("Oops! There was a problem submitting your request. Please try again.");
        }
    });
});
