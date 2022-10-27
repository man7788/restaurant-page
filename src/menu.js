const createMenu = () => {
    const element = document.createElement('div');
    element.classList.add('menu-container');
  
    const para1 = document.createElement('div');
    para1.classList.add('menuBlock');
    para1.textContent = 
    `Set 1: Soup and Salad, Seared Scallops, Steak with asparagus, Dessert`
    
    const para2 = document.createElement('div');
    para2.classList.add('menuBlock');
    para2.textContent =
    `Set 2: Soup and Salad, Seared Tuna, Loster with pasta, Dessert`
    
    const para3 = document.createElement('div');
    para3.classList.add('menuBlock');
    para3.textContent = 
    `Set 2: Soup and Salad, Foie gras with toast, Lamp chops with asparagus, Dessert`
  
    element.appendChild(para1);
    element.appendChild(para2);
    element.appendChild(para3);
  
    return element;
  }
  
export {
  createMenu,
}