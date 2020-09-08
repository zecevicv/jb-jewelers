window.addEventListener('load', () => {
  /* #Footer
  ======================================================= */
  const footerNavs = document.querySelectorAll('.footer-nav-links');
  footerNavs.forEach((item) => {
    item.addEventListener('click', (e) => {
      const footerNav = e.currentTarget;
      if (e.target.closest('.title') && window.innerWidth < 1024) {
        footerNav.classList.toggle('show');
      }
    });
  });
});