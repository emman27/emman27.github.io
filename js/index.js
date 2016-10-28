(function(){
  var getControlledElement = function(element){
    return $($(element).data('toggle'));
  }

  $('.control').on('scrollSpy:enter', function(){
    var open = getControlledElement(this);
    open.show('slide', 'slow');
  });

  // Never hide stuff. This gives smooth scrolling
  // $('.control').on('scrollSpy:exit', function(){
  //   var open = getControlledElement(this);
  //   open.hide('slide');
  // });

  $('.control').scrollSpy();

})();
