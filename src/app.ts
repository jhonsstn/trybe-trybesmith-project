import express, { NextFunction, Request, Response } from 'express';
import orderRouter from './api/order-routes';
import productRouter from './api/product-routes';
import signInRouter from './api/signin-route';
import userRouter from './api/user-routes';

const app = express();

app.use(express.json());

app.use('/login', signInRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

type Error = {
  statusCode: number;
  message: string;
};

app.use(
  (
    { statusCode, message }: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    res.status(statusCode || 500).json({
      message,
    });
  },
);

export default app;
