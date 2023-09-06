const createButton = (name)=>{
    let button = document.createElement('button');
    button.innerText = name;
    return button;
}
let navBar, mainButton, contactButton, menuButton;
const NavBar = ()=>{
    navBar = document.createElement('div');
    navBar.classList.add('nav');
    mainButton = createButton('Main');
    contactButton = createButton('Contact');
    menuButton = createButton('Menu');
    navBar.append(mainButton, contactButton, menuButton);
    return navBar;
}
export default NavBar;
export {mainButton, contactButton, menuButton};