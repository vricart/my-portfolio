const tileImageArr = [
  'tile-1.png',
  'tile-2.png',
  'tile-3.png',
  'tile-4.png',
  'tile-5.png',
  'tile-6.png',
  'tile-7.png',
  'tile-8.png',
  'tile-9.png',
  'tile-10.png',
  'tile-11.png',
  'tile-12.png'
];

function getRandomTile(element) {
  const randomIndex = Math.floor(Math.random() * tileImageArr.length);
  const selectedTile = tileImageArr[randomIndex];
  console.log(selectedTile);
  element.src = `./assets/${selectedTile}`;
}

function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const menuCheckbox = document.getElementById("menu-checkbox");
  if (menuCheckbox.checked) {
    sidenav.style.width = "100%";
  } else {
    sidenav.style.width = "0";
  }
}

document.getElementById("menu-checkbox").addEventListener("change", toggleNav);

document.querySelectorAll('.sidenav-link').forEach(link => {
  link.addEventListener('click', () => {
    const sidenav = document.getElementById("mySidenav");
    const menuCheckbox = document.getElementById("menu-checkbox");
    sidenav.style.width = "0";
    menuCheckbox.checked = false;
  });
});

document.querySelectorAll('.hover-target').forEach(element => {
  element.addEventListener('click', () => {
    const popup = element.nextElementSibling;
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });
});

document.querySelectorAll('.project-container').forEach(container => {
  container.addEventListener('click', (event) => {
    console.log("Tapped");

    event.stopPropagation();

    if (container.classList.contains('show-overlay')) {
      container.classList.remove('show-overlay');
    } else {
      container.classList.add('show-overlay');
    }
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.project-container.show-overlay').forEach(container => {
    container.classList.remove('show-overlay');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
