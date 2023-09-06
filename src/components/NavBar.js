const createButton = (name)=>{
    let button = document.createElement('button');
    button.innerText = name;
    return button;
}
let navBar, mainButton, contactButton, menuButton;
const NavBar = ()=>{
    navBar = document.createElement('div');
    let logo = document.createElement('h4');
    logo.classList.add('logo');
    logo.innerText = 'Delisyos';
    navBar.classList.add('nav');
    mainButton = createButton('Main');
    contactButton = createButton('Contact');
    menuButton = createButton('Menu');
    navBar.append(logo, mainButton, contactButton, menuButton);
    return navBar;
}
export default NavBar;
export {mainButton, contactButton, menuButton};