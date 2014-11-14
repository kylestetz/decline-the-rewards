
function Decision(data) {
  var self = this;

  self.promptText = data.prompt;
  self.image = data.image;

  self.$el = null;
  self.onTheBoard = false;
  self.position = data.position || { x: window.innerWidth/2, y: window.innerHeight/2 };

  self.callback = data.callback;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  self.showPrompt = function(position) {
    // are we in the DOM already?
    if(self.onTheBoard) {
      self.$el.toggleClass('hide-prompt', false);
      // reposition draggable?
    }
  };

  self.getPosition = function() {
    if(self.onTheBoard) {
      // return draggable's position.
      return {x: self.$el.position().left, y: self.$el.position().top};
    }
  };

  self.getChildPosition = function() {
    if(self.onTheBoard) {
      var dx = 0;
      var dy = 0;
      var rng = getRandomInt(-1 * (self.$el.innerHeight() + self.$el.innerWidth()), self.$el.innerHeight() + self.$el.innerWidth());
      var sign = rng > 0 ? 1 : rng == 0 ? 0 : -1; 
      if (Math.abs(rng) > 180) {
        dx = sign * 180;
        dy = getRandomInt(-1 * self.$el.innerHeight(), self.$el.innerHeight());
      } else {
        dy = sign * 180;
        dx = getRandomInt(-1 * self.$el.innerWidth(), self.$el.innerWidth());
      }
      return { x: self.$el.position().left + dx, y: self.$el.position().top + dy };
    }
  }

  self.createDOMElement = function() {
    // create the template
    self.$el = $( template(self) );
    // add the prompt to the game board
    $game.append(self.$el);
    // make it draggable
    self.$el.draggable({
      containment: $game
    });
    // position it
    self.$el.css({ left: self.position.x, top: self.position.y });

    self.$el.on('click', '[data-accept]', function(e) {
      console.log('i was accepted');
      self.$el.toggleClass('hide-prompt', true);
      self.callback(true);
    });

    self.$el.on('click', '[data-decline]', function(e) {
      console.log('i was declined');
      self.$el.hide();
      self.callback(false);
    });
  };

  self.createDOMElement();
  self.onTheBoard = true;
}

var $game = $('.game');
var template = _.template( $('#prompt-template').html() );

module.exports = Decision;
window.Decision = Decision;