const display = document.querySelector('#visual');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = displayinnerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id =='equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

const themeSwitchBtn = document.querySelector('.theme-switch');
const calculator = document.querySelector('.calculator');
const switchIcon = document.querySelector('.switch-icon');
let isNight = true;
themeSwitchBtn.onclick = () => {
  calculator.classList.toggle('night');
  themeSwitchBtn.classList.toggle('active');
  isNight = !isNight;
}
