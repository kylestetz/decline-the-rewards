(function() {
  var Decision = require('./decision.js');
  var config = require('../config/game.js');
  var api = {};

  var decisions = {};

  api.choose = function (accept, mainIndex, sideIndex) {
    if (accept) {
      if (sideIndex == 0 && typeof config.paths[mainIndex + 1] != 'undefined') {
        addMainDecision(mainIndex + 1);
      }
      if (typeof config.paths[mainIndex].items[sideIndex + 1] != 'undefined') {
        addSideDecision(mainIndex, sideIndex + 1);
      }
    } else {
      // maybe some alternative logic for decline
    }
  }

  function addMainDecision(mainIndex) {
    decisions[mainIndex] = [];
    var item = config.paths[mainIndex].items[0];

    var decision = new Decision({
      prompt: item.prompt,
      image: item.image,
      callback: function(accept) {
        api.choose(accept, mainIndex, 0);
      }
    });
    decisions[mainIndex].push(decision);

    decision.showPrompt();
    console.log(decision.promptText);
  }

  function addSideDecision(mainIndex, sideIndex) {
    var item = config.paths[mainIndex].items[sideIndex];

    var decision = new Decision({
      prompt: item.prompt,
      image: item.image,
      position: decisions[mainIndex][0].getPosition(),
      callback: function(accept) {
        api.choose(accept, mainIndex, sideIndex);
      }
    });

    decisions[mainIndex].push(decision);

    setTimeout(decision.showPrompt, getRandomInt(1000,10000));
    console.log(decision.promptText);
  }

  // start first decision
  addMainDecision(0);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.declineTheApi = api;
})()
