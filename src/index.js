import './sass/main.scss';
import menu from './tamplates/menu.hbs';
import menuMarkup from './menu.json'

// Рендерим разметки меню

const menuItem = document.querySelector('.js-menu');
const menuMarkupItem = createMenuDisnes(menuMarkup);

menuItem.insertAdjacentHTML('afterbegin', menuMarkupItem );
function createMenuDisnes(menuMarkup) {
    return menuMarkup.map(menu).join('');
  

}


//Для удобства хранения списка тем используем такое перечисление

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// Создаем обект body и input
const refs ={
 body: document.querySelector('body'),
 addTheme: document.querySelector('#theme-switch-toggle')
}
 
refs.addTheme.addEventListener('change', onClickTheme);

// Добавляем функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

function onClickTheme() {
    const check = refs.addTheme.checked;

    if (check) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)

        // Используем localStorage для сохранения темы(сохраняем данные пару ключ/значение)
        localStorage.setItem('background', Theme.DARK);
        
        
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        localStorage.removeItem('theme');
 // Используем localStorage для сохранения темы(сохраняем данные пару ключ/значение) 
         localStorage.setItem('background', Theme.LIGHT)
    }

}

// Используем localStorage для сохранения темы при перезагрузки.Получаем данние значения ключа
 saveTheme()
    
function saveTheme() {
    
    let theme = localStorage.getItem('background');
    
    //сохранение светлой темы

    if (theme === Theme.LIGHT || theme === null) {

         refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);

        refs.addTheme.checked = false

        // сохранение тёмной темы
    } else {
        
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
     // ставим свойство true для ползунка когда тёмная тема
     refs.addTheme.checked = true


    }
   
  
}