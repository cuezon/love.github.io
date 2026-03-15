// Audio player
const audioPlayer = document.getElementById('audioPlayer');
let currentSongIndex = -1;
let isPlaying = false;

// YOUR 9 SONGS - Bituin removed, with your romantic lyrics
const songs = [
  {
    id: 1,
    title: "Tahanan",
    artist: "El Manu",
    emoji: "🏠",
    cover: "🏠",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/El%20Manu%20-%20Tahanan%20(Lyrics).mp3",
    duration: "3:45",
    lyrics: "Tahanan Mo Ako\n'Di Magbabago 'Yun\nAt Pag Ika'y Nawawala\nTingin Ka Lang Sa'king Mata\nPagmamahal Sa'yo\n'Di Mauubos 'Yun\nSabay Natin Na Dadaanan Ang Lahat\nHanggat Sa Dulo Ng Ating Pagmamahal\nHanggat Sa Kunin Tayo Ng Maykapal"
  },
  {
    id: 2,
    title: "Tahan",
    artist: "Carl Timbol",
    emoji: "🕊️",
    cover: "🕊️",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Tahan%20-%20Carl%20Timbol%20(Official%20Audio).mp3",
    duration: "4:02",
    lyrics: "O kay ganda ng langit at ng 'yong mata\nSa gitna ng ilaw ng ating siyudad\nPwede ba o giliw 'wag nang mag-iiba ah\nNangangamba palagi nang nag-iisa\nSa wakas nahanap ang aking tahanan sa'yo\nOh buhay ko hanggang dulo\nAko'y sa'yong sa'yo"
  },
  {
    id: 3,
    title: "Little Bit Better",
    artist: "Caleb Hearn & Rosie",
    emoji: "✨",
    cover: "✨",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Caleb%20Hearn%20%26%20ROSIE%20-%20Little%20Bit%20Better%20(Official%20Lyric%20Video).mp3",
    duration: "3:30",
    lyrics: "And I\nGrew up thinking I\nWould have to Fight\nAll of this alone\nBut now you\nHold me in the darkness..."
  },
  {
    id: 4,
    title: "Accidentally In Love",
    artist: "Shrek Soundtrack",
    emoji: "💘",
    cover: "💘",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Accidentally%20In%20Love%20(From%20Shrek%202%20Soundtrack).mp3",
    duration: "3:08",
    lyrics: "So I said, \"I'm a snowball running\"\nRunning down into the spring\nThat's coming all this love melting under\nBlue skies belting out sunlight, shimmering love\nWell baby I surrender to the strawberry ice cream\nNever ever end of all this love\nWell I didn't mean to do it\nBut there's no escaping your love\nThese lines of lightning\nMean we're never alone\nNever alone, no, no"
  },
  {
    id: 5,
    title: "Make You Feel My Love",
    artist: "Adele",
    emoji: "🎤",
    cover: "🎤",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Adele%20-%20Make%20You%20Feel%20My%20Love%20(Official%20Video).mp3",
    duration: "3:32",
    lyrics: "When the rain is blowing in your face\nAnd the whole world is on your case\nI could offer you a warm embrace\nTo make you feel my love"
  },
  {
    id: 6,
    title: "Walang Iba",
    artist: "Ezra Band",
    emoji: "💖",
    cover: "💖",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Ezra%20Band%20-%20Walang%20Iba(Lyrics).mp3",
    duration: "3:48",
    lyrics: "Kahit na binabato mo ako ng kung ano-ano\nIkaw pa rin ang gusto ko\nKahit na sinasampal mo ako't\nSinisipa't nasusugatan mo\nIkaw pa rin, walang iba\nAng gusto kong makasama\nWalang iba, walang iba, ahh"
  },
  {
    id: 7,
    title: "Before You",
    artist: "Benson Boone",
    emoji: "🌟",
    cover: "🌟",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Benson%20Boone%20-%20Before%20You%20(Official%20Lyric%20Video).mp3",
    duration: "3:20",
    lyrics: "Darling, if you don't mind\nI'll take your hand tonight\nWe could just slow down time\nLet me adore you\nAnd from the moment I looked\nIn those dark brown eyes\nI can't remember life\nBefore you"
  },
  {
    id: 8,
    title: "Ikaw Pa Rin Ang Pipiliin Ko",
    artist: "Cup of Joe",
    emoji: "☕",
    cover: "☕",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Ikaw%20Pa%20Rin%20Ang%20Pipiliin%20Ko%20-%20Cup%20of%20Joe%20(Lyrics).mp3",
    duration: "4:30",
    lyrics: "Ngunit kahit saan ka mapadpad\nKahit ilang taon ang lumipas\nKahit ika'y mapalayo sa piling ko\nIkaw pa rin ang pipiliin ko"
  },
  {
    id: 9,
    title: "Museo",
    artist: "Eliza Maturan",
    emoji: "🖼️",
    cover: "🖼️",
    file: "https://raw.githubusercontent.com/cuezon/playlist/main/Eliza%20Maturan%20-%20Museo%20(Official%20Lyric%20Video).mp3",
    duration: "3:55",
    lyrics: "Parang museo ang puso ko\nNakadisplay ang pag-ibig ko sa'yo\nLahat ng tao'y dumadaan\nPero ikaw lang ang tumitingin"
  }
]; // <--- ITO ANG KULANG! Closing bracket at semicolon

// Password check
function checkPassword() {
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');
  const passwordScreen = document.getElementById('passwordScreen');
  const musicScreen = document.getElementById('musicScreen');
  
  const correctPassword = "love"; // Password is "love"
  
  if (password.toLowerCase() === correctPassword.toLowerCase()) {
    errorMsg.textContent = '';
    passwordScreen.style.opacity = '0';
    
    setTimeout(() => {
      passwordScreen.style.display = 'none';
      musicScreen.style.display = 'block';
      passwordScreen.style.opacity = '1';
      loadSongList();
    }, 500);
    
  } else {
    errorMsg.textContent = '❌ Incorrect!';
    document.querySelector('.box').classList.add('shake');
    setTimeout(() => {
      document.querySelector('.box').classList.remove('shake');
    }, 500);
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
  }
}

// Load song list
function loadSongList() {
  const songList = document.getElementById('songList');
  if (!songList) return;
  
  songList.innerHTML = '';
  
  songs.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.className = 'song-item';
    songItem.onclick = () => playSong(index);
    songItem.innerHTML = `
      <span class="song-number">${index + 1}</span>
      <div class="song-cover">${song.cover}</div>
      <div class="song-details">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <span class="song-duration">${song.duration}</span>
    `;
    songList.appendChild(songItem);
  });
}

// Play song
function playSong(index) {
  if (index === undefined) return;
  
  // Update active state
  document.querySelectorAll('.song-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelectorAll('.song-item')[index].classList.add('active');
  
  const song = songs[index];
  currentSongIndex = index;
  
  // Set audio source
  audioPlayer.src = song.file;
  audioPlayer.load();
  audioPlayer.play().then(() => {
    isPlaying = true;
    updatePlayButton();
  }).catch(error => {
    console.error('Playback failed:', error);
    alert('Cannot play song. Make sure the file URL is correct!');
  });
  
  // Update now playing
  document.getElementById('nowPlayingTitle').textContent = song.title;
  document.getElementById('nowPlayingArtist').textContent = song.artist;
  document.getElementById('nowPlayingCover').textContent = song.emoji;
  
  // Show lyrics
  showLyrics(song);
  
  // Create note burst
  createNoteBurst();
}

// Toggle play/pause
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    isPlaying = true;
  } else {
    audioPlayer.pause();
    isPlaying = false;
  }
  updatePlayButton();
}

// Update play button
function updatePlayButton() {
  const btn = document.getElementById('playPauseBtn');
  if (btn) {
    btn.textContent = isPlaying ? '⏸️' : '▶️';
  }
}

// Next song
function nextSong() {
  if (currentSongIndex < songs.length - 1) {
    playSong(currentSongIndex + 1);
  } else {
    playSong(0);
  }
}

// Previous song
function previousSong() {
  if (currentSongIndex > 0) {
    playSong(currentSongIndex - 1);
  } else {
    playSong(songs.length - 1);
  }
}

// Show lyrics
function showLyrics(song) {
  const lyricsContent = document.getElementById('lyricsContent');
  if (!lyricsContent) return;
  
  lyricsContent.innerHTML = `
    <div style="margin-bottom: 20px;">
      <strong style="font-size: 22px;">${song.title}</strong><br>
      <span style="font-size: 16px;">${song.artist}</span>
    </div>
    <div style="white-space: pre-line;">${song.lyrics}</div>
  `;
}

// Toggle lyrics panel
function toggleLyrics() {
  const panel = document.getElementById('lyricsPanel');
  if (panel) {
    panel.classList.toggle('show');
  }
}

// Close lyrics
function closeLyrics() {
  const panel = document.getElementById('lyricsPanel');
  if (panel) {
    panel.classList.remove('show');
  }
}

// Progress bar
if (audioPlayer) {
  audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
      progressFill.style.width = progress + '%';
    }
    
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    if (durationEl) durationEl.textContent = formatTime(audioPlayer.duration);
  });
}

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function seek(event) {
  const container = event.currentTarget;
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const percentage = x / rect.width;
  audioPlayer.currentTime = percentage * audioPlayer.duration;
}

// Auto next when song ends
audioPlayer.addEventListener('ended', () => {
  nextSong();
});

// Go back
function goBack() {
  const passwordScreen = document.getElementById('passwordScreen');
  const musicScreen = document.getElementById('musicScreen');
  
  audioPlayer.pause();
  isPlaying = false;
  updatePlayButton();
  
  musicScreen.style.display = 'none';
  passwordScreen.style.display = 'flex';
  document.getElementById('password').value = '';
  document.getElementById('errorMsg').textContent = '';
  document.getElementById('password').focus();
}

// Create note burst
function createNoteBurst() {
  const notes = ['🎵', '🎶', '♪', '♫'];
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const note = document.createElement('div');
      note.textContent = notes[Math.floor(Math.random() * notes.length)];
      note.style.position = 'fixed';
      note.style.left = Math.random() * 100 + '%';
      note.style.top = Math.random() * 100 + '%';
      note.style.fontSize = '30px';
      note.style.animation = 'floatNotes 2s forwards';
      note.style.pointerEvents = 'none';
      note.style.zIndex = '9999';
      document.body.appendChild(note);
      setTimeout(() => note.remove(), 2000);
    }, i * 100);
  }
}

// Enter key
const passwordInput = document.getElementById('password');
if (passwordInput) {
  passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkPassword();
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  const passwordScreen = document.getElementById('passwordScreen');
  const musicScreen = document.getElementById('musicScreen');
  
  if (passwordScreen) passwordScreen.style.display = 'flex';
  if (musicScreen) musicScreen.style.display = 'none';
  
  // Make sure closeLyrics is available globally
  window.closeLyrics = closeLyrics;
});