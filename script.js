window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
  
    const gradientColor = `linear-gradient(to right,rgba(238,174,202,1), rgba(148,187,233,1)) ${scrollPercentage}%`;
  
    document.body.style.background = gradientColor;
  });
  

  