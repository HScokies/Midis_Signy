function DDabout() {
    document.getElementById("DD_About").classList.toggle("show");
    if (document.querySelector("#arrow_about").style.transform == 'rotate(180deg)'){
        document.querySelector("#arrow_about").style.transform = 'none';
    }
    else{
        document.querySelector("#arrow_about").style.transform = 'rotate(180deg)';
    }
  }
  
  ////////////////////////////////////////////////////////////
  function DDlang() {
    document.getElementById("DD_Lang").classList.toggle("show");
    if (document.querySelector("#arrow_Lang").style.transform == 'rotate(180deg)'){
        document.querySelector("#arrow_Lang").style.transform = 'none';
    }
    else{
        document.querySelector("#arrow_Lang").style.transform = 'rotate(180deg)';
    }
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.Lang_dropbtn')) {
      var dropdowns = document.getElementsByClassName("DD_Lang-items");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          document.querySelector("#arrow_Lang").style.transform = 'none';
        }
      }
    }
    if (!event.target.matches('.About_dropbtn')) {
        var dropdowns = document.getElementsByClassName("DD_About-items");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            document.querySelector("#arrow_about").style.transform = 'none';
          }
        }
      }
  }