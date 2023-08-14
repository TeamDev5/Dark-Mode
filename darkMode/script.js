let modeToggle = document.querySelector('.mode-tog');
let darkMode = document.querySelector('.dark-mode');

modeToggle.addEventListener('click', () =>{
    darkMode.classList.toggle('active');
    modeToggle.classList.toggle('active');
})
