import axios from 'axios';
import { listCustomer } from './ListCustomer';
import { verifySandbox } from './VerifySandbox';
import { ICreateCustomer } from '~/@types';

export const createCustomer = async ({
	name,
	mobilePhone,
	email,
	cpfCnpj,
	postalCode,
	access_token,
	sandbox,
}: ICreateCustomer) => {
	try {
		const api = verifySandbox(sandbox);

		const customer = await listCustomer({ access_token, cpfCnpj, sandbox });

		if (customer) return customer;

		const url = `${api}/customers`;

		const options = {
			headers: {
				accept: 'application/json',
				access_token,
			},
		};

		const data = {
			name,
			cpfCnpj,
			email,
			mobilePhone,
			postalCode,
		};

		const response = await axios.post(url, data, options);

		return response.data.id;
	} catch (error) {
		return error;
	}
};
