import './style.css';
import {
  creatPhoto,
  createHeader,
  createFooter, } 
  from './intial-load';
import { createTitle, createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './menu.js';



function component() {
}

content.appendChild(createTitle());
content.appendChild(createHome());
document.querySelector('body').appendChild(createHeader());
document.querySelector('body').appendChild(createFooter());
