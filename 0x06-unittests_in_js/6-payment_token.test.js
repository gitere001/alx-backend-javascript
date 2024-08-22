import { getPaymentTokenFromAPI } from "./6-payment_token.js";
import { expect } from "chai";

describe('getPaymentTokenFromApi', () => {
	it('should resolve', (done) => {
		getPaymentTokenFromAPI(true).then((result) => {
			expect(result).to.deep.equal({data: 'Successful response from the API'});
			done()
		}).catch((error) => {
			done(error)
		})
	});
});