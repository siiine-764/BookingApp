const particlesJSON = {};

// ParticlesJS Config. I added particles js as a background
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 700
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// Init LET & CONST

const Deck = document.getElementById('deck'),
  Cards = document.getElementsByClassName('card'),
  matchedCoupleDisplay = document.getElementById('matchedCoupleDisplay'),
  movesNumberDisplay = document.getElementById('movesNumberDisplay'),
  restartBtn = document.getElementById('restartButton'),
  currentTable = document.getElementById('current-table'),
  currentCnt = document.getElementById('current-container');

let openCardsHC = document.getElementsByClassName('open show'),
  toBeReflippedHC = document.getElementsByClassName('toBeReflipped'),
  matchCardsHC = document.getElementsByClassName('match'),
  movesNumber = 0,
  matchedCouplesNumber = 0,
  starRating = 3,
  matchNumber = 1,
  startBtn = document.getElementById('start-button');

startBtn.addEventListener('click', startGame);

function startGame() {
  let start = document.getElementById('start');
  start.setAttribute('style', 'margin-top: -100vh; transition: margin-top 1s;');
  //TIMER
  let sec = 0;
  function myInterval() {
    sec++;
    document.getElementById('secondsElapsed').textContent = sec;
  }
  let timer = setInterval(myInterval, 1000);

  //Call function to shuffle cards and create HTML to display the cards
  function newGame() {
    let cardsList = Array.prototype.slice.call(Cards);
    cardsList = shuffle(cardsList);
    for (var i = 0; i < cardsList.length; i++) {
      Deck.appendChild(cardsList[i]);
      //cardsList[i].setAttribute("id", i);
    }
    let lowScore = localStorage.getItem('low-score');
    if (lowScore) {
      document.getElementById('best-score').innerText = lowScore;
    }
  }
  newGame();

  //Calls newGame function, reset timer, reset open/shown/matched cards, reset move number and matched cards number, reset star rating.
  function restartGame() {
    newGame();
    Deck.classList.add('shake-to-shuffle');

    clearInterval(timer);
    sec = 0;
    document.getElementById('secondsElapsed').textContent = sec;
    timer = setInterval(myInterval, 1000);

    if (matchCardsHC.length > 0 || openCardsHC.length > 0) {
      resetCards();
    }
    if (movesNumber !== 0) {
      movesNumber = 0;
      movesNumberDisplay.textContent = movesNumber;
    }
    if (matchedCouplesNumber !== 0) {
      matchedCouplesNumber = 0;
      matchedCoupleDisplay.textContent = matchedCouplesNumber;
    }

    starRating = 3;
    const ALL_STARS_HC = document.getElementsByClassName('star');
    const ALL_STARS_ARRAY = Array.prototype.slice.call(ALL_STARS_HC);
    ALL_STARS_ARRAY.forEach(function(star) {
      star.className = 'fa fa-star star';
    });

    matchNumber++;
  }

  // Shuffle function is from http://stackoverflow.com/a/2450976
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //Flip cards, store open/shown cards images in an array, runmatching cards function, and prevent more than 2 cards from being flipped.
  function flipCard(evt) {
    let flippedCard = evt.target;
    if (flippedCard.nodeName === 'LI') {
      if (
        !flippedCard.classList.contains('match') &&
        !flippedCard.classList.contains('open')
      ) {
        flippedCard.classList.add('open', 'show');
      }
    }
    let openCardsArray = Array.prototype.slice.call(openCardsHC);
    if (openCardsArray.length === 2) {
      checkIfMatching();
    }
    if (openCardsArray.length > 2) {
      flipOpenCards();
    }
  }

  // When 2 cards are open/shown, if their content match, assign class match, call the function to unassign open/shown classes, add +1 matching couple found, call the function to increment move by one, and check if the game is over. If they don't match, assign a temporary class to identify which cards need to be closed in case more than 2 cards were flipped, and call the function to close those 2 cards. In any case, the move number is incremented by one, and the number of the moves is checked to adjust rating and to determine if the game is over by max moves number reached

  function checkIfMatching() {
    let openCardsArray = Array.prototype.slice.call(openCardsHC);
    if (openCardsArray[0].classList[1] === openCardsArray[1].classList[1]) {
      openCardsArray.forEach(function(card) {
        card.classList.add('match');
      });
      handleMatchedCards();
      incrementMatchedCouples();
      setTimeout(checkIfGameOver, 1200);
    } else {
      openCardsArray.forEach(function(card) {
        card.classList.add('toBeReflipped');
      });
      setTimeout(flipOpenCards, 1200);
    }
    incrementMovesNumber();
    setTimeout(checkMovesNumber, 1200);
  }

  //close the 2 cards confronted and any other open card, preventing there to be more than 1 open card besides the matched ones

  function flipOpenCards() {
    let toBeReflipped = Array.prototype.slice.call(toBeReflippedHC);
    toBeReflipped.forEach(function(card) {
      card.classList.remove('open', 'show', 'toBeReflipped');
    });
    let openCardsArray = Array.prototype.slice.call(openCardsHC);
    if (openCardsArray.length > 1) {
      openCardsArray.forEach(function(card) {
        card.classList.remove('open', 'show');
      });
    }
  }

  //remove open/show class to the matched couple
  function handleMatchedCards() {
    let matchCardsArray = Array.prototype.slice.call(matchCardsHC);
    matchCardsArray.forEach(function(card) {
      card.classList.remove('open', 'show');
    });
  }

  //remove open/show/match class to all matched cards.
  function resetCards() {
    let openCardsArray = Array.prototype.slice.call(openCardsHC);
    openCardsArray.forEach(function(card) {
      card.classList.remove('open', 'show');
    });
    let matchCardsArray = Array.prototype.slice.call(matchCardsHC);
    matchCardsArray.forEach(function(card) {
      card.classList.remove('match');
    });
  }

  //Increment moves number and display it
  function incrementMovesNumber() {
    movesNumber++;
    movesNumberDisplay.textContent = movesNumber;
  }

  //Increment matched couple number and display it
  function incrementMatchedCouples() {
    matchedCouplesNumber++;
    matchedCoupleDisplay.textContent = matchedCouplesNumber;
  }

  
  //Short function that removes the shuffle class from deck, so that it can be reapplied the next time the restart button is clicked
  function removeDeckShuffleClass() {
    Deck.classList.remove('shake-to-shuffle');
  }


  //EVENT LISTENERS
  Deck.addEventListener('click', flipCard);
  restartBtn.addEventListener('click', restartGame);

  restartBtn.addEventListener('mouseover', removeDeckShuffleClass);
}

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
