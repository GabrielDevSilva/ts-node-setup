import axios from 'axios';
import { verifySandbox } from './VerifySandbox';
import { IListCustomer } from '~/@types';

export const listCustomer = async ({ access_token, cpfCnpj, sandbox }: IListCustomer) => {
	try {
		const api = verifySandbox(sandbox);

		const url = `${api}/customers?cpfCnpj=${cpfCnpj}`;
		const options = {
			headers: {
				accept: 'application/json',
				access_token,
			},
		};

		const { data } = await axios.get(url, options);

		if (data.data.length === 0) return false;

		return data.data[0].id;
	} catch (error) {
		return error;
	}
};
