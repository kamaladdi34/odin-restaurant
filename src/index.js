import main from './pages/Main';
import navBar, {mainButton, contactButton, menuButton} from './components/navbar';
import contact from './pages/Contact.js';
import menu from './pages/Menu.js';
const content = document.querySelector('#content');
document.querySelector('body').prepend(navBar);
content.appendChild(main);
const addListner = (button, page)=>{
    button.addEventListener('click',(event)=>{
        content.innerHTML = '';
        content.appendChild(page);
    })
}
addListner(mainButton,main);
addListner(menuButton,menu);
addListner(contactButton,contact);