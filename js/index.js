const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
console.log(logo);
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const headerNavByQueryAll = document.querySelectorAll("nav a");

console.log(headerNavByQueryAll);
headerNavByQueryAll[0].textContent = siteContent.nav["nav-item-1"];
headerNavByQueryAll[1].textContent = siteContent.nav["nav-item-2"];
headerNavByQueryAll[2].textContent = siteContent.nav["nav-item-3"];
headerNavByQueryAll[3].textContent = siteContent.nav["nav-item-4"];
headerNavByQueryAll[4].textContent = siteContent.nav["nav-item-5"];
headerNavByQueryAll[5].textContent = siteContent.nav["nav-item-6"];

const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent.cta["h1"];
console.log(ctaText);

let ctaImg = document.getElementById("cta-img");
console.log(ctaImg);
const ctaButton = document.querySelector(".cta-text button");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
ctaButton.textContent = siteContent.cta["button"];



const mainContent = Array.from(document.querySelectorAll(".text-content"));
mainContent[0].querySelector("h4").textContent =  siteContent["main-content"]["features-h4"];
mainContent[0].querySelector("p").textContent =  siteContent["main-content"]["features-content"];
mainContent[1].querySelector("h4").textContent =  siteContent["main-content"]["about-h4"];
mainContent[1].querySelector("p").textContent =  siteContent["main-content"]["about-content"];


let middleImg = document.getElementsByClassName("middle-img");
console.log(middleImg);
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);



const middleContent = Array.from(document.querySelectorAll("text-content"));
mainContent[0].querySelector("p").textContent =  siteContent["main-content"]["services-h4"];
mainContent[0].querySelector("h4").textContent =  siteContent["main-content"]["servicess-content"];
mainContent[1].querySelector("p").textContent =  siteContent["main-content"]["product-h4"];
mainContent[1].querySelector("h4").textContent =  siteContent["main-content"]["product-content"];
mainContent[2].querySelector("p").textContent =  siteContent["main-content"]["vision-h4"];
mainContent[2].querySelector("h4").textContent =  siteContent["main-content"]["vision-content"];

const bottomContact = document.querySelectorAll("text-content")

