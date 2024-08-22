import { Utils } from "./utils.js";
import { sendPaymentRequestToApi } from "./3-payment.js";
import { expect } from "chai";
import sinon from "sinon";

describe('sendPaymentRequestToApi', () => {
	it('should call Utils.calculateNumber with the right parameters', () => {
		const spy = sinon.spy(Utils, 'calculateNumber');
		const consoleSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 20)
		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWith('SUM', 100, 20)).to.be.true;
		expect(consoleSpy.calledOnce).to.be.true;
		expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
		spy.restore();
		consoleSpy.restore();

	});

});