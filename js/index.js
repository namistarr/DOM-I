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


const nav1 = document.getElementsByTagName("a")[1].innerHTML=`${siteContent.nav["nav-item-1"]}`;
const nav2 = document.getElementsByTagName("a")[2].innerHTML=`${siteContent.nav["nav-item-2"]}`;
const nav3 = document.getElementsByTagName("a")[3].innerHTML=`${siteContent.nav["nav-item-3"]}`;
const nav4 = document.getElementsByTagName("a")[4].innerHTML=`${siteContent.nav["nav-item-4"]}`;
const nav5 = document.getElementsByTagName("a")[5].innerHTML=`${siteContent.nav["nav-item-5"]}`;
const nav6 = document.getElementsByTagName("a")[5].innerHTML=`${siteContent.nav["nav-item-6"]}`;

const newNav1 = document.getElementsByTagName("nav")[0]
let newLink = document.createElement("a")
newLink.textContent="JS Hurts"
newNav1.appendChild(newLink);

const newNav2 = document.getElementsByTagName("nav")[0]
let anotherNewLink = document.createElement("a")
anotherNewLink.textContent="Ouch"
newNav2.prepend(anotherNewLink);

const nav1Green = document.getElementsByTagName("a")[0].style.color="green"
const nav2Green = document.getElementsByTagName("a")[1].style.color="green"
const nav3Green = document.getElementsByTagName("a")[2].style.color="green"
const nav4Green = document.getElementsByTagName("a")[3].style.color="green"
const na5Green = document.getElementsByTagName("a")[4].style.color="green"
const nav6Green = document.getElementsByTagName("a")[5].style.color="green"
const nav7Green = document.getElementsByTagName("a")[6].style.color="green"
const nav8Green = document.getElementsByTagName("a")[7].style.color="green"

//const mainHeader = document.querySelector("h1");
const mainHeader= document.getElementsByTagName("h1")[0].innerHTML=`DOM<br> IS<br> AWESOME`;
const headerButton = document.querySelector("button");
const headerImg = document.getElementById("cta-img");
const h4 = document.querySelectorAll("h4");
const paragraphs = document.querySelectorAll("p")
const middleImg = document.getElementById("middle-img");


mainHeader.textContent = siteContent["cta"]["h1"];

headerImg.setAttribute("src", siteContent["cta"]["img-src"]);
headerButton.textContent = siteContent["cta"]["button"];

h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

h4[5].textContent = siteContent["contact"]["contact-h4"];
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];

paragraphs[8].textContent = siteContent["footer"]["copyright"];