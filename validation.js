document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Real-time password match validation
    confirmPassword.addEventListener('input', function () {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });

    password.addEventListener('input', function () {
        if (confirmPassword.value) {
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity('Passwords do not match');
            } else {
                confirmPassword.setCustomValidity('');
            }
        }
    });

    // Form submission handling
    form.addEventListener('submit', function (event) {
        // Check password match
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }

        // Prevent submission if form is invalid
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // Show success message
            alert('Account created successfully! 🎉\n\nForm data:\n' +
                  'Name: ' + document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value + '\n' +
                  'Email: ' + document.getElementById('email').value);
            
            // Reset form after successful submission
            form.classList.remove('was-validated');
            form.reset();
        }

        form.classList.add('was-validated');
    }, false);
});