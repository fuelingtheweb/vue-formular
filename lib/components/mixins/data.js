var clone = require('clone');

module.exports = {
  data: function() {
  return {
    messages:{},
    shouldShow:true,
    dirty:false,
    pristine:true,
    initialValue:clone(this.value),
    hadErrors:false,
    errors:[]
  }
 }
}
