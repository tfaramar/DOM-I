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
    "h1": "DOM <br> Is <br> Awesome",
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

// Images
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Buttons
const ctaButton = document.querySelector(".cta-text button").innerHTML =
siteContent["cta"]["button"];

// Headers
const title = document.querySelector(".cta-text h1").innerHTML = siteContent["cta"]["h1"];

const headers = document.querySelectorAll("h4");
headers[0].textContent = siteContent["main-content"]["features-h4"]
headers[1].textContent = siteContent["main-content"]["about-h4"]
headers[2].textContent = siteContent["main-content"]["services-h4"]
headers[3].textContent = siteContent["main-content"]["product-h4"]
headers[4].textContent = siteContent["main-content"]["vision-h4"]
headers[5].textContent = siteContent["contact"]["contact-h4"]


// Navigation
const nav = document.querySelector("nav");

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => link.style.color = "green");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"]
navLinks[1].textContent = siteContent["nav"]["nav-item-2"]
navLinks[2].textContent = siteContent["nav"]["nav-item-3"]
navLinks[3].textContent = siteContent["nav"]["nav-item-4"]
navLinks[4].textContent = siteContent["nav"]["nav-item-5"]
navLinks[5].textContent = siteContent["nav"]["nav-item-6"]

const newLink1 = document.createElement("a");
newLink1.textContent = "Blog";
newLink1.style.color = "green";
nav.appendChild(newLink1);

const newLink2 = document.createElement("a");
newLink2.textContent = "Team";
newLink2.style.color = "green";
nav.prepend(newLink2);

//Paragraphs
const paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]
paragraphs[5].textContent = siteContent["contact"]["address"]
paragraphs[6].textContent = siteContent["contact"]["phone"]
paragraphs[7].textContent = siteContent["contact"]["email"]
paragraphs[8].textContent = siteContent["footer"]["copyright"]
