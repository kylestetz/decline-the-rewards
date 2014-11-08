
function Decision(data) {
  var self = this;

  self.promptText = data.prompt;
  self.image = data.image;

  self.onTheBoard = false;

  self.showPrompt = function(position) {
    // are we in the DOM already?
    if(self.onTheBoard) {

    }
  };

  self.getPosition = function() {
    if(self.onTheBoard) {
      // return draggable's position.
    }
  };
}

module.exports = Decision;