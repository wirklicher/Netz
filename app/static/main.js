
let scriptos_content = document.querySelector('#main');
let vlan = document.querySelector('#vlan');
let rip = document.querySelector('#rip');
let sshTelnet = document.querySelector('#sshTelnet');


const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".menu");

var name_of_page = undefined;


$('#main').load('vlan.html');
name_of_page = 'vlan';

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

