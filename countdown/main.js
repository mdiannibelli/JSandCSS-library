const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function init() {
    /* recuperamos el contador */
    const timestampContainer = document.getElementById('timestamp')
    const $countdown = document.querySelectorAll('data-date');
    if (!$countdown) return;
    /* recuperamos los días, horas, minutos y segundos */
    const $days = document.querySelector('[data-days]');
    const $hours = document.querySelector('[data-hours]');
    const $minutes = document.querySelector('[data-minutes]');
    const $seconds = document.querySelector('[data-seconds]');

    /* transformamos en una fecha */
    const timestamp = timestampContainer.getAttribute('data-date') /* obtenemos el timestamp */
    if(!timestamp) return;
    const date = new Date(+timestamp).getTime(); /* lo convertimos en numero ya que el getAttribute nos devuelve una cadena de texto */

    /* función para actualizar el contador mediante la diferencia de la fecha actual y la del timestamp */
    function updateCountDown() {
        const now = Date.now();
        const diff = date - now;

        if($days instanceof HTMLElement){
            $days.innerText = Math.floor(diff / DAY).toString()
            
        }
        if($hours instanceof HTMLElement){
            $hours.innerText = Math.floor((diff % DAY) / HOUR).toString()
            
        }
        if($minutes instanceof HTMLElement){
            $minutes.innerText = Math.floor((diff % HOUR) / MINUTE).toString()
            
        }
        if($seconds instanceof HTMLElement){
            $seconds.innerText = Math.floor((diff % MINUTE) / SECOND).toString()
            
        }
    }
    setInterval(updateCountDown, SECOND)
}

init()