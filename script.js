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


  document.querySelectorAll('.hover-target').forEach(element => {
    element.addEventListener('click', () => {
        const popup = element.nextElementSibling;
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    });
});


document.querySelectorAll('.project-img').forEach(image => {
  image.addEventListener('click', () => {
      const overlay = image.nextElementSibling;
      overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
  });
});