/**
 * editable-content component
 * Creates a page section that contains fields and labels like a form
 * But is edited using a tinymce editor
 * 
 * @binding (string) header - a heading label for the form, default: Untitled
 * @binding (object) fields - an array of (string) label, (string) content, 
 * (optional) (object) options, and (optional) (object) tinymceOptions 
 * (see tinymce docs) for each field
 * @binding (function) onUpdate - parent callback when content is updated
 *
 */
function EditableFormController() {
  var ctrl = this;
  
  ctrl.editMode = false;
  
  ctrl.edit = function(field) {
    field.editMode = !field.editMode;
    document.activeElement.blur()
  };
  
  ctrl.onChange = function(field, event) {
    console.log(event);
    if(event.level) {
      ctrl.contentCtrl.onChange(true);
      ctrl.fieldTempContent[field.tempId] = event.level.content;
    }
  };
  
  ctrl.$onInit = function() {
    ctrl.contentCtrl.formCtrl = ctrl;
    ctrl.fieldTempContent = [];
    for (var i = 0; i < ctrl.fields.length; i++) {
      ctrl.fields[i].tempId = i;
      ctrl.fieldTempContent.push(false);
      ctrl.initField(ctrl.fields[i]);
    }
  };
  
  ctrl.initField = function(field) {
    field.editMode = ctrl.editMode;
    if(!field.options) {
      field.options = {};
    } 
    if(!field.options.size) {
      field.options.size = 12;
    }
    if(field.tinymceOptions) {
      field.tinymceOptions.inline = false;
      field.tinymceOptions.elementpath = false;
      field.tinymceOptions.statusbar = false;
    }
  };
}

angular.
  module('editableForm').
  component('editableForm', {
    templateUrl:'js/axelwales/angular/editable/editable-form.template.html',
    require: {
      contentCtrl: '^editableContent'
    },
    bindings: {
      fields: '<',
    },
    controller: EditableFormController
  });