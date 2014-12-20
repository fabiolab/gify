gify.directive('filelistBind', function() {
  return function( scope, elm, attrs ) {
    elm.bind('change', function( evt ) {
      scope.$apply(function() {
        scope[ attrs.name ] = evt.target.files;
        console.log( scope[ attrs.name ] );
      });
    });
  };
});