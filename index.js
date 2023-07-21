//  function playSound(e){
//     const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-keys="${e.keyCode}"]`);
//     if(!audio) return;
//     audio.currentTime=0;
//     audio.play;
//    key.classList.add('playing');
// };

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transition', removeTransition));
// window.addEventListener('keydown', playSound);




const allKeys = document.querySelectorAll('.key');

function playAudio(event) {
  const clickedKey = event.target.getAttribute('data-keys');
  console.log("HI", clickedKey);
  const audioToPlay = document.querySelector(`audio[data-keys="${clickedKey}"]`);

  console.log("Keys:", allKeys);
  allKeys.forEach(key => {
    console.log("Clicked Key", clickedKey);
    console.log("Attribute", key.getAttribute('data-keys'));
    if (key.getAttribute('data-keys') == clickedKey) {
      console.log("Add class on", key);
      key.classList.toggle('playing');
      setTimeout(() => {
        key.classList.toggle('playing');
      }, 500);
    }
  });

  if (audioToPlay) {
    audioToPlay.currentTime = 0;
    audioToPlay.play();
    setTimeout(() => {
      audioToPlay.pause();
    }, 500);
  }
}  

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('click', playAudio);
  });
  
  document.addEventListener('keydown', function (event) {
    const keyPressed = event.key.toUpperCase();
    const keyElement = document.querySelector(`.key[data-keys="${keyPressed.charCodeAt(0)}"]`);
    if (keyElement) {
      keyElement.click();
    }
  });