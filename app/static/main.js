
let scriptos_content = document.querySelector('#main');
let vlan = document.querySelector('#vlan');
let stp = document.querySelector('#stp');
let rip = document.querySelector('#rip');
let uvodRouting = document.querySelector('#uvodRouting');
let eigrp = document.querySelector('#eigrp');
let ospf = document.querySelector('#ospf');
let bgp = document.querySelector('#bgp');
let ipv6 = document.querySelector('#ipv6');
let sshTelnet = document.querySelector('#sshtelnet');
// MAP 
//1. výstup


let nat = document.querySelector('#nat');
let ntpptp = document.querySelector('#ntpptp');
let dhcp = document.querySelector('#dhcp');
let dns = document.querySelector('#dns');
let ftp = document.querySelector('#ftp');
let syslog = document.querySelector('#syslog');


//2. výstup
let acl = document.querySelector('#acl');
let portsec = document.querySelector('#portsec');

//3. výstup

let discoveryprotocols = document.querySelector("#discoveryprotocols")
let fhrp = document.querySelector("#fhrp")

// 4. výstup 

let NA_Basics = document.querySelector("#NA_Basics");
let NA_Ansible = document.querySelector("#NA_Ansible");
let NA_Terraform = document.querySelector("#NA_Terraform");
let NA_Python = document.querySelector("#NA_Python");

let switcher = document.getElementById('switcher');
let switcher2 = document.getElementById('switcher2');
let adress = "";
let dark_aware = document.querySelector('#dark_aware')

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
    $('main').load('sshtelnet.html');
    name_of_page = 'sshtelnet';
})

stp.addEventListener('click', () => {
    $('main').load('stp.html');
    name_of_page = 'stp';
})



uvodRouting.addEventListener('click', () => {
    $('main').load('uvodRouting.html');
    name_of_page = 'uvodRouting';
})
rip.addEventListener('click', () => {
    $('main').load('/app/templates/RoutingProtocols/rip.html');
    name_of_page = 'rip';
})
eigrp.addEventListener('click', () => {
    $('main').load('/app/templates/RoutingProtocols/eigrp.html');
    name_of_page = 'eigrp';
})
ospf.addEventListener('click', () => {
    $('main').load('/app/templates/RoutingProtocols/ospf.html');
    name_of_page = 'ospf';
})
bgp.addEventListener('click', () => {
    $('main').load('/app/templates/RoutingProtocols/bgp.html');
    name_of_page = 'bgp';
})

ipv6.addEventListener('click', () => {
    $('main').load('ipv6.html');
    name_of_page = 'ipv6';
})
nat.addEventListener('click', () => {
    $('main').load('nat.html');
    name_of_page = 'nat';
})
ntpptp.addEventListener('click', () => {
    $('main').load('ntpptp.html');
    name_of_page = 'ntpptp';
})
dhcp.addEventListener('click', () => {
    $('main').load('dhcp.html');
    name_of_page = 'dhcp';
})
dns.addEventListener('click', () => {
    $('main').load('dns.html');
    name_of_page = 'dns';
})
ftp.addEventListener('click', () => {
    $('main').load('ftp.html');
    name_of_page = 'ftp';
})
syslog.addEventListener('click', () => {
    $('main').load('syslog.html');
    name_of_page = 'syslog';
})
acl.addEventListener('click', () => {
    $('main').load('acl.html');
    name_of_page = 'acl';
})
portsec.addEventListener('click', () => {
    $('main').load('portsec.html');
    name_of_page = 'portsec';
})
discoveryprotocols.addEventListener('click', () => {
    $('main').load('discoveryprotocols.html');
    name_of_page = 'discoveryprotocols';
})
fhrp.addEventListener('click', () => {
    $('main').load('fhrp.html');
    name_of_page = 'fhrp';
})

NA_Basics.addEventListener('click', () => {
    $('main').load('NA_Basics.html');
    name_of_page = 'NA_Basics';
})

NA_Ansible.addEventListener('click', () => {
    $('main').load('NA_Ansible.html');
    name_of_page = 'NA_Ansible';
})

NA_Terraform.addEventListener('click', () => {
    $('main').load('NA_Terraform.html');
    name_of_page = 'NA_Terraform';
})

NA_Python.addEventListener('click', () => {
    $('main').load('NA_Python.html');
    name_of_page = 'NA_Python';
})

let stpArray = document.querySelectorAll(".stp");



stpArray.forEach(function (stp) {
    stp.addEventListener('click', () => {
        $('main').load('stp.html');
        name_of_page = 'stp';
    })
})
window.onload = function () {
    var a = $(location).attr('hash');
    a = a.replace('#', '');
    if (a == "stp_uvod" || a == "STA" || a == "rstp" || a == "Etherchannel") {
        a = "stp";
    }
    if (a == "vlan_uvod" || a == "zakladniKonfiguraceSection" || a == "trunking" || a == "DTPVTP") {
        a = "vlan";
    }
    if (a == "rip") {
        adress = "/templates/RoutingProtocols/";
        a = "rip";
    }
    if (a == "eigrp") {
        adress = "/app/templates/RoutingProtocols/";
        a = "eigrp";
    }
    if (a == "ospf") {
        adress = "/app/templates/RoutingProtocols/";
        a = "ospf";
    }
    if (a == "bgp") {
        adress = "/app/templates/RoutingProtocols/";
        a = "bgp";
    }
    $('main').load(`${adress}${a}.html`);
    name_of_page = a;
    console.log(localStorage.getItem('mode'));
    if (localStorage.getItem('mode') === 'true') {
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

if (!document.documentElement.classList.contains('dark_mode')) {
    console.log("True rlly is");
}

$(window).resize(function () {
    if ($(window).width() >= 600) {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
        scriptos_content.classList.remove('hidden');
    }
})

