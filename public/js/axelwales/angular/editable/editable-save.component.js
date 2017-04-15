function EditableSaveController() {
  var ctrl = this;
  
  ctrl.isSaved = true;
 
  ctrl.save = function() {
    if(!ctrl.isSaved) {
      ctrl.isSaved = true;
      ctrl.contentCtrl.save();
    }
  };
  
  ctrl.$onInit = function() {
    ctrl.contentCtrl.saveCtrl = ctrl;
  };

}

angular.
  module('editableSave').
  component('editableSave', {
    templateUrl:'js/axelwales/angular/editable/editable-save.template.html',
    require: {
      contentCtrl: '^editableContent'
    },
    controller: EditableSaveController
  });