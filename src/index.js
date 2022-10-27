import './style.css';
import {
  creatPhoto,
  createHeader,
  createFooter, } 
  from './intial-load';
import { createTitle, createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

const initialLoad = () => {
  
  document.querySelector('body').appendChild(createHeader());
  document.querySelector('body').appendChild(createFooter());
  homeLoad();
  // activateButtons();
  // console.log(homeButton);
  // return { homeButton, menuButton, contactButton}
}

const activateButtons = () => {
  // const i = initialLoad;
  const homeButton = document.querySelector('.tab1');
  const menuButton = document.querySelector('.tab2');
  const contactButton = document.querySelector('.tab3');
  homeButton.addEventListener('click', homeLoad);
  menuButton.addEventListener('click', menuLoad);
  contactButton.addEventListener('click', contactLoad);
}

const homeLoad = () => {
  content.replaceChildren();
  content.appendChild(createTitle());
  content.appendChild(createHome());
}

const menuLoad = () => {
  content.replaceChildren();
  content.appendChild(createMenu());
}

const contactLoad = () => {
  content.replaceChildren();
  content.appendChild(createContact());
}

initialLoad();
activateButtons();
