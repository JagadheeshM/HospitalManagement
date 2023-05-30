
window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".navbar a");
  
    var currentSection = "";
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop - 150; // Adjust the offset if needed
      var sectionHeight = section.clientHeight;
      var sectionId = section.getAttribute("id");
  
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = sectionId;
      }
    });
  
    navLinks.forEach(function(link) {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });

