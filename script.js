button = document.querySelector('#btn')
button.addEventListener('click', () => {
 
 
  if (button.innerHTML === 'Hired') {
    button.innerHTML = 'Hire me';
    
  } 
    
  else {
   // na here i add wetin i want make e show for the button
    button.innerHTML = 'Hired'; 
alert('Wow! Thank you for hiring me.')
   // na for here i disable the button
    button.disabled = true;
  }
})
