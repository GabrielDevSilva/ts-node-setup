import { Request, Response } from 'express';
import { createPayment } from '../services/AssasService/CreatePayment';
import { subscription } from '../services/AssasService/Subscription';
// import { paymentReceived } from '../services/AssasService/PaymentReceived';

export const asaasPayments = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { oldDate, value, name, mobilePhone, email, cpfCnpj, postalCode, access_token, sandbox } = req.body;

		const create = await createPayment({
			oldDate,
			value,
			name,
			mobilePhone,
			email,
			cpfCnpj,
			postalCode,
			access_token,
			sandbox,
		});

		return res.status(200).json(create);
	} catch (error) {
		return res.status(500).json(error);
	}
};

// export const receivedPaymentAsaas = async (req: Request, res: Response): Promise<Response> => {
// 	const { payment } = req.body;
// 	await paymentReceived(payment);

// 	return res.status(200).json();
// };

export const asaasSubscription = async (req: Request, res: Response): Promise<Response> => {
	try {
		const {
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
		} = req.body;

		const create = await subscription({
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
		});

		return res.status(200).json(create);
	} catch (error) {
		return res.status(500).json(error);
	}
};
