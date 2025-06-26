function themeChanger(color) {
     document.body.style.background = color; 
}

const buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

      const isToggle = false; 

      if(!isToggle || background=='black'){
          background =buttons[i].innerHTML;
          if(background=='default'){
            themeChanger('orange');
          }
          themeChanger(`${background}`);
      }
    });
}












