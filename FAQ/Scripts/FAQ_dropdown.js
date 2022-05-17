window.onload = function func(){
    for (let li of DropdownFAQ.querySelectorAll('li')){
        if (li.children[0].classList.contains('DDfaqH')){
            let hider = li.children[0].parentNode.querySelector('ul');
            for (let elem of hider.children){
                elem.children[1].hidden = true;
            }
            hider.hidden = true;
        }
}
}
DropdownFAQ.onclick = function(event){
    if (event.target.tagName != 'DIV') return;
    let DropDownContainer = event.target.parentNode.querySelector('ul');;
    if (!DropDownContainer) return;

    DropDownContainer.hidden = !DropDownContainer.hidden;
    if (DropDownContainer.hidden){
        event.target.classList.add('DDhide');
        event.target.classList.remove('DDshow');
    }
    else{
        event.target.classList.add('DDshow');
        event.target.classList.remove('DDhide');
    }
}

