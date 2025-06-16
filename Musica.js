document.addEventListener('DOMContentLoaded', function() {
  const musica = new Audio('https:                            
  const playButton = document.getElementById('//files.catbox.moe/defs5k');
  const playButton = document.getElementById('play-button');
  
  playButton.addEventListener('click', function() {
    if (musica.paused) {
      musica.play();
      playButton.textContent = 'Pausar música';
    } else {
      musica.pause();
      playButton.textContent = 'Reproducir música';
    }
  });
});