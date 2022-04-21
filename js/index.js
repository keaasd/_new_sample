let tabButton = document.querySelector('.category__button');
let gridItem = document.querySelectorAll('.catalog-grid__item');
// по клику на кнопку (tabButton) добавляем класс (active display: block) к табличкам (catalog-grid__item)

tabButton.onclick = () => {
  for (let i = 0; i < gridItem.length; i++) {
    if (i < 8) {
      gridItem[i].classList.add('catalog-grid_active')
    }
    
  }

}