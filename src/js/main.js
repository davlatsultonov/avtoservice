import '../scss/style.scss';
import * as bootstrap from 'bootstrap';

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.garage-item').forEach(item => {
        item.setAttribute("data-bs-toggle", 'modal');
        item.setAttribute("data-bs-target", '#master-info');
    })
})