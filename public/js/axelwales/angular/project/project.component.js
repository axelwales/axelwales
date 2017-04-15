/**
 * http://usejsdoc.org/
 */

angular.
  module('project').
  component('project', {
    templateUrl:'js/axelwales/angular/project/project.template.html ',
    bindings: {
      onUpdate: '&',
      project: '<'
    },
    controller: function ProjectController() {
      var ctrl = this;
      
      ctrl.$onInit = function() {
        var project = ctrl.project;
        var titleField = {
            label: "Title",
            content: ctrl.project.name,
            tinymceOptions: {
              menubar: false,
              toolbar: 'undo redo styleselect removeformat',
              inline: true
            },
            prop: "name"
        };
        
        var descriptionField = {
            label: "Description",
            content: ctrl.project.description,
            prop: "description"
        };
        
        ctrl.fields = [ titleField, descriptionField ];
      };
      
      ctrl.update = function(field) {
        ctrl.project[field.prop] = field.content;
        ctrl.onUpdate({project: ctrl.project, prop: field.prop, value: field.content});
      };
    }
  });