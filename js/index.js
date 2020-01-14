const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
const navigation = document.querySelectorAll('nav a');
navigation[0].textContent = siteContent.nav['nav-item-1'];
navigation[1].textContent = siteContent.nav['nav-item-2'];
navigation[2].textContent = siteContent.nav['nav-item-3'];
navigation[3].textContent = siteContent.nav['nav-item-4'];
navigation[4].textContent = siteContent.nav['nav-item-5'];
navigation[5].textContent = siteContent.nav['nav-item-6'];


navigation.forEach(element => {
  element.style.color = 'green';
});

// header
const headerH1 = document.querySelector('h1');
headerH1.textContent = siteContent.cta.h1;

const headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent.cta.button;

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent.cta["img-src"];

// main content area
const content = document.querySelectorAll('.text-content');

//features
const featuresH = content[0].querySelector('h4');
featuresH.textContent = siteContent["main-content"]["features-h4"];
const featuresP = content[0].querySelector('p');
featuresP.textContent = siteContent["main-content"]["features-content"];

//about
const aboutH = content[1].querySelector('h4');
aboutH.textContent = siteContent["main-content"]["about-h4"];
const aboutP = content[1].querySelector('p');
aboutP.textContent = siteContent["main-content"]["about-content"];

// the middle img
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// services
const servicesH = content[2].querySelector('h4');
servicesH.textContent = siteContent["main-content"]["services-h4"];
const servicesP = content[2].querySelector('p');
servicesP.textContent = siteContent["main-content"]["services-content"];

// product
const productH = content[3].querySelector('h4');
productH.textContent = siteContent["main-content"]["product-h4"];
const productP = content[3].querySelector('p');
productP.textContent = siteContent["main-content"]["product-content"];

// vision
const visionH = content[4].querySelector('h4');
visionH.textContent = siteContent["main-content"]["vision-h4"];
const visionP = content[4].querySelector('p');
visionP.textContent = siteContent["main-content"]["vision-content"];


// contact section
// const contact = document.querySelector('.contact');
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];

const contactAddress = document.querySelector('.contact p');
contactAddress.textContent = siteContent.contact.address;

const contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent.contact.phone;

const contactEmail = document.querySelector('.contact p:nth-child(4)');
contactEmail.textContent = siteContent.contact.email;


// footer
const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;


// task 3 - add 2 new elements using .appendChild()

const careers = document.createElement('a');
careers.textContent = 'Careers';
careers.style.color = 'green';
document.querySelector('nav').appendChild(careers);

const media = document.createElement('a');
media.textContent = 'Media';
media.style.color = 'green';
document.querySelector('nav').appendChild(media);