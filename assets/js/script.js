document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playSong(songArray);
    }
});

function playSound(key) {
    let audioElement = document.querySelector(`#s_${key}`);
    let keyElement = document.querySelector(`div[data-key="${key}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    };

    if(keyElement) {
        keyElement.classList.add('active');
    };

    setTimeout(()=> {
        keyElement.classList.remove('active');
    }, 250);
};

function playSong(songArray) {
    let rhythm = 0;

    for(let songItem of songArray) {
        setTimeout(()=> {
            playSound(`key${songItem}`)   
        }, rhythm);

        rhythm += 250;
    }

}