import axios from 'axios';
import { createWebHookBilling } from './CreateWebHookBilling';
import { verifySandbox } from './VerifySandbox';
import { IListWebHookBilling } from '~/@types';

export const listWebHookBilling = async ({ access_token, sandbox }: IListWebHookBilling) => {
	const api = verifySandbox(sandbox);

	const url = `${api}/webhook`;
	try {
		const options = {
			headers: {
				accept: 'application/json',
				access_token,
			},
		};

		const response = await axios.get(url, options);

		return response.data;
	} catch (error) {
		const response = await createWebHookBilling({ access_token, url });

		return response.data;
	}
};
