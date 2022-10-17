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

function mainer(){
    let iframe = document.querySelector("#iframe1");
    
    console.log(iframe.contentWindow.main())
}



function height_of_iframe(){
    let iframe = document.querySelector("#iframe1");
    iframe.addEventListener('load', function() {
		iframe.style.height = (iframe.contentDocument.body.scrollHeight) + 'rem';
        console.log(iframe.style.height);

	});
}


proc_jsou.addEventListener('click', () => {
    let a = 1;
})

vlan.addEventListener('click', () => {
   $('#main').load('vlan');

   index = 0;
    
    //height_of_iframe();	
    //mainer(); 
})

rip.addEventListener('click', () => {
    scriptos_content.innerHTML = "<iframe id='iframe1' src='rip' frameborder='0' scrolling='no' style='width: 100%; height: 100%; overflow:hidden;'>";
    //height_of_iframe();
})

