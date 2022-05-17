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

  function openAll(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}

(function(){
    ('.seo-list-link').click(function(){
        if( this.children().text() == 'Развернуть' ){
            this.prev().children().removeClass('hidden');
            this.children().text('Свернуть');
        }else{
            this.prev().find( $('p[data-hide]') ).addClass('hidden');
            this.prev().find( $('h2[data-hide]') ).addClass('hidden');
            this.children().text('Развернуть');
        }
        return false;
    });
});