window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    if (scrollPosition > 300) { // adjust the value as needed
      document.getElementById('back-to-top-btn').style.display = 'block';
    } else {
      document.getElementById('back-to-top-btn').style.display = 'none';
    }
  });
  
  document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // smooth scroll to top
  });
  