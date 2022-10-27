function createContact() {
    const element = document.createElement('div');
    element.classList.add('home-container');
  
    const para1 = document.createElement('div');
    para1.classList.add('menuBlock');
    para1.textContent = 
    `1. This cozy restaurant has left the best impressions! 
    Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and 
    wonderful dessert. I recommend to everyone! I would like to come back here again and again.`
    
    const para2 = document.createElement('div');
    para2.classList.add('menuBlock');
    para2.textContent =
    `Sunday-Tuesday: 10am - 10pm\n
    Wednesday: Close
    Thursday-Saturday: 10am - 10pm
    `
    
    const para3 = document.createElement('div');
    para3.classList.add('menuBlock');
    para3.textContent = 
    `5th Street, East Valley, Main Town`
  
    element.appendChild(para1);
    element.appendChild(para2);
    element.appendChild(para3);
  
    return element;
  }

export {
  createContact,
}