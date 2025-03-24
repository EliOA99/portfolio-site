const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.BLinks a:not(.dropdown-content a)').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})

