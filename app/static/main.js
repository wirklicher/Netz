let scriptos_content = document.querySelector('#main');
let proc_jsou = document.querySelector('#proc_jsou');
let vlan = document.querySelector('#vlan')






proc_jsou.addEventListener('click', () => {
    let a = 1;
})

vlan.addEventListener('click', () => {
    scriptos_content.innerHTML = "<iframe id='iframe1' src='vlan' frameborder='0' scrolling='no' style='width: 100%; height: 100%; overflow:hidden;'>";
    let iframe = document.querySelector("#iframe1");

	iframe.addEventListener('load', function() {
		iframe.style.height = (iframe.contentDocument.body.scrollHeight+100) + 'px';
		
        console.log(iframe.style.height);

	});	
})

