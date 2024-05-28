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


document.addEventListener('DOMContentLoaded', () => {
  const languageSelectors = document.querySelectorAll('.language-select');

  function synchronizeSelectors(selectedLanguage) {
    languageSelectors.forEach(selector => {
      selector.value = selectedLanguage;
    });
  }

  languageSelectors.forEach(selector => {
    selector.addEventListener('change', (event) => {
      const language = event.target.value;
      synchronizeSelectors(language);
      loadTranslations(language);
    });
  });

  loadTranslations('en');
});

function loadTranslations(language) {
  fetch(`translations/${language}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });

      // Section: PROFILE
      document.querySelector('.tile-info-popup').textContent = translations['tile_info'];
      document.querySelector('.title.typewriter').textContent = translations['hello'];
      document.querySelector('.section__text__p2').textContent = translations['developer_designer'];
      document.querySelector('.btn-container .btn-color-2').textContent = translations['download_cv'];
      document.querySelector('.btn-container .btn-color-1').textContent = translations['contact_me'];
      // Section: ABOUT
      document.querySelector('#about .section__text__p1').textContent = translations['get_to_know'];
      document.querySelector('#about .title').textContent = translations['about_me'];
      document.querySelector('.about-text-p').textContent = translations['about_me_text'];
      // Section: SKILLS
      document.querySelector('#skills .section__text__p1').textContent = translations['glimpse'];
      document.querySelector('#skills .title').textContent = translations['skills_toolkits'];
      // Section: PROJECTS
      document.querySelector('#projects .section__text__p1').textContent = translations['browse_recent'];
      document.querySelector('#projects .title').textContent = translations['projects'];
      document.querySelector('#project1-description').textContent = translations['project1_description'];
      document.querySelector('#project2-description').textContent = translations['project2_description'];
      document.querySelector('#project3-description').textContent = translations['project3_description'];
      // Section: CONTACT
      document.querySelector('#contact .section__text__p1').textContent = translations['feel_free'];
      document.querySelector('#contact .title').textContent = translations['say_hello'];
      
    })
    .catch(error => console.error('Error loading translations:', error));
}


