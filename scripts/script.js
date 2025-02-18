
document.addEventListener('DOMContentLoaded', () => {
    const btnRegistration = document.getElementById('btn-registration');
    const btnLogin = document.getElementById('btn-login');
    const registerForm = document.getElementById('register');
    const loginForm = document.getElementById('login');

    const telInput = document.getElementById('tel');
    const loginTelInput = document.getElementById('loginTel');
    
    // Переключение между формами
    btnRegistration.addEventListener('click', () => {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    btnLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

//Номер телефона

    function initializeMask(input) {
        input.addEventListener('focus', () => {
            if (input.value === '') {
                input.value = '+7 (---) --- -- --';
            }
        });

        input.addEventListener('blur', () => {
            if (input.value === '+7 (---) --- -- --') {
                input.value = '';
            }
        });

        input.addEventListener('input', (e) => {
            let value = input.value;

            const digits = value.replace(/\D/g, '');

            const maxDigits = 11;
            const newDigits = digits.substring(0, maxDigits);

            let formatted = '';

            if (newDigits.length > 0) {
                formatted += '+7 ';
                if (newDigits.length > 1) {
                    formatted += '(' + newDigits.substring(1, 4) + ') ';
                    if (newDigits.length > 4) {
                        formatted += newDigits.substring(4, 7) + '-';
                        if (newDigits.length > 7) {
                            formatted += newDigits.substring(7, 9) + '-';
                            if (newDigits.length > 9) {
                                formatted += newDigits.substring(9, 11);
                            }
                        }
                    }
                }
            }

            input.value = formatted;
        });
    }
});