export function isAudioOn() {
    let audio = localStorage.getItem('audio');
    return (audio === 'true');
}

export function toggleAudio(e) {
    let audio = isAudioOn();
    if (audio) {
        audio = false;
        // set audio button to off
        e.target.innerHTML = 'Audio: OFF';
        localStorage.setItem('audio', 'false');
    } else {
        audio = true;
        e.target.innerHTML = 'Audio: ON';
        localStorage.setItem('audio', 'true');
    }
}