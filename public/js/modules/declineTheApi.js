
var Reward = require('./reward.js');
var config = require('../config/game.js');
var api = {};

var paths = [];
var acceptedPaths = [];
var mainPos = 0;

// slurp the config
for (var i in config.paths) {
  var path = config.paths[i];

  var incessant = [];
  var sequential = [];

  for (var j in path.items) {
    var item = path.items[j];

    var decision = {
      prompt: item.prompt,
      reward: new Reward(item)
    };

    item.incessant ? incessant.push(decision) : sequential.push(decision);
  }

  paths.push({
    name: path.pathName,
    pos: 0,
    sequential: sequential,
    incessant: incessant
  });
}

console.log(JSON.stringify(paths));

api.choose = function (accept, mainIndex, sideIndex) {
  if (accept) {
    // give reward
  } else {
    // maybe some alternative logic
  }

  // if main choice, increment main path position
  if (sideIndex == 0) {
    mainPos++;
  }

  // refresh side paths

}

api.getMain = function () {
  return path[mainPos][0];
}

window.declineTheApi = api;
