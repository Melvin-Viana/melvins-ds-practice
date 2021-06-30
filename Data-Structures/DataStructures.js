"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = exports.Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
}; //https://gist.github.com/laras126/8a057d19d0d4c724e73783b229874d10

var SinglyList = exports.SinglyList = function () {
  function SinglyList() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, SinglyList);

    this.head = head;
    this.tail = null;
  }

  _createClass(SinglyList, [{
    key: "add",
    value: function add(value) {
      if (!this.head) {
        this.head = new Node(value);
      } else if (this.head && this.tail === null) {
        this.head.next = new Node(value);
        this.tail = this.head.next;
      } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
      }
    }
    /**
     * 
     * @param {string[]} nodes 
     * @description - Adds all nodes in one linkedList
     */

  }, {
    key: "addNodes",
    value: function addNodes(nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        this.add(node);
      }
    }
  }, {
    key: "getAllNodeVals",
    value: function getAllNodeVals() {
      var output = [];
      var node = this.head;

      while (node) {
        output.push(node.data);
        node = node.next;
      }

      return output;
    }
  }]);

  return SinglyList;
}();
