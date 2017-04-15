function TinyMCEController($scope, $element, $attrs, $transclude) {
  var ctrl = this;

  $scope.$watch('editMode', function() {
    ctrl.handleModeChange(); 
  });
  
  ctrl.handleModeChange = function() {
    ctrl.editMode = $scope.editMode;
    if (!$scope.editMode) {
    	$scope.onUpdate({content: ctrl.tinymceModel});
    }
  };
  
  ctrl.$onInit = function() {
    if(!$scope.parentOptions) {
    	ctrl.tinymceOptions = {
        plugins: 'link image code lists advlist',
        menubar: false,
        toolbar: 'undo redo styleselect removeformat bullist numlist link unlink image code',
        elementpath: false,
        statusbar: false
      };
    } else {
      ctrl.tinymceOptions = $scope.parentOptions;
    }
    
    ctrl.tinymceOptions.setup = function(editor) {
      editor.on("Change", function(e) {
        $scope.onChange({event: e});
      });
      editor.on("Undo", function(e) {
        $scope.onChange({event: e});
      });
      editor.on("Redo", function(e) {
        $scope.onChange({event: e});
      });
    };
    
    ctrl.tinymceModel = $scope.initialContent;
  };
}

angular.module('tinymce').directive('tinymce', function() {
  return {
	transclude: true,
	templateUrl: 'js/axelwales/angular/editable/tinymce.template.html',
	controller: TinyMCEController,
	controllerAs: 'ctrl',
  	scope: {
  	  initialContent: '=tinymceContent',
  	  parentOptions: '=tinymceOptions',
  	  editMode: '=',
  	  onUpdate: '&',
  	  onChange: '&'
  	}
  }
  
});