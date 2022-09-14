let scriptos_content = document.querySelector('#main');
let proc_jsou = document.querySelector('#proc_jsou');



proc_jsou.addEventListener('click', () => {
    scriptos_content.innerHTML = "<iframe src='vlan' frameborder='0' scrolling='no' style='width: 100%; height= 100%;'>";
})