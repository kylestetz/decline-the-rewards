(function() {
  var Decision = require('./decision.js');
  var config = require('../config/game.js');

  // associative array where decision objects are stored
  var decisions = {};
  // wait time variables for rng
  var incessantMin = 5000;
  var incessantMax = 25000;
  var normalMin = 2000;
  var normalMax = 5000;

  function choose (accept, mainIndex, sideIndex) {
    if (accept) {
      if (sideIndex == 0 && !isUndefined(config.paths[mainIndex + 1])) {
        // if this is a new main path decision, add the next main decision in the path
        addDecision(mainIndex + 1, 0);
      }
      if (!isUndefined(config.paths[mainIndex].items[sideIndex + 1])) {
        // if this is a new decision, add the next side decision in the path
        addDecision(mainIndex, sideIndex + 1);
      }
      // incessant choices come here. could be cleaned up
      if (!isUndefined(decisions[mainIndex][sideIndex]) && (config.paths[mainIndex].items[sideIndex].incessant)) {
        decisions[mainIndex][sideIndex].callback = function() {
          setTimeout(decisions[mainIndex][sideIndex].showPrompt, getRandomInt(incessantMin,incessantMax))
        };
        decisions[mainIndex][sideIndex].callback();
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
        choose(accept, mainIndex, sideIndex);
      }
    }

    if (sideIndex != 0) {
      // if it is a decision down a side path, it should be placed in relation to the first decision in side path
      decisionOpts.position = decisions[mainIndex][0].getChildPosition();
    }


    var decision = new Decision(decisionOpts); 
    decisions[mainIndex].push(decision);

    setTimeout(decision.showItem, getRandomInt(normalMin,normalMax));
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
})()
