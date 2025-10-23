const btnSaluto = document.getElementById('btnSaluto');
const messaggio = document.getElementById('messaggio');

btnSaluto.addEventListener('click', function() {
    messaggio.textContent = '👋 Ciao! Benvenuto nella mia pagina!';
    messaggio.classList.add('show');
    
    // Opzionale: nascondi il messaggio dopo 3 secondi
    // setTimeout(() => {
    //     messaggio.classList.remove('show');
    // }, 3000);
});