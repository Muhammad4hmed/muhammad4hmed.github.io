// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Move the navigation section along with the cursor
const navList = document.getElementById('nav-list');
document.addEventListener('mousemove', function (e) {
  const mouseX = e.clientX;
  const navListRect = navList.getBoundingClientRect();
  const navItemWidth = navListRect.width / navList.children.length;

  const activeIndex = Math.floor(mouseX / navItemWidth);

  const activeLink = navList.querySelector('.active');
  if (activeLink) {
    activeLink.classList.remove('active');
  }

  const activeNavItem = navList.children[activeIndex].querySelector('a');
  activeNavItem.classList.add('active');

  const navSection = document.getElementById(activeNavItem.getAttribute('href').substring(1));
  const navSectionRect = navSection.getBoundingClientRect();

  const navSectionLeft = navSectionRect.left - navListRect.left;
  const navSectionWidth = navSectionRect.width;
  const navSectionCenter = navSectionLeft + navSectionWidth / 2;

  navList.style.setProperty('--nav-section-left', `${navSectionLeft}px`);
  navList.style.setProperty('--nav-section-width', `${navSectionWidth}px`);
  navList.style.setProperty('--nav-section-center', `${navSectionCenter}px`);
});
