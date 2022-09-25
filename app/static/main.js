let scriptos_content = document.querySelector('#main');
let proc_jsou = document.querySelector('#proc_jsou');
let vlan = document.querySelector('#vlan');
let rip = document.querySelector('#rip');

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})



function height_of_iframe(){
    let iframe = document.querySelector("#iframe1");
    iframe.addEventListener('load', function() {
		iframe.style.height = (iframe.contentDocument.body.scrollHeight+100) + 'px';
        console.log(iframe.style.height);

	});
}


proc_jsou.addEventListener('click', () => {
    let a = 1;
})

vlan.addEventListener('click', () => {
    scriptos_content.innerHTML = "<iframe id='iframe1' src='vlan' frameborder='0' scrolling='no' style='width: 100%; height: 100%; overflow:hidden;'>";
    
    height_of_iframe();	
})

rip.addEventListener('click', () => {
    scriptos_content.innerHTML = "<iframe id='iframe1' src='rip' frameborder='0' scrolling='no' style='width: 100%; height: 100%; overflow:hidden;'>";
    height_of_iframe();
})

