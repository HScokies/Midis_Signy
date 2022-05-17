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

  function email(){
    var EmailInfo =document.getElementsByTagName('input')[0]
    if (EmailInfo.classList.contains('valid') && EmailInfo.value.includes('@')){
        var Text = document.getElementById("Msg");
        Text.innerText = `На адресс ${EmailInfo.value} теперь будут приходить самые важные новости`;
        setTimeout(hider, 750)

    }
    else{
        Checker();
    }
}

function Checker(){
    var input = document.getElementsByTagName('input')[0];
    var err = document.getElementById("invalid_err");
    var inputbox = document.getElementById('input');
    if (input.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==null) { // не email
        inputbox.classList.add('invalid');
        err.innerText = "Введите корректный email";
    }
    else{
        inputbox.classList.add('valid');
    }
}

function Focus(){
    var input = document.getElementsByTagName('input')[0];
    var err = document.getElementById("invalid_err");
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
      err.innerText = " ";
    }
    if (input.classList.contains('valid')){
        input.classList.remove('valid');
    }
}

function hider(){
    document.getElementById('Div1').style.display = 'none';
    document.getElementById('Div2').style.display = 'block';
}