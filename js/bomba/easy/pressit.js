var timerPressIt = "Modulo Press It";

function creaPressIt(solution) {
  let modulo = document.createElement("div");
  modulo.classList.add("press-it-module");

  let button = document.createElement("div");
  button.classList.add("press-it-button");

  let label = document.createElement("div");
  label.classList.add("press-it-label");

  label.innerHTML = solution;

  button.setAttribute("onclick", "newClick()");

  let led_container = document.createElement("div");
  led_container.classList.add("led-container");

  let led = document.createElement("div");
  led.classList.add("led");

  led_container.appendChild(led);

  modulo.appendChild(button);
  modulo.appendChild(label);
  modulo.appendChild(led_container);
  return modulo;
}

function creaTimer(durationInSeconds, module) {
  let timer = document.createElement("div");
  timer.classList.add("press-it-timer");

  let display = document.createElement("div");
  display.classList.add("press-it-display");
  // Inizializza il display del timer con il valore iniziale
  display.textContent = formatTime(durationInSeconds);

  // Funzione per gestire il completamento del timer e il reset
  function handleTimerCompletion() {
    clearInterval(intervalId);
    for (let i = 0; i < 2; i++) {
      //SPEGNE IL MODULO TRANNE IL LED
      module.children[i].classList.add("complete");
    }
    module.querySelector(".press-it-timer").style.cursor = "default";
    if (count !== solution) {
      if (errori.children.length < parseInt(max_errori.innerHTML)) {
        var x = document.createElement("div");
        x.innerHTML = "X";
        errori.appendChild(x);

        var led = module.querySelector(".led-container .led");
        led.style.backgroundColor = "red";
        led.style.webkitBoxShadow = "0px 0px 2vw 0.5vw red";
        led.style.boxShadow = "0px 0px 2vw 0.5vw red";
        click.pause();
        wrong.pause();
        wrong.currentTime = 0;
        wrong.play();
        count = 0;
        var n_moduli = document.querySelector(".n-moduli");
        var n_moduli_completati = document.querySelector(".n-moduli-completati");
      
        n_moduli_completati.innerHTML = parseInt(n_moduli_completati.innerHTML) + 1;
        // Riavvia il timer solo se non è già in esecuzione
        if (!intervalId) {
          remainingTime = durationInSeconds;
          display.textContent = formatTime(remainingTime);
          intervalId = setInterval(updateTimer, 1000);
        }
      } else if (errori.children.length == parseInt(max_errori.innerHTML)) {
        var x = document.createElement("div");
        x.innerHTML = "X";
        errori.appendChild(x);
        var led = module.querySelector(".led-container .led");
        led.style.backgroundColor = "red";
        led.style.webkitBoxShadow = "0px 0px 2vw 0.5vw red";
        led.style.boxShadow = "0px 0px 2vw 0.5vw red";
        click.pause();
        stopTick();
        wrong.pause();
        wrong.currentTime = 0;
        wrong.play();
        musicLevel.pause();
        explosion.pause();
        explosion.currentTime = 0;
        explosion.play();
        minuteLeft.pause();
        timeLeft.pause();
        sconfitta(timerPressIt);
      } else if (errori.children.length > parseInt(max_errori.innerHTML)) {
        var led = module.querySelector(".led-container .led");
        led.style.backgroundColor = "red";
        led.style.webkitBoxShadow = "0px 0px 2vw 0.5vw red";
        led.style.boxShadow = "0px 0px 2vw 0.5vw red";
      }
    } else {
      var led = module.querySelector(".led-container .led");
      led.style.backgroundColor = "lime";
      led.style.webkitBoxShadow = "0px 0px 2vw 0.5vw #74FF66ed";
      led.style.boxShadow = "0px 0px 2vw 0.5vw #74FF66";
      click.pause();
      right.pause();
      right.currentTime = 0;
      right.play();
      checkForWin();
    }
  }

  function updateTimer() {
    remainingTime--;
    display.textContent = formatTime(remainingTime);
    if (remainingTime === 0) {
      var btn = document.querySelector(".press-it-button");
      btn.setAttribute("onclick", "");
      btn.style.cursor = "not-allowed";
      handleTimerCompletion();
    }
  }

  // Avvia l'intervallo del timer
  let remainingTime = durationInSeconds;
  let intervalId = setInterval(updateTimer, 1000);

  timer.appendChild(display);
  return timer;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

var solution = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
var pressItModule = creaPressIt(solution);
pressItModule.children[0].appendChild(
  creaTimer(
    0 * 60 + Math.floor(Math.random() * (20 - 15 + 1)) + 15,
    pressItModule
  )
);
aggiungi_modulo(pressItModule);
var count = 0;

function newClick() {
  var times = Math.floor(Math.random() * 4 + 1);
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      click.pause();
      click.currentTime = 0;
      click.play();
    }, 500 * i); // Increase the delay for each iteration
    setTimeout(() => {
      click.pause();
    }, 500 * i + 100); // Adjust the pause timing to be after the play
  }
  count++;
}
