import axios from 'axios';
import { verifySandbox } from './VerifySandbox';
import { createCustomer } from './CreateCustomer';
import { listWebHookBilling } from './ListWebHookBilling';
import { ICreatePayment } from '~/@types';

export const createPayment = async ({
	oldDate,
	value,
	name,
	mobilePhone,
	email,
	cpfCnpj,
	postalCode,
	access_token,
	sandbox,
}: ICreatePayment) => {
	try {
		const api = verifySandbox(sandbox);

		const [dueDate] = oldDate.split('T');

		const customer = await createCustomer({ name, mobilePhone, email, cpfCnpj, postalCode, access_token, sandbox });

		const url = `${api}/payments`;

		const options = {
			headers: {
				accept: 'application/json',
				access_token,
			},
		};

		const data = {
			billingType: 'UNDEFINED',
			customer,
			value,
			dueDate,
		};

		await listWebHookBilling({ access_token, sandbox });

		const response = await axios.post(url, data, options);

		const billingId = response.data.id;

		const invoiceUrl = response.data.invoiceUrl;

		return { billingId, invoiceUrl };
	} catch (error) {
		return error;
	}
};
