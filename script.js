const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

// Play with mouse clicks
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// Play with keyboard keys
document.addEventListener('keydown', (e) => {
  if (e.repeat) return; // don’t play if key is being held down
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

// Function to play notes
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

// BONUS: Auto-play "Twinkle Twinkle"
const tuneBtn = document.getElementById('play-tune');
if (tuneBtn) {
  tuneBtn.addEventListener('click', playTwinkle);
}

function playTwinkle() {
  const sequence = [
    'C','C','G','G','A','A','G',
    'F','F','E','E','D','D','C'
  ];
  let delay = 0;

  sequence.forEach((note) => {
    setTimeout(() => {
      const key = document.querySelector(`.key[data-note="${note}"]`);
      playNote(key);
    }, delay);
    delay += 600; // ms between notes
  });
}
