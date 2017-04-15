/**
 * Requires jquery-ui
 *
 */
function ExpandableItemController() {
  var ctrl = this;
  ctrl.setHeader = function(selector) {
    ctrl.headerSelector = selector
  };
};

angular.
  module('expandableItem').
  directive('expandableItem', function() {
    return {
      require: ['^^expandableList','expandableItem'],
      restrict: 'A',
      controller: ExpandableItemController,
      link: function($scope, el, attrs, ctrl) {
        var listCtrl = ctrl[0];
        var itemCtrl = ctrl[1];
        listCtrl.setHeader(itemCtrl.headerSelector);
        listCtrl.refresh();
      }
    }
  }).directive('expandableItemHeader', function() {
    return {
      require: '^^expandableItem',
      restrict: 'A',
      scope: {
        class: '@expandableItemHeader',
      },
      link: function($scope, el, attrs, ctrl) {
        var clss = "expandable-" + $scope.class + "-header";
        var selector = '.' + clss;
        el.toggleClass(clss);
        ctrl.setHeader(selector);
      }
    }
  });