import express from 'express';
import productRouter from './api/product-routes';
import userRouter from './api/user-routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
