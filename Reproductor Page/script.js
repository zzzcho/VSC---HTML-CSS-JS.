const audio = new Audio('Lana Del Rey - Margaret (Audio) ft. Bleachers.mp3');
const playPauseButton = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  currentTimeElement.textContent = formatTime(audio.currentTime);
}

progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '⏸';
  } else {
    audio.pause();
    playPauseButton.textContent = '▶';
  }
});

audio.addEventListener('loadedmetadata', () => {
  durationElement.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('ended', () => {
  playPauseButton.textContent = '▶';
  progress.value = 0;
  currentTimeElement.textContent = '0:00';
});
