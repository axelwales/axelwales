/**
 * http://usejsdoc.org/
 */
angular.
  module('projectList').
  component('projectList', {
    templateUrl:'js/axelwales/angular/project/project-list.template.html ',
    bindings: {
        data: '<'
      },
    controller: function ProjectListController() {
      var ctrl = this;
      ctrl.projects = [
        {
          name: 'axelwales.com',
          description: 'This Site.'
        }, {
          name: 'Patchwork Online',
          description: 'Patchwork Online.'
        }, {
          name: 'Gallerist Online',
          description: 'Gallerist Online.'
        }
      ];
      
      ctrl.addProject = function() {
      	var name = "Untitled Project";
      	if(this.newProject != null && this.newProject.name != '') {
      		name = this.newProject.name;
      	}
          this.projects.push({name:name,description:"Edit Description"});
      };
      
      ctrl.updateList = function(project, prop, value) {
        project[prop] = value;
      }
    }
  });