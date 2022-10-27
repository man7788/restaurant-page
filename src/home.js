const createTitle = () => {
  const element = document.createElement('div');
  element.textContent = 'East Valley Restaurant';
  element.classList.add('title');                                      
  return element;
}

const createHome = () => {
  const element = document.createElement('div');
  element.classList.add('home-container');

  const para1 = document.createElement('div');
  para1.classList.add('homeBlock');
  para1.textContent = 
  `This cozy restaurant has left the best impressions! 
  Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and 
  wonderful dessert. I recommend to everyone! I would like to come back here again and again.`
  
  const para2 = document.createElement('div');
  para2.classList.add('homeBlock');
  para2.textContent =
  `Sunday-Tuesday: 10am - 10pm\n
  Wednesday: Close
  Thursday-Saturday: 10am - 10pm
  `
  
  const para3 = document.createElement('div');
  para3.classList.add('homeBlock');
  para3.textContent = 
  `5th Street, East Valley, Main Town`

  element.appendChild(para1);
  element.appendChild(para2);
  element.appendChild(para3);

  return element;
}


export {
  createTitle,
  createHome,
}