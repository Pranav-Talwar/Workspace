$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();

        $('.error').text('');

        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();

        let isValid = true;

        if (username.length < 3) {
            $('#usernameError').text('Username must be at least 3 characters long.');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
            isValid = false;
        }

        if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long.');
            isValid = false;
        }

        if (isValid) {
            alert('Registration successful!');
        }
    });

    function checkPasswordStrength(password) {
        let strength = 'Weak';

        const lengthCriteria = password.length >= 6;
        const numberCriteria = /[0-9]/.test(password);
        const uppercaseCriteria = /[A-Z]/.test(password);
        const lowercaseCriteria = /[a-z]/.test(password);
        if (lengthCriteria && numberCriteria && uppercaseCriteria && lowercaseCriteria) {
            strength = 'Strong';
        } else if (lengthCriteria && (numberCriteria || uppercaseCriteria || lowercaseCriteria)) {
            strength = 'Medium';
        }
             return strength;
    }
    $('#password').on('input', function() {
        const password = $(this).val();
        const strength = checkPasswordStrength(password);
        $('#passwordStrength').text(`Password strength: ${strength}`);
    });
});
