var Observable = require('FuseJS/Observable');
var state = Observable(true);
var changeValue = Observable(function (){
   console.log(!state);
   return !state.value;
});

module.exports = {
   state:state,
   changeValue : changeValue
};
