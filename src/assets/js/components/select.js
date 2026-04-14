document.addEventListener('DOMContentLoaded', (e) => {
    function closeList() {
        this.classList.remove('active');
    }


    function getData() {
        return {
            isDefault: this.querySelector('.hero-select__current').classList.contains('default'),
            currentText: this.querySelector('.hero-select__current span').innerText
        }
    }

    function setActiveItem(itemId) {
        const current = this.querySelector('.hero-select__current');
        const currentText = current.querySelector('span');
        const listLi = this.querySelectorAll('.hero-select__list li');
        const needItem = this.querySelector(`.hero-select__list [data-id="${itemId}"]`);

        listLi.forEach(li => {
            li.classList.remove('active');
        });

        needItem.classList.add('active');
        current.classList.remove('default');

        currentText.innerText = needItem.querySelector('span').innerText;

        closeList.bind(this)();
        sendEvent.bind(this)();
    }

    function setDefaultItem() {
        const current = this.querySelector('.hero-select__current');
        current.classList.remove('default');
        current.querySelector('span').innerText = 'Выбрать номинацию';
        sendEvent.bind(this)();
    }

    function sendEvent() {
        const event = new CustomEvent('heroSelectChanged', { detail: {
            selectNode: this,
            data: getData.bind(this)()
        } });
        document.dispatchEvent(event);
    }

    document.querySelectorAll('.hero-select').forEach(selectEl => {
        const currentNode = selectEl.querySelector('.hero-select__current');
        const list = selectEl.querySelectorAll('.hero-select__list li');

        currentNode.addEventListener('click', () => {
            selectEl.classList.toggle('active');
        });

        list.forEach((li, i) => {
            li.dataset.id = ++i + '';

            li.onclick = (e) => {
                setActiveItem.bind(selectEl)(li.dataset.id);
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hero-select')) {
            document.querySelectorAll('.hero-select').forEach(el => {
                el.classList.remove('active');
            });
        }
    });


    document.addEventListener('heroSelectChanged', (e) => {
        const currentSelectPastEls = document.querySelectorAll('[data-select-current]');
        const activeLi = e.detail.selectNode.querySelector('li.active');
        const activeLiText = activeLi.innerText;
        const id = activeLi.dataset.doc;
        const doctors = document.querySelector('.doctors');

        currentSelectPastEls.forEach(el => {
            if (id === 'all') {
                el.innerText = 'Общий список стоматологов';
                document.querySelector('.hero-utp__desc').style.display = 'none';
            } else {
                el.innerText = `Номинация «${activeLiText}»`;
                document.querySelector('.hero-utp__desc').style.display = 'block';
            }
        });

        doctors.querySelectorAll('.doctor').forEach(el => {
            const docData = el.dataset.doc;
            const docDataArray = JSON.parse(docData);
            el.style.display = 'none';

            if(docDataArray.includes(id)) {
                el.style.display = 'block';
            }
        });

        document.querySelector('.doctors').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });

});