window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    console.log(scrolled);
    if(scrolled>1)
    {
      document.getElementById("navbar").style.backgroundColor="rgb(233, 230, 230)";
    }
    if(scrolled==0)
    {
      document.getElementById("navbar").style.backgroundColor="transparent";
    }
    
  });