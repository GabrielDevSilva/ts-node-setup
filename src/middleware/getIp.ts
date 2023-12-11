import { Request, Response, NextFunction } from 'express';

export const clientIp = (req: Request, res: Response, next: NextFunction) => {
	req.body.remoteIp = req.ip; // Captura o endereço IP do cliente e o adiciona ao objeto req
	next();
};
