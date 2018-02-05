var Alexa = require('alexa-sdk');
 
const appId = "amzn1.ask.skill.783c5c82-0684-4267-b39c-34808c445956";
var handlers = {
 
    'TestIntent': function () {
        const name = this.event.request.intent.slots.Name.value;
        switch (name) {
            case 'Anton': this.emit(':tell', `It's my owner`); break;
            case 'Oleg': this.emit(':tell', `It's your friend`); break;
            case 'Marta': this.emit(':tell', `It's piska`); break;
            default: this.emit(':tell', `Have no idea`); break;
        }
    }
 
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appId = appId;
    alexa.registerHandlers(handlers);
    alexa.execute();
};