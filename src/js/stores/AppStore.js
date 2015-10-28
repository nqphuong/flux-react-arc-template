
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
        emitChange: function(){
            this.emit(CHANGE_EVENT);
        },
    }
);

AppDispatcher.register(function(payload){
    console.log(payload);
    
    //Get object and call update count
    var object = payload.action.object;
    var count = object.state.count;
    object.countUp(count+1);
    return true;
});

module.exports = AppStore;