import $ from 'jquery';
import _ from 'lodash';

export default class {
  constructor(callback) {
    this._actions = ['click'];

    this._callback = callback;

    this._bindFns();
    this._bindEvents();
  }

  _bindFns() {
    _.bindAll(this, [
      '_onAction'
    ]);
  }

  _bindEvents() {
    $(document.body).on(this._actions.join(' '), '[data-track-actions]', this._onAction);
  }

  cleanup() {

  }

  // Events
  _onAction(e) {
    var $node = $(e.target);
    var nodeActions = $node.data('trackActions');
    nodeActions = nodeActions.split(/, ?/);

    if(_.indexOf(nodeActions, e.type) === -1) {
      // Do not track
      return;
    }

    var dataPrefix = 'track' + _.capitalize(e.type);

    var category = $node.data(dataPrefix + 'Category'),
      action = $node.data(dataPrefix + 'Action'),
      label = $node.data(dataPrefix + 'Label');

    this._callback({
      category: category,
      action: action,
      label: label
    });
  }
};