// Example: Animate nav on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50) {
        nav.style.background = '#111';
    } else {
        nav.style.background = '#222';
    }
});
// Animate progress bars when in view
window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            bar.style.transition = 'width 1.2s cubic-bezier(.25,.8,.25,1)';
        }
    });
});
// In js/script.js
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    this.innerHTML = "<h3 style='color:#00ffd0;'>Thank you!<br>Your message has been sent.</h3>";
});
// Matrix/Code Rain Effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeMatrix();
window.addEventListener('resize', resizeMatrix);

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]();<>=+-*/";
const fontSize = 18;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(24,24,24,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = "#00ffd0";
    for(let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 40);

// 3D Tilt Effect for Photo
const photo3d = document.getElementById('photo3d');
const img = photo3d.querySelector('img');
photo3d.addEventListener('mousemove', (e) => {
    const rect = photo3d.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12;
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    img.style.boxShadow = `0 0 60px #00ffd088, 0 8px 40px #000c`;
});
photo3d.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    img.style.boxShadow = '0 0 40px #00ffd044, 0 4px 32px #000a';
});

photo3d.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    img.style.boxShadow = '0 0 40px #00ffd044, 0 4px 32px #000a';
});
// Typewriter Effect
const roles = [
    "Web Developer",
    "JavaScript Enthusiast",
    "UI/UX Designer",
    "Open Source Contributor",
    "Problem Solver"
];
const typewriter = document.getElementById('typewriter');
const texts = ["Frontend Developer", "React Enthusiast", "UI/UX Learner"];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      current = texts[i].substring(0, j++);
      typewriter.innerHTML = current + '<span class="cursor">|</span>';
      setTimeout(type, 100);
    } else if (isDeleting && j >= 0) {
      current = texts[i].substring(0, j--);
      typewriter.innerHTML = current + '<span class="cursor">|</span>';
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % texts.length;
      setTimeout(type, 700);
    }
  }
}
type();