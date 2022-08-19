togglerMenu = document.querySelector('.mobile-nav-toggle');
nav = document.querySelector('#nav');
overlay = document.querySelector(".overlay");

togglerMenu.addEventListener("click", (e) => {
    visibility = nav.getAttribute('data-visible')

    if(visibility === "false"){
        nav.setAttribute('data-visible', true)
        overlay.setAttribute('data-visible', true)
        togglerMenu.setAttribute('aria-expanded', true)
    }else{
        nav.setAttribute('data-visible', false)
        overlay.setAttribute('data-visible', false)
        togglerMenu.setAttribute('aria-expanded', false)
    }
});

// DROPDOWN
features = document.querySelector('#features');
dropdownItems = document.querySelector('.dropdown-items');
featuresDropIcon = document.querySelector('#features-drop-icon');

features.addEventListener("click", (e) => {
    visibility = dropdownItems.getAttribute('data-visible')

    if(visibility === "false"){
        dropdownItems.setAttribute('data-visible', true)
        featuresDropIcon.setAttribute('data-active', true)
    }else{
        dropdownItems.setAttribute('data-visible', false)
        featuresDropIcon.setAttribute('data-active', false)
    }
});