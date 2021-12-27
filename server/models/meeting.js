const {Schema, model} = require("mongoose")


const Meeting = new Schema({
    date: {type: Date, required: true, default: Date.now},
    isSuccessfulMeeting: {type: Boolean, required: true, default: true},
    postponementAffects: {type: Boolean, default: false},
    isInvestmentOffer: {type: Boolean, default: false},
    investmentSuccessful: {type: Boolean, default: false},
    mobileOffer: {
        type: String,
        enum : ['no offer', 'failure', 'new number', 'mnp'],
        default: 'no offer'
    },
    isCreditCardOffer: {type: Boolean, default: false},
    creditCardSuccessful: {type: Boolean, default: false},
    isDebitCardOffer: {type: Boolean, default: false},
    debitCardSuccessful: {type: Boolean, default: false},
    collected: {type: Number, default: false}
})


module.exports = model('Meeting', Meeting)