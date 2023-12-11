import { ISubscription } from '~/@types';
import { createCustomer } from './CreateCustomer';
import { verifySandbox } from './VerifySandbox';
import axios from 'axios';

export const subscription = async ({
	nextDueDate,
	value,
	name,
	mobilePhone,
	email,
	cpfCnpj,
	postalCode,
	addressNumber,
	remoteIp,
	holderName,
	number,
	expiryMonth,
	expiryYear,
	ccv,
	access_token,
	sandbox,
}: ISubscription) => {
	try {
		const api = verifySandbox(sandbox);

		const customer = await createCustomer({ name, mobilePhone, email, cpfCnpj, postalCode, access_token, sandbox });

		const url = `${api}/subscriptions`;

		const options = {
			headers: {
				accept: 'application/json',
				access_token,
			},
		};

		const data = {
			billingType: 'CREDIT_CARD',
			cycle: 'MONTHLY',
			creditCard: {
				holderName,
				number,
				expiryMonth,
				expiryYear,
				ccv,
			},
			creditCardHolderInfo: {
				name,
				email,
				cpfCnpj,
				postalCode,
				addressNumber,
				phone: mobilePhone,
			},
			remoteIp,
			customer,
			value,
			nextDueDate,
		};

		const response = await axios.post(url, data, options);
		const subscriptionId = response.data.id;

		return subscriptionId;
	} catch (error) {
		return error;
	}
};
