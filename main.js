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
company = document.querySelector('#company');
featuresDropdownItems = document.querySelector('.features-dropdown-items');
companyDropdownItems = document.querySelector('.company-dropdown-items');
featuresDropIcon = document.querySelector('#features-drop-icon');
companyDropIcon = document.querySelector('#company-drop-icon');

features.addEventListener("click", (e) => {
    visibility = featuresDropdownItems.getAttribute('data-visible')

    if(visibility === "false"){
        featuresDropdownItems.setAttribute('data-visible', true)
        featuresDropIcon.setAttribute('data-active', true)
    }else{
        featuresDropdownItems.setAttribute('data-visible', false)
        featuresDropIcon.setAttribute('data-active', false)
    }
});
company.addEventListener("click", (e) => {
    visibility = companyDropdownItems.getAttribute('data-visible')

    if(visibility === "false"){
        companyDropdownItems.setAttribute('data-visible', true)
        companyDropIcon.setAttribute('data-active', true)
    }else{
        companyDropdownItems.setAttribute('data-visible', false)
        companyDropIcon.setAttribute('data-active', false)
        
    }
});