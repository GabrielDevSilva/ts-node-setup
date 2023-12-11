import express from 'express';
import * as AsaasController from '../../controllers/AsaasController';
import { clientIp } from '~/src/middleware/getIp';

const asaasRoutes = express.Router();

asaasRoutes.post('/invoices/asaas', AsaasController.asaasPayments);
asaasRoutes.post('/invoices/asaas/subscriptions', clientIp, AsaasController.asaasSubscription);
// asaasRoutes.post(
//   "/webhook/payment",
//   isAuth,
//   AsaasController.receivedPaymentAsaas
// );
// asaasRoutes.post('/webhook/payment', AsaasController.receivedPaymentAsaas);

export default asaasRoutes;
