/**
 * Requires jquery, jquery-ui
 *
 */
function ExpandableListController($scope, $element) {
  var ctrl = this;

  ctrl.$onInit = function() {
    $element.accordion({
      active: false,
      collapsible: true,
      heightStyle: 'content'
    })
    ctrl.setHeader('');
  };
  
  ctrl.setHeader = function(selector) {
    console.log('setting header selector: ' + selector);
    $element.accordion( "option", "header", selector );
  };
  
  ctrl.refresh = function() {
    $element.accordion('refresh');
  }
}

angular.
  module('expandableList').
  directive('expandableList', function() {
    return {
      restrict: 'A',
      controller: ExpandableListController
    };
  });