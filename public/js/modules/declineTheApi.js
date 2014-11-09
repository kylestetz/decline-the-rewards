(function() {
  var Decision = require('./decision.js');
  var config = require('../config/game.js');
  var api = {};

  var decisions = {};
  var prompted = {};
  var incessantMin = 5000;
  var incessantMax = 25000;

  api.choose = function (accept, mainIndex, sideIndex, incessant) {
    if (accept) {
      if (sideIndex == 0 && !isUndefined(config.paths[mainIndex + 1])) {
        addDecision(mainIndex + 1, 0);
      }
      if (!isUndefined(config.paths[mainIndex].items[sideIndex + 1])) {
        addDecision(mainIndex, sideIndex + 1);
      }
      if (!isUndefined(decisions[mainIndex][sideIndex]) && (config.paths[mainIndex].items[sideIndex].incessant)) {
        decisions[mainIndex][sideIndex].callback = function() {setTimeout(decisions[mainIndex][sideIndex].showPrompt, getRandomInt(incessantMin,incessantMax))};
        setTimeout(decisions[mainIndex][sideIndex].showPrompt, getRandomInt(incessantMin,incessantMax));
      }

    } else {
      // maybe some alternative logic for decline
    }
  }

  function addDecision(mainIndex, sideIndex) {
    if (isUndefined(decisions[mainIndex])) {
      decisions[mainIndex] = [];
    }
    var cfgItem = config.paths[mainIndex].items[sideIndex];

    var decisionOpts = {
      prompt: cfgItem.prompt,
      image: cfgItem.image,
      callback: function(accept) {
        api.choose(accept, mainIndex, sideIndex);
      }
    }

    if (sideIndex != 0) {
      decisionOpts.position = decisions[mainIndex][0].getPosition();
    }

    var decision = new Decision(decisionOpts); 
    decisions[mainIndex].push(decision);

    decision.showPrompt();
  }

  // start first decision
  addDecision(0, 0);

  function isUndefined(arg) {
    if (typeof arg == 'undefined') {
      return true;
    } else {
      return false;
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.declineTheApi = api;
})()
