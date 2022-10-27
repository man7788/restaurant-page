const createContact = () => {
    const element = document.createElement('div');
    element.classList.add('contact-container');
  
    const para1 = document.createElement('div');
    para1.classList.add('contactBlock');
    para1.textContent = 
    `Chef: Peter`
    
    const para2 = document.createElement('div');
    para2.classList.add('contactBlock');
    para2.textContent =
    `Manager: Steve`
    
    const para3 = document.createElement('div');
    para3.classList.add('contactBlock');
    para3.textContent = 
    `Waiter: Karen`
  
    element.appendChild(para1);
    element.appendChild(para2);
    element.appendChild(para3);
  
    return element;
  }

export {
  createContact,
}