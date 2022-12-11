
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

let stpArray = document.querySelectorAll(".stp");



stpArray.forEach(function(stp){
    stp.addEventListener('click', () => {
        $('main').load('stp.html');
        name_of_page = 'stp';
    })
})
window.onload = function() {
    var a = $(location).attr('hash');
    a = a.replace('#', '');
    if (a == "stp_uvod" || "stp_sta" || "stp_rstp" || "stp_etherchannel") {
        a = "stp";
    } else if  (a == "proc_jsou" || "zakladniKonfigurace" || "Trunking" || "dtpvtp"){
        a = "vlan";
    }
    $('main').load(`${a}.html`);
    name_of_page = a;
    console.log(localStorage.getItem('mode'));
    if (localStorage.getItem('mode') === 'true'){
        console.log('ola');
        document.documentElement.classList.add('dark_mode');
        switcher.checked = true;
        switcher2.checked = switcher.checked;
        

    } else {
        console.log('ula');
        document.documentElement.classList.remove('dark_mode');
        switcher.checked = false;
        switcher.checked = switcher2.checked;
    }
}



function dark_mode() {
    document.documentElement.classList.toggle('dark_mode');
    localStorage.setItem('mode', document.documentElement.classList.contains('dark_mode'));
    console.log(localStorage.getItem('mode'));
}

switcher.addEventListener('click', () => {
    dark_mode();
    switcher2.checked = switcher.checked;
})
switcher2.addEventListener('click', () => {
    dark_mode();
    switcher.checked = switcher2.checked;
})


$(window).resize(function(){
    if ($(window).width() >= 600) {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
        scriptos_content.classList.remove('hidden');
    }
})

