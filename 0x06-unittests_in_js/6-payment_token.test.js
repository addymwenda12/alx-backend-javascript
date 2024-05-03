const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with the correct data when input is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.eql({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => done(error));
    });
});
