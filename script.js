document.querySelectorAll('.tombolLampu i').forEach(toggle => {
    toggle.addEventListener('click', function() {
        
        const On = this.classList.toggle('bi-toggle2-on');
        this.classList.toggle('bi-toggle2-off', !On);

        this.style.color = On ? 'greenyellow' : 'red';

        const lamps = this.closest('.containerLampu').querySelectorAll('.bolam');
        
        lamps.forEach(lamp => {
            lamp.src = On ? 'lampu-nyala.png' : 'lampu-mati.png';
        });
    });
});
