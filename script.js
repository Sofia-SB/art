const container = document.querySelector('.container');
const popup = document.querySelector('.popup');

const container1 = document.querySelector('.container1');
const popup1 = document.querySelector('.popup1');

const container2 = document.querySelector('.container2');
const popup2 = document.querySelector('.popup2');

const container3 = document.querySelector('.container3');
const popup3 = document.querySelector('.popup3');

const container4 = document.querySelector('.container4');
const popup4 = document.querySelector('.popup4');

container.addEventListener('mouseenter', () => {
  popup.style.opacity = '1';
  popup.style.visibility = 'visible';
});

container.addEventListener('mouseleave', () => {
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
});

container1.addEventListener('mouseenter', () => {
    popup1.style.opacity = '1';
    popup1.style.visibility = 'visible';
});
  
container1.addEventListener('mouseleave', () => {
    popup1.style.opacity = '0';
    popup1.style.visibility = 'hidden';
});

container2.addEventListener('mouseenter', () => {
    popup2.style.opacity = '1';
    popup2.style.visibility = 'visible';
});
  
container2.addEventListener('mouseleave', () => {
    popup2.style.opacity = '0';
    popup2.style.visibility = 'hidden';
});

container3.addEventListener('mouseenter', () => {
    popup3.style.opacity = '1';
    popup3.style.visibility = 'visible';
});
  
container3.addEventListener('mouseleave', () => {
    popup3.style.opacity = '0';
    popup3.style.visibility = 'hidden';
});

container4.addEventListener('mouseenter', () => {
    popup4.style.opacity = '1';
    popup4.style.visibility = 'visible';
});
  
container4.addEventListener('mouseleave', () => {
    popup4.style.opacity = '0';
    popup4.style.visibility = 'hidden';
});