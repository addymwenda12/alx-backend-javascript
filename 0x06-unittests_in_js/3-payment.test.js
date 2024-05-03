const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment.js');
const { Utils } = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
    it('should use Utils.calculateNumber for calculation', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
});
