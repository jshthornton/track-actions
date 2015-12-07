'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = (function () {
  function _class(callback) {
    _classCallCheck(this, _class);

    this._actions = ['click'];

    this._callback = callback;

    this._bindFns();
    this._bindEvents();
  }

  _createClass(_class, [{
    key: '_bindFns',
    value: function _bindFns() {
      _lodash2.default.bindAll(this, ['_onAction']);
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      (0, _jquery2.default)(document.body).on(this._actions.join(' '), '[data-track-actions]', this._onAction);
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {}

    // Events

  }, {
    key: '_onAction',
    value: function _onAction(e) {
      var $node = (0, _jquery2.default)(e.target);
      var nodeActions = $node.data('trackActions');
      nodeActions = '[' + nodeActions + ']';
      nodeActions = JSON.parse(nodeActions);

      if (_lodash2.default.indexOf(nodeActions, e.type) === -1) {
        // Do not track
        return;
      }

      var dataPrefix = 'track' + _lodash2.default.capitalize(e.type);

      var category = $node.data(dataPrefix + 'Category'),
          action = $node.data(dataPrefix + 'Action'),
          label = $node.data(dataPrefix + 'Label');

      this._callback({
        category: category,
        action: action,
        label: label
      });
    }
  }]);

  return _class;
})();

exports.default = _class;
;
