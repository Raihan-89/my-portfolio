// Designation Section Animation
const designation = [
    "Backend Developer",
    "Java Developer",
    "Frontend Developer"
];

let currentSkill = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
    const typingElement = document.getElementById('typing-text');
    const currentText = designation[currentSkill];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
    } else {
        typingElement.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && currentChar === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentSkill = (currentSkill + 1) % designation.length;
        typeSpeed = 300; // Pause before next word
    }
    
    setTimeout(typeWriter, typeSpeed);
}
typeWriter();
// Designation Section Animation ends here

// The Technologies/Skills section JavaScript
const filterButtons = document.querySelectorAll(".filter-btn");
const skills = document.querySelectorAll(".skills");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    // Remove active styles from all buttons first
    filterButtons.forEach((btn) => {
      btn.classList.remove("shadow-[#4b1d3f]", "bg-[#c33c54]", "shadow-inner");
    });

    // Add active style to the clicked button
    button.classList.add("shadow-[#4b1d3f]", "bg-[#c33c54]", "shadow-inner");

    skills.forEach((skill) => {
      if (skill.getAttribute("data-category") === category) {
        const spans = skill.querySelectorAll(".skill-name");
        skill.classList.remove("hidden");
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.remove("opacity-0", "translate-y-2");
            span.classList.add("opacity-100", "translate-y-0");
          }, index * 100);
        });
      } else {
        const spans = skill.querySelectorAll(".skill-name");
        skill.classList.add("hidden");
        spans.forEach((span) => {
          span.classList.remove("opacity-100", "translate-y-0");
          span.classList.add("opacity-0", "translate-y-2");
        });
      }
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
// The Technologies/Skills section JavaScript ends here

// Mouse move and click animation code
const colors = ["#FF3CAC", "#784BA0", "#2B86C5", "#00F5A0", "#FFB75E", "#FF6B6B"];
const fireworkParticles = [];

// --- Original Mouse Trail Logic ---
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "trail";
  const color = colors[Math.floor(Math.random() * colors.length)];
  trail.style.background = color;
  trail.style.zIndex = "10";
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 800);
});

// --- New Fireworks Logic ---
document.addEventListener("click", (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;
  const numParticles = 20;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.className = "firework-particle";
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 4;

    particle.style.background = color;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${clickX}px`;
    particle.style.top = `${clickY}px`;
    particle.style.zIndex = "10";
    
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    // Reduced the speed to limit the travel distance
    const speed = Math.random() * 2 + 1; 
    const velocityX = Math.cos(angle) * speed;
    const velocityY = Math.sin(angle) * speed;

    fireworkParticles.push({
      element: particle,
      x: clickX,
      y: clickY,
      vx: velocityX,
      vy: velocityY,
      opacity: 1,
    });
  }
});

function animateFireworks() {
  for (let i = fireworkParticles.length - 1; i >= 0; i--) {
    const p = fireworkParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.1; 
    p.opacity -= 0.02;

    p.element.style.left = `${p.x}px`;
    p.element.style.top = `${p.y}px`;
    p.element.style.opacity = p.opacity;

    if (p.opacity <= 0) {
      p.element.remove();
      fireworkParticles.splice(i, 1);
    }
  }
  requestAnimationFrame(animateFireworks);
}

animateFireworks();
// Mouse move and click animation code ends here

// Project Preview Video Code
function openVideo(projectId) {
  const image = document.getElementById(projectId + "-img");
  const video = document.getElementById(projectId + "-video");
  const live_preview = document.getElementById(projectId + "-preview-btn");
  const close_preview = document.getElementById(projectId + "-close-btn");

  image.classList.add("hidden")
  video.classList.remove("hidden");
  live_preview.classList.add("hidden")
  close_preview.classList.remove("hidden");
  video.play();
}

function closeVideo(projectId) {
  const image = document.getElementById(projectId + "-img");
  const video = document.getElementById(projectId + "-video");
  const live_preview = document.getElementById(projectId + "-preview-btn");
  const close_preview = document.getElementById(projectId + "-close-btn");

  image.classList.remove("hidden");
  video.classList.add("hidden");
  live_preview.classList.remove("hidden")
  close_preview.classList.add("hidden");
  video.pause();
  video.currentTime = 0;
}
// Project Preview Video Code ends here


// Mobile Menu Code
const hamburgerOpen = document.getElementById('hamburger-open-menu');

const hamburgerClose = document.getElementById('hamburger-close-menu');

const menuOptions = document.getElementById('menu-options');

const menuLink = document.querySelectorAll('.menu-link');

const menuLinks = document.querySelectorAll('.menu-links');

// open menu
hamburgerOpen.addEventListener('click', () => {
  hamburgerOpen.classList.add("hidden");
  hamburgerClose.classList.remove("hidden");
  menuOptions.classList.remove("translate-x-full");
  menuOptions.classList.add("translate-x-0");

  menuLink.forEach((links, index) => {
    setTimeout(() => {
      links.classList.remove('opacity-0', 'translate-x-12');
      links.classList.add('opacity-100', 'translate-x-0');
    }, (index + 1) * 100);
  });
});

// close menu
hamburgerClose.addEventListener('click', () => {
  hamburgerClose.classList.add("hidden");
  hamburgerOpen.classList.remove("hidden");
  menuOptions.classList.remove("translate-x-0");
  menuOptions.classList.add("translate-x-full");
  
  menuLink.forEach(links => {
    links.classList.add('opacity-0', 'translate-x-12');
    links.classList.remove('opacity-100', 'translate-x-0');
  });
});

// close when link clicked
menuLinks.forEach(links => {
    links.addEventListener('click', () => {
      hamburgerClose.classList.add("hidden");
      hamburgerOpen.classList.remove("hidden");
      menuOptions.classList.remove("translate-x-0");
      menuOptions.classList.add("translate-x-full");
      
      menuLink.forEach(links => {
        links.classList.add('opacity-0', 'translate-x-12');
        links.classList.remove('opacity-100', 'translate-x-0');
      });
    })
  }
);

// Mobile Menu Code ends here
