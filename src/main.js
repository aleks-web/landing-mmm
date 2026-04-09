import sender from "./assets/js/sender.js";
import "./assets/js/utils.js";
import "./assets/js/modals.js";
import "./scss/index.scss";
import "./assets/js/masks.js";
import "./assets/js/last-day.js";
import "./assets/js/components/select.js";
import "./assets/js/components/agree.js";

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('form').forEach(form => {
        const phone = form.querySelector('[data-mask-phone]');
        let phoneValue = null;

        form.onsubmit = async (e) => {
            e.preventDefault();

            window.imasks.forEach(el => {
                if (el.phoneEl === phone && !phoneValue && el.mask.value) {
                    phoneValue = clearPhone(el.mask.value);
                }
            })

            let result = window.quiz.getResult();
            result.phone = phoneValue;
            sender(result);
        }
    });

    document.addEventListener('fetchLeadSuccess', async (e) => {
        document.querySelector('.loading')?.remove();
        const modal = document.querySelector('.modal-wrapper--loading');
        if (modal) {
            modal.classList.remove('modal-wrapper--loading');
            await closeAllModals();
            await openModal('.modal-success');
        } else {
            window.quiz.setStep(6);
        }

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });
});