import { Utils } from "./utils.js";
import { sendPaymentRequestToApi } from "./5-payment.js";
import { expect } from "chai";
import sinon from "sinon";

describe('sendPaymentRequestToApi', () => {
	let consoleSpy;
	beforeEach(() => {
		consoleSpy = sinon.spy(console, 'log')
	});
	afterEach(() => {
		consoleSpy.restore();
	});
	it('it should call console.log', () => {
		sendPaymentRequestToApi(100, 20)
		expect(consoleSpy.calledOnce).to.be.true
		expect(consoleSpy.calledWith('The total is: 120')).to.be.true
	});
	it('it should call console.log', () => {
		sendPaymentRequestToApi(10, 10)
		expect(consoleSpy.calledOnce).to.be.true
		expect(consoleSpy.calledWith('The total is: 20')).to.be.true
	});
});