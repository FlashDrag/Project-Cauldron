import { isAudioOn, toggleAudio } from './audio.js';

document.addEventListener('DOMContentLoaded', function () {
    let audioBtn = document.getElementById('audio-btn');
    let audio = isAudioOn();
    console.log(audio);
    if (audio) {
        audioBtn.innerHTML = 'Audio: ON';
    } else {
        audioBtn.innerHTML = 'Audio: OFF';
    }
    audioBtn.addEventListener('click', toggleAudio);
});

// Initialize the toasts
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))