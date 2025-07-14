const correctDOB = "15/07/2004";
const photos = [
  "./images/photo_tek.jpg",
  "./images/photo_ortak.jpg",
  "./images/photo_tek.jpg"
];
let currentPhoto = 0;

function checkDOB() {
  const input = document.getElementById("dob").value.trim();
  if (input === correctDOB) {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("photo-screen").style.display = "flex";
    document.getElementById("photo").src = photos[0];
    currentPhoto = 1;
    setTimeout(animatePhotos, 2500);
  } else {
    alert("Yanlış doğum tarihi! Bir daha dene 💔");
  }
}

function animatePhotos() {
  if (currentPhoto < photos.length) {
    const img = document.getElementById("photo");
    img.classList.remove("photo-slide");
    void img.offsetWidth;
    img.src = photos[currentPhoto];
    img.classList.add("photo-slide");
    currentPhoto++;
    setTimeout(animatePhotos, 2500);
  } else {
    document.getElementById("photo-screen").style.display = "none";
    document.getElementById("final-photo-screen").style.display = "flex";
    setTimeout(() => {
      document.getElementById("final-photo-screen").style.display = "none";
      document.getElementById("letter-screen").style.display = "flex";
    setTimeout(openLetter, 2000);
    }, 4000);
  }
}

function openLetter() {
  const letter = document.getElementById("letter");
  const letterBtn = document.getElementById("open-letter-btn");
  const letterContent = document.getElementById("letter-content");

  // Hepsini resetle
  letterBtn.style.display = "block";
  letter.style.display = "block";
  letterContent.style.display = "none";
  letter.classList.remove("open-animation");
  letterContent.classList.remove("fade-in");

  // Animasyonu tetikle
  void letter.offsetWidth;

  letter.classList.add("open-animation");

  setTimeout(() => {
    letterBtn.style.display = "none";
    letter.style.display = "none";
    letterContent.style.display = "block";
    letterContent.classList.add("fade-in");
  }, 500);
}


const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
  }
  requestAnimationFrame(drawStars);
}
drawStars();