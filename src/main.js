import "./assets/js/utils.js";
import "./assets/js/masks.js";
import "./assets/js/modals.js";
import "./assets/js/doctors.js";
import "./scss/index.scss";
import "./assets/js/components/select.js";
import "./assets/js/components/agree.js";
import sender from "./assets/js/sender.js";

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('fetchLeadSuccess', async (e) => {
        document.querySelector('.loading')?.remove();
        const modal = document.querySelector('.modal-wrapper--loading');
        if (modal) {
            modal.classList.remove('modal-wrapper--loading');
            await closeAllModals();
            await openModal('.modal-success');
        } else {
            await openModal('.modal-success');
        }

        setTimeout(() => {
            window.location.href = '/success.html';
        }, 3000);
    });


    const formB = document.querySelector('.form-b form');
    if (formB) {
        formB.onsubmit = (e) => {
            e.preventDefault();
            const phone = window.clearPhone(e.target.querySelector('[data-mask-phone]')?.value);
            const result = { phone }

            sender(result);
        }
    }
});