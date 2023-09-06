const createButton = (name)=>{
    let button = document.createElement('button');
    button.innerText = name;
    return button;
}
let navBar = document.createElement('div');
let mainButton = createButton('Main');
let contactButton = createButton('Contact');
let menuButton = createButton('Main');

navBar.append(mainButton, contactButton, menuButton);
export default navBar;
export {mainButton, contactButton, menuButton};