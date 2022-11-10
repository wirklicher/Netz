
let scriptos_content = document.querySelector('#main');
let vlan = document.querySelector('#vlan');
let rip = document.querySelector('#rip');
let sshTelnet = document.querySelector('#sshTelnet');
let switcher = document.getElementById('switcher');
let switcher2 = document.getElementById('switcher2');


const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".menu");

let name_of_page = undefined;

$('#main').load('vlan.html');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    scriptos_content.classList.toggle('hidden');
})

vlan.addEventListener('click', () => {
   $('#main').load('vlan.html');
   name_of_page = 'vlan';
})

sshTelnet.addEventListener('click', () => {
    $('main').load('sshTelnet.html');
    name_of_page = 'sshTelnet';
})

rip.addEventListener('click', () => {
    $('main').load('rip.html');
    name_of_page = 'rip';
})
stp.addEventListener('click', () => {
    $('main').load('stp.html');
    name_of_page = 'stp';
})

window.onload = function() {
    var a = $(location).attr('hash');
    a = a.replace('#', '');
    console.log(a);
    $('main').load(`${a}.html`);
}



function dark_mode() {
    document.documentElement.classList.toggle('dark_mode')

    document.querySelectorAll('.inverted').forEach((result) => {
        result.classList.toggle('invert');
    })
}

switcher.addEventListener('click', () => {
    dark_mode();
    switcher2.checked = switcher.checked;
    console.log(document.body.clientWidth);
})
switcher2.addEventListener('click', () => {
    dark_mode();
    switcher.checked = switcher2.checked;
    console.log(document.body.clientWidth);
})


$(window).resize(function(){
    if ($(window).width() >= 600) {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
        scriptos_content.classList.remove('hidden');
    }
})

