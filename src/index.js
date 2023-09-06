import './index.css'
import Main from './pages/Main';
import NavBar, {mainButton, contactButton, menuButton} from './components/NavBar';
import Contact from './pages/Contact.js';
import Menu from './pages/Menu.js';
const content = document.querySelector('#content');
document.querySelector('body').prepend(NavBar());
content.appendChild(Main());
const addListner = (button, page)=>{
    button.addEventListener('click',(event)=>{
        content.innerHTML = '';
        content.appendChild(page);
    })
}
addListner(mainButton,Main());
addListner(menuButton,Menu());
addListner(contactButton,Contact());