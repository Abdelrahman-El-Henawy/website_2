const allimgs = Array.from(document.querySelectorAll(".home__slider .img"));
let arrowLeft = document.querySelector(".fa-arrow-left");
let arrowRight = document.querySelector(".fa-arrow-right");
let indicators = document.querySelectorAll(".indicators span");
let currentSlideNumber = 1;

window.onload = () => {
  checker();
};

function checker() {
  removeActive();
  allimgs[currentSlideNumber - 1].classList.add("active-img");
  indicators[currentSlideNumber - 1].classList.add("active-span");
}

function removeActive() {
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function () {
      currentSlideNumber = Number(this.getAttribute("data-index"));
      checker();
    });
  }

  allimgs.forEach((img) => {
    img.classList.remove("active-img");
  });
  indicators.forEach((span) => {
    span.classList.remove("active-span");
  });
  if (currentSlideNumber == allimgs.length) {
    arrowRight.classList.add("disabled");
  } else {
    arrowRight.classList.remove("disabled");
  }
  if (currentSlideNumber == 1) {
    arrowLeft.classList.add("disabled");
  } else {
    arrowLeft.classList.remove("disabled");
  }
}

arrowRight.addEventListener("click", getNextImg);
arrowLeft.addEventListener("click", getPrevImg);

function getNextImg() {
  if (arrowRight.classList.contains("disabled")) {
    return false;
  } else {
    currentSlideNumber++;
    checker();
  }
}
function getPrevImg() {
  if (arrowLeft.classList.contains("disabled")) {
    return false;
  } else {
    currentSlideNumber--;
    checker();
  }
}

let picDiv = document.querySelectorAll(".portfolio__wrapper--picDiv");
let btns = document.querySelectorAll(".portfolio__buttons .btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    picDiv.forEach((div) => {
      if (div.classList.contains(btn.id)) {
        btns.forEach((btn) => {
          btn.classList.remove("active-btn");
        });
        btn.classList.add("active-btn");
        div.style.display = "block";
        if (e.target.classList.contains("all")) {
          div.style.width = "25%";
        } else {
          div.style.width = "50%";
        }
      } else {
        div.style.display = "none";
      }
    });
  });
});

let divs = document.querySelectorAll(".div__testimonial--content");
let bullets = document.querySelectorAll("#bullets span");
bullets.forEach((span) => {
  span.addEventListener("click", (e) => {
    divs.forEach((div) => {
      if (div.id == span.getAttribute("data-bullet")) {
        bullets.forEach((span) => {
          span.classList.remove("active-span");
        });
        span.classList.add("active-span");
        div.classList.add("show");
        div.classList.remove("hidden");
      } else {
        div.classList.remove("show");
        div.classList.add("hidden");
      }
    });
  });
});

let input = document.querySelectorAll(".inputBox input");
let labelName = document.getElementById("labelName");
let labelEmail = document.getElementById("labelEmail");
input.forEach((input) => {
  input.addEventListener("focus", function () {
    if (input.id === "inputName") {
      labelName.style.top = "-20px";
      labelEmail.style.top = "0";
    } else if (input.id === "inputEmail") {
      labelEmail.style.top = "-20px";
      labelName.style.top = "0";
    }
  });
  input.addEventListener("blur", function () {
    labelEmail.style.top = "0";
    labelName.style.top = "0";
  });
});
let navbar = document.getElementById("navbar")
let scroll_to_top_button = document.getElementById("scroll_to_top_button");
let videoBtn = document.querySelector(".video__link");
videoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.youtube.com", "_blank", "width=800,height=800");
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    scroll_to_top_button.style.opacity = "1";
  } else {
    scroll_to_top_button.style.opacity = "0";
  }
});
scroll_to_top_button.addEventListener("click", () => {
  window.scrollTo({
    top: "0",
    behavior: "smooth",
  });
});

window.addEventListener("scroll",function(){
  if(window.scrollY >= this.document.documentElement.clientHeight){
    navbar.style.backgroundColor = "#000"
    navbar.style.transition = "0.5s all ease-in-out"
  }
  else{
    navbar.style.backgroundColor = "transparent"
  }
})
