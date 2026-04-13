import "./assets/js/utils.js";
import "./assets/js/masks.js";
import "./assets/js/modals.js";
import "./assets/js/doctors.js";
import "./scss/index.scss";
import "./assets/js/components/select.js";
import "./assets/js/components/agree.js";

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('fetchLeadSuccess', async (e) => {
        document.querySelector('.loading')?.remove();
        const modal = document.querySelector('.modal-wrapper--loading');
        if (modal) {
            modal.classList.remove('modal-wrapper--loading');
            await closeAllModals();
            await openModal('.modal-success');
        }

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });
});