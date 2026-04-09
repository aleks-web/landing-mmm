document.addEventListener('DOMContentLoaded', (e) => {

    document.querySelectorAll('.agree').forEach(agree => {
        const input = agree.querySelector('[type="checkbox"]');

        agree.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                if (input.checked) {
                    input.checked = false;
                    agree.classList.remove('active')
                } else {
                    input.checked = true;
                    agree.classList.add('active');
                }
            }
        });

    });

});