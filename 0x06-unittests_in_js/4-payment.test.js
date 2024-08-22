import { Utils } from "./utils.js";
import { sendPaymentRequestToApi } from "./3-payment.js";
import { expect } from "chai";
import sinon from "sinon";

describe('sendPaymentRequestToApi', () => {
	it('should call Utils.calculateNumber with the right parameters', () => {
		const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const consoleSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 20)
		expect(stub.calledOnce).to.be.true;
		expect(stub.calledWith('SUM', 100, 20)).to.be.true;
		expect(consoleSpy.calledOnce).to.be.true;
		expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
		stub.restore();
		consoleSpy.restore();

	});

});