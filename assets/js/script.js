// Typewriter Animation
const designation = [
  "Jr Software Engineer",
  "Java Backend Developer",
  "Spring Boot Developer"
];

let currentSkill = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const currentText = designation[currentSkill];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, currentChar - 1);
    currentChar--;
  } else {
    typingElement.textContent = currentText.substring(0, currentChar + 1);
    currentChar++;
  }

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && currentChar === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentSkill = (currentSkill + 1) % designation.length;
    typeSpeed = 300;
  }

  setTimeout(typeWriter, typeSpeed);
}
typeWriter();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-[#0a0a0a]/90', 'backdrop-blur-lg', 'border-b', 'border-gray-800');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-[#0a0a0a]/90', 'backdrop-blur-lg', 'border-b', 'border-gray-800');
    navbar.classList.add('bg-transparent');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
  });

  // Close menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuOpen.classList.remove('hidden');
      menuClose.classList.add('hidden');
    });
  });
}

// Skills filter
const filterButtons = document.querySelectorAll('.filter-btn');
const skillItems = document.querySelectorAll('.skill-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');

    // Update active button
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter skills
    let visibleIndex = 0;
    skillItems.forEach((item) => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.classList.remove('hidden-skill');
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        setTimeout(() => {
          item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, visibleIndex * 60);
        visibleIndex++;
      } else {
        item.style.transition = 'none';
        item.classList.add('hidden-skill');
      }
    });
  });
});

// Video preview toggle
function openVideo(projectId) {
  const image = document.getElementById(projectId + '-img');
  const video = document.getElementById(projectId + '-video');
  const previewBtn = document.querySelector('.' + projectId + '-preview');
  const closeBtn = document.querySelector('.' + projectId + '-close');

  if (image) image.classList.add('hidden');
  if (video) {
    video.classList.remove('hidden');
    video.play();
  }
  if (previewBtn) previewBtn.classList.add('hidden');
  if (closeBtn) closeBtn.classList.remove('hidden');
}

function closeVideo(projectId) {
  const image = document.getElementById(projectId + '-img');
  const video = document.getElementById(projectId + '-video');
  const previewBtn = document.querySelector('.' + projectId + '-preview');
  const closeBtn = document.querySelector('.' + projectId + '-close');

  if (image) image.classList.remove('hidden');
  if (video) {
    video.classList.add('hidden');
    video.pause();
    video.currentTime = 0;
  }
  if (previewBtn) previewBtn.classList.remove('hidden');
  if (closeBtn) closeBtn.classList.add('hidden');
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);
