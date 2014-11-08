
module.exports = function(config) {
  var self = this;

  var $object = $('#' + config.name);

  self.show = function() {
    // plop it in game land
    $('.game').append($object);
    // make it draggable, contain it to the window
    $object.draggable({
      containment: $('.game')
    });
  };
};