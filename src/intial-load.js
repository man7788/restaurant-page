import potrait from './potrait.jpg';

function creatTitle() {
  const element = document.createElement('div');
  element.textContent = 'Odin Restaurant';
  element.classList.add('title');                                      
  return element;
}

function creatPhoto() {
  const element = document.createElement('div');
  const mainPhoto = new Image();
  element.classList.add('photo-container');
  mainPhoto.classList.add('photo');                                      
  mainPhoto.src = potrait;
  element.appendChild(mainPhoto)
  return element;
}

function createReview() {
  const element = document.createElement('div');
  element.classList.add('review-container');

  const para1 = document.createElement('div');
  para1.classList.add('review-1');
  para1.textContent = 
  `1. This cozy restaurant has left the best impressions! 
  Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and 
  wonderful dessert. I recommend to everyone! I would like to come back here again and again.`
  
  const para2 = document.createElement('div');
  para2.classList.add('review-2');
  para2.textContent =
  `It’s the cutest little spot with amazing food. The (FN) is to die for. IT WAS FIRE!! 
  The service we received was so amazing and we will definitely be back again. 
  They made us feel welcomed and gave us an amazing experience.`
  
  const para3 = document.createElement('div');
  para3.classList.add('review-3');
  para3.textContent = 
  `3. It’s a great experience. 
  The ambiance is very welcoming and charming. Amazing wines, food and service. 
  Staff are extremely knowledgeable and make great recommendations.`

  element.appendChild(para1);
  element.appendChild(para2);
  element.appendChild(para3);

  return element;
}

export { 
  creatTitle, 
  creatPhoto,
  createReview,
 }