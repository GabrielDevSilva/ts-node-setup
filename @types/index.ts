export interface ICreateCustomer {
	name: string;
	mobilePhone: string;
	email: string;
	cpfCnpj: string;
	postalCode: string;
	access_token: string;
	sandbox: string;
}

export interface IListCustomer {
	access_token: string;
	cpfCnpj: string;
	sandbox: string;
}

export interface ICreatePayment extends ICreateCustomer {
	oldDate: string;
	value: number;
}

export interface IListWebHookBilling {
	sandbox: string;
	access_token: string;
}

export interface ICreateWebHookBilling {
	access_token: string;
	url: string;
}

export interface ISubscription extends ICreateCustomer {
	addressNumber: string;
	remoteIp: string;
	holderName: string;
	number: string;
	expiryMonth: string;
	expiryYear: string;
	ccv: string;
	value: number;
	nextDueDate: string;
}
