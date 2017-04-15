function EditableContentController($scope, $element) {
  var ctrl = this;

  ctrl.onChange = function(changed) {
    if(ctrl.saveCtrl) {
      ctrl.saveCtrl.isSaved = !changed;
    }
  };
  
  ctrl.save = function() {
    for (var i = 0; i < ctrl.formCtrl.fieldTempContent.length; i++) {
      if(ctrl.formCtrl.fieldTempContent[i]) {
        ctrl.update(ctrl.formCtrl.fields[i], ctrl.formCtrl.fieldTempContent[i]);
        ctrl.formCtrl.fieldTempContent[i] = false;
      }
    }
  };
  
  ctrl.update = function(field, content) {
    field.content = content;
    $scope.onUpdate({field: field});
  };
  
  ctrl.$onInit = function() {

  };

}

angular.
  module('editableContent').
  directive('editableContent', function() {
    return {
      restrict: 'A',
      controller: EditableContentController,
      scope: {
        onUpdate: '&'
      }
    };
  });