const tombolNavbar = document.querySelector('.humberger');
const menu = document.querySelector('.menu');
const tutup = document.querySelectorAll('.tutup');

tombolNavbar.addEventListener('click', function () {
    menu.classList.toggle('active');
    closeNavbar();
});

function closeNavbar() {
    const aktif = menu.classList.contains('active');
    if (aktif === true) {
        for (i = 0; i < tutup.length; i++) {
            tutup[i].addEventListener('click', function () {
                menu.classList.remove('active');
            })
        }
    }
};


const whatsapp = document.getElementById('wa');
const instagram = document.getElementById('ig');
const facebook = document.getElementById('fb');

whatsapp.addEventListener('click', x => { window.location.href = "https://wa.me/6281574973529" });
instagram.addEventListener('click', x => { window.location.href = "https://instagram.com/" });
facebook.addEventListener('click', x => { window.location.href = "https://facebook.com/" });


const lihat1 = document.querySelector('.lihat1')
const lihat2 = document.querySelector('.lihat2')
const lihat3 = document.querySelector('.lihat3')
const popup1 = document.querySelector('.p1')
const popup2 = document.querySelector('.p2')
const popup3 = document.querySelector('.p3')

lihat1.addEventListener('click', function () {
    popup1.classList.toggle('buka');
    scroll1();
});
lihat2.addEventListener('click', function () {
    popup2.classList.toggle('buka');
    scroll2();
});
lihat3.addEventListener('click', function () {
    popup3.classList.toggle('buka');
    scroll3();
});


function scroll1() {
    const muncul = popup1.classList.contains('buka');
    if (muncul === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
};
function scroll2() {
    const muncul = popup2.classList.contains('buka');
    if (muncul === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
};
function scroll3() {
    const muncul = popup3.classList.contains('buka');
    if (muncul === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
};


const x1 = document.querySelector('.x1');
const x2 = document.querySelector('.x2');
const x3 = document.querySelector('.x3');

x1.addEventListener('click', x => {
    popup1.classList.remove('buka');
    scroll1();
});
x2.addEventListener('click', x => {
    popup2.classList.remove('buka');
    scroll2();
});
x3.addEventListener('click', x => {
    popup3.classList.remove('buka');
    scroll3();
});