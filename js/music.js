function musicPlay(isPlay) {
    var media = document.querySelector('#audioDom');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}
