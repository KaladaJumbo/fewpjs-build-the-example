// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const ERROR_BANNER = document.getElementById("modal")
ERROR_BANNER.classList.add("hidden")

document.addEventListener("DOMContentLoaded", () => {
  heartListener()
})

function heartListener() {
  let likebuttons = document.querySelectorAll(".like-glyph")

  for(const heart of likebuttons){
    heart.addEventListener("click", () => {
      if(heart.innerText === EMPTY_HEART){
        mimicServerCall()
        .then(data => {
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart");
          console.log(data);
        })
        .catch(error => {
          ERROR_BANNER.innerText = error
          if (ERROR_BANNER.classList.contains("hidden")){
            ERROR_BANNER.classList.remove("hidden")
            setTimeout(() => {hideMe()}, 5000);
          }
        })
        
      }
      else {
        heart.innerText = EMPTY_HEART
        heart.classList.remove("activated-heart")
        }
    })
  }

}

function hideMe() {
  ERROR_BANNER.classList.add("hidden")
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

