const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
        const bigBrother = sinon.spy(Utils);

        sendPaymentRequestToApi(100, 20);
        expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
        bigBrother.calculateNumber.restore();
    });
    it('should use Utils.calculateNumber for calculation', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        calculateNumberStub.returns(10);
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
