import { Router } from 'express';
import asaasRoutes from './asaas/asaasRoutes';

const routes = Router();
routes.use(asaasRoutes);

export default routes;
