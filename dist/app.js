(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _component = require('./menu/component.js');

var _component2 = _interopRequireDefault(_component);

var _component3 = require('./notification/component.js');

var _component4 = _interopRequireDefault(_component3);

var _component5 = require('./select/component.js');

var _component6 = _interopRequireDefault(_component5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('gumga.layout', []).component('glMenu', _component2.default).component('glNotification', _component4.default).component('gmdSelect', _component6.default);

},{"./menu/component.js":2,"./notification/component.js":3,"./select/component.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Component = {
  bindings: {
    menu: '<',
    keys: '<'
  },
  template: '\n    <ul>\n      <li data-ng-repeat="item in $ctrl.menu" data-ng-show="$ctrl.allow(item)" data-ng-class="{header: item.type == \'header\', divider: item.type == \'separator\'}">\n        <a ng-if="item.type != \'separator\'" ui-sref="{{item.state}}">\n          <i data-ng-if="item.icon" class="material-icons" data-ng-bind="item.icon"></i>\n          <span ng-bind="item.label"></span>\n        </a>\n        <gl-menu data-ng-if="item.children.length > 0" menu="item.children" keys="$ctrl.keys"></gl-menu>\n      </li>\n    </ul>\n  ',
  controller: function controller() {
    var ctrl = this;
    ctrl.keys = ctrl.keys || [];

    ctrl.allow = function (item) {
      if (ctrl.keys.length > 0) {
        if (!item.key) return true;
        return ctrl.keys.includes(item.key);
      }
    };
  }
};

exports.default = Component;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Component = {
  bindings: {
    icon: '@',
    notifications: '=',
    onView: '&?'
  },
  template: '\n    <ul class="nav navbar-nav navbar-right notifications">\n      <li class="dropdown">\n        <a href="#" badge="{{$ctrl.notifications.length}}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">\n          <i class="material-icons" data-ng-bind="$ctrl.icon"></i>\n        </a>\n        <ul class="dropdown-menu">\n          <li data-ng-repeat="item in $ctrl.notifications" data-ng-click="$ctrl.view($event, item)">\n            <div class="media">\n              <div class="media-left">\n                <img class="media-object" data-ng-src="{{item.image}}">\n              </div>\n              <div class="media-body" data-ng-bind="item.content"></div>\n            </div>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  ',
  controller: function controller() {
    var ctrl = this;
    ctrl.view = function (event, item) {
      return ctrl.onView({ event: event, item: item });
    };
  }
};

exports.default = Component;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Component = {
  bindings: {
    ngModel: '=',
    options: '<',
    option: '@',
    placeholder: '@?',
    onUpdate: "&?"
  },
  template: '\n    <div class="dropdown gmd">\n      <button class="btn btn-default gmd dropdown-toggle" type="button" id="gmdSelect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n        <span data-ng-bind="$ctrl.ngModel[$ctrl.option]"></span>\n        <span data-ng-bind="$ctrl.placeholder" data-ng-hide="$ctrl.ngModel" class="placeholder"></span>\n        <span class="caret"></span>\n      </button>\n      <ul class="dropdown-menu" aria-labelledby="gmdSelect">\n        <li>\n          <a data-ng-click="$ctrl.unselect()" data-ng-bind="$ctrl.placeholder"></a>\n        </li>\n        <li data-ng-repeat="option in $ctrl.options">\n          <a data-ng-click="$ctrl.select(option)" data-ng-bind="option[$ctrl.option]" data-ng-class="{active: $ctrl.ngModel == option}"></a>\n        </li>\n      </ul>\n    </div>\n  ',
  controller: function controller() {
    var ctrl = this;
    ctrl.select = function (option) {
      ctrl.ngModel = option;
      if (ctrl.onUpdate) ctrl.onUpdate({ option: option });
    };
    ctrl.unselect = function () {
      return ctrl.ngModel = undefined;
    };
  }
};

exports.default = Component;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNyYy9jb21wb25lbnRzL21lbnUvY29tcG9uZW50LmpzIiwic3JjL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2NvbXBvbmVudC5qcyIsInNyYy9jb21wb25lbnRzL3NlbGVjdC9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsUUFDRyxNQURILENBQ1UsY0FEVixFQUMwQixFQUQxQixFQUVHLFNBRkgsQ0FFYSxRQUZiLHVCQUdHLFNBSEgsQ0FHYSxnQkFIYix1QkFJRyxTQUpILENBSWEsV0FKYjs7Ozs7Ozs7QUNIQSxJQUFJLFlBQVk7QUFDZCxZQUFVO0FBQ1IsVUFBTSxHQURFO0FBRVIsVUFBTTtBQUZFLEdBREk7QUFLZCxxaUJBTGM7QUFnQmQsY0FBWSxzQkFBVztBQUNyQixRQUFJLE9BQU8sSUFBWDtBQUNBLFNBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxJQUFhLEVBQXpCOztBQUVBLFNBQUssS0FBTCxHQUFhLGdCQUFRO0FBQ25CLFVBQUksS0FBSyxJQUFMLENBQVUsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN4QixZQUFJLENBQUMsS0FBSyxHQUFWLEVBQWUsT0FBTyxJQUFQO0FBQ2YsZUFBTyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEtBQUssR0FBeEIsQ0FBUDtBQUNEO0FBQ0YsS0FMRDtBQU1EO0FBMUJhLENBQWhCOztrQkE2QmUsUzs7Ozs7Ozs7QUM3QmYsSUFBSSxZQUFZO0FBQ2QsWUFBVTtBQUNSLFVBQU0sR0FERTtBQUVSLG1CQUFlLEdBRlA7QUFHUixZQUFRO0FBSEEsR0FESTtBQU1kLDB5QkFOYztBQXlCZCxjQUFZLHNCQUFXO0FBQ3JCLFFBQUksT0FBTyxJQUFYO0FBQ0EsU0FBSyxJQUFMLEdBQVksVUFBQyxLQUFELEVBQVEsSUFBUjtBQUFBLGFBQWlCLEtBQUssTUFBTCxDQUFZLEVBQUMsT0FBTyxLQUFSLEVBQWUsTUFBTSxJQUFyQixFQUFaLENBQWpCO0FBQUEsS0FBWjtBQUNEO0FBNUJhLENBQWhCOztrQkErQmUsUzs7Ozs7Ozs7QUMvQmYsSUFBSSxZQUFZO0FBQ2QsWUFBVTtBQUNSLGFBQVMsR0FERDtBQUVSLGFBQVMsR0FGRDtBQUdSLFlBQVEsR0FIQTtBQUlSLGlCQUFhLElBSkw7QUFLUixjQUFVO0FBTEYsR0FESTtBQVFkLDAwQkFSYztBQXlCZCxjQUFZLHNCQUFXO0FBQ3JCLFFBQUksT0FBTyxJQUFYO0FBQ0EsU0FBSyxNQUFMLEdBQWMsa0JBQVU7QUFDdEIsV0FBSyxPQUFMLEdBQWUsTUFBZjtBQUNBLFVBQUksS0FBSyxRQUFULEVBQW1CLEtBQUssUUFBTCxDQUFjLEVBQUMsUUFBUSxNQUFULEVBQWQ7QUFDcEIsS0FIRDtBQUlBLFNBQUssUUFBTCxHQUFnQjtBQUFBLGFBQU0sS0FBSyxPQUFMLEdBQWUsU0FBckI7QUFBQSxLQUFoQjtBQUNEO0FBaENhLENBQWhCOztrQkFtQ2UsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgTWVudSAgICAgICAgIGZyb20gJy4vbWVudS9jb21wb25lbnQuanMnXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uL2NvbXBvbmVudC5qcydcbmltcG9ydCBTZWxlY3QgICAgICAgZnJvbSAnLi9zZWxlY3QvY29tcG9uZW50LmpzJ1xuYW5ndWxhclxuICAubW9kdWxlKCdndW1nYS5sYXlvdXQnLCBbXSlcbiAgLmNvbXBvbmVudCgnZ2xNZW51JywgTWVudSlcbiAgLmNvbXBvbmVudCgnZ2xOb3RpZmljYXRpb24nLCBOb3RpZmljYXRpb24pXG4gIC5jb21wb25lbnQoJ2dtZFNlbGVjdCcsIFNlbGVjdClcblxuIiwibGV0IENvbXBvbmVudCA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBtZW51OiAnPCcsXG4gICAga2V5czogJzwnXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsPlxuICAgICAgPGxpIGRhdGEtbmctcmVwZWF0PVwiaXRlbSBpbiAkY3RybC5tZW51XCIgZGF0YS1uZy1zaG93PVwiJGN0cmwuYWxsb3coaXRlbSlcIiBkYXRhLW5nLWNsYXNzPVwie2hlYWRlcjogaXRlbS50eXBlID09ICdoZWFkZXInLCBkaXZpZGVyOiBpdGVtLnR5cGUgPT0gJ3NlcGFyYXRvcid9XCI+XG4gICAgICAgIDxhIG5nLWlmPVwiaXRlbS50eXBlICE9ICdzZXBhcmF0b3InXCIgdWktc3JlZj1cInt7aXRlbS5zdGF0ZX19XCI+XG4gICAgICAgICAgPGkgZGF0YS1uZy1pZj1cIml0ZW0uaWNvblwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLW5nLWJpbmQ9XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgPHNwYW4gbmctYmluZD1cIml0ZW0ubGFiZWxcIj48L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGdsLW1lbnUgZGF0YS1uZy1pZj1cIml0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMFwiIG1lbnU9XCJpdGVtLmNoaWxkcmVuXCIga2V5cz1cIiRjdHJsLmtleXNcIj48L2dsLW1lbnU+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGAsXG4gIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdHJsID0gdGhpc1xuICAgIGN0cmwua2V5cyA9IGN0cmwua2V5cyB8fCBbXVxuXG4gICAgY3RybC5hbGxvdyA9IGl0ZW0gPT4ge1xuICAgICAgaWYgKGN0cmwua2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICghaXRlbS5rZXkpIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBjdHJsLmtleXMuaW5jbHVkZXMoaXRlbS5rZXkpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudCIsImxldCBDb21wb25lbnQgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgaWNvbjogJ0AnLFxuICAgIG5vdGlmaWNhdGlvbnM6ICc9JyxcbiAgICBvblZpZXc6ICcmPydcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHQgbm90aWZpY2F0aW9uc1wiPlxuICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBiYWRnZT1cInt7JGN0cmwubm90aWZpY2F0aW9ucy5sZW5ndGh9fVwiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLW5nLWJpbmQ9XCIkY3RybC5pY29uXCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICA8bGkgZGF0YS1uZy1yZXBlYXQ9XCJpdGVtIGluICRjdHJsLm5vdGlmaWNhdGlvbnNcIiBkYXRhLW5nLWNsaWNrPVwiJGN0cmwudmlldygkZXZlbnQsIGl0ZW0pXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWVkaWEtb2JqZWN0XCIgZGF0YS1uZy1zcmM9XCJ7e2l0ZW0uaW1hZ2V9fVwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIiBkYXRhLW5nLWJpbmQ9XCJpdGVtLmNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGAsXG4gIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdHJsID0gdGhpc1xuICAgIGN0cmwudmlldyA9IChldmVudCwgaXRlbSkgPT4gY3RybC5vblZpZXcoe2V2ZW50OiBldmVudCwgaXRlbTogaXRlbX0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50IiwibGV0IENvbXBvbmVudCA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBuZ01vZGVsOiAnPScsXG4gICAgb3B0aW9uczogJzwnLFxuICAgIG9wdGlvbjogJ0AnLFxuICAgIHBsYWNlaG9sZGVyOiAnQD8nLFxuICAgIG9uVXBkYXRlOiBcIiY/XCJcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gZ21kXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGdtZCBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJnbWRTZWxlY3RcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPlxuICAgICAgICA8c3BhbiBkYXRhLW5nLWJpbmQ9XCIkY3RybC5uZ01vZGVsWyRjdHJsLm9wdGlvbl1cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGRhdGEtbmctYmluZD1cIiRjdHJsLnBsYWNlaG9sZGVyXCIgZGF0YS1uZy1oaWRlPVwiJGN0cmwubmdNb2RlbFwiIGNsYXNzPVwicGxhY2Vob2xkZXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJnbWRTZWxlY3RcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGRhdGEtbmctY2xpY2s9XCIkY3RybC51bnNlbGVjdCgpXCIgZGF0YS1uZy1iaW5kPVwiJGN0cmwucGxhY2Vob2xkZXJcIj48L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBkYXRhLW5nLXJlcGVhdD1cIm9wdGlvbiBpbiAkY3RybC5vcHRpb25zXCI+XG4gICAgICAgICAgPGEgZGF0YS1uZy1jbGljaz1cIiRjdHJsLnNlbGVjdChvcHRpb24pXCIgZGF0YS1uZy1iaW5kPVwib3B0aW9uWyRjdHJsLm9wdGlvbl1cIiBkYXRhLW5nLWNsYXNzPVwie2FjdGl2ZTogJGN0cmwubmdNb2RlbCA9PSBvcHRpb259XCI+PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGN0cmwgPSB0aGlzXG4gICAgY3RybC5zZWxlY3QgPSBvcHRpb24gPT4ge1xuICAgICAgY3RybC5uZ01vZGVsID0gb3B0aW9uXG4gICAgICBpZiAoY3RybC5vblVwZGF0ZSkgY3RybC5vblVwZGF0ZSh7b3B0aW9uOiBvcHRpb259KVxuICAgIH1cbiAgICBjdHJsLnVuc2VsZWN0ID0gKCkgPT4gY3RybC5uZ01vZGVsID0gdW5kZWZpbmVkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50Il19
