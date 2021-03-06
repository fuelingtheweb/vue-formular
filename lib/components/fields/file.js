// Types: text, email, number

var render_template = require('../../helpers/render-template');
var props = require('../mixins/props');
var data = require('../mixins/data');
var methods = require('../mixins/methods');
var computed = require('../mixins/computed');
var ready = require('../mixins/ready');
var merge = require('merge');

module.exports = {
  template:render_template('form-group',{
    field:render_template('file'),
    fieldType:'File'
  }),
  props: {
    options: {
      type: Object,
      required:false,
      default: function() {
        return {};
      }
    },
    ajax: {
      type: Boolean
    }
  },
  ready: function() {

    if (!this.ajax) return;

    var options = merge.recursive(this.$parent.options.files, this.options);

     $(this.$el).find("input[type=file]").fileupload(options);

  },
  mixins:[props,data, methods, computed,ready]
}

