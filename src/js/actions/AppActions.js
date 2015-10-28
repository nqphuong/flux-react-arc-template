
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    addItem: function(obj){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            object:obj
        });
    },
};

module.exports = AppActions;