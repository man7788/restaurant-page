import potrait from './potrait.jpg';

function creatPhoto() {
  const element = document.createElement('div');
  const mainPhoto = new Image();
  element.classList.add('photo-container');
  mainPhoto.classList.add('photo');                                      
  mainPhoto.src = potrait;
  element.appendChild(mainPhoto)
  return element;
}

function createHeader() {
  const element = document.createElement('div');
  element.classList.add('header-container');

  const tab1 = document.createElement('div');
  tab1.classList.add('tab');
  tab1.textContent = 'Home';
  const tab2 = document.createElement('div');
  tab2.classList.add('tab');
  tab2.textContent = 'Menu';
  const tab3 = document.createElement('div');
  tab3.classList.add('tab');
  tab3.textContent = 'Contact';

  element.appendChild(tab1);
  element.appendChild(tab2);
  element.appendChild(tab3);


  return element;
}

function createFooter() {
  const element = document.createElement('div');
  element.classList.add('footer-container');

  return element;
}

export { 
  creatPhoto,
  createHeader,
  createFooter,
 }