import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/product/product-interface';
import IProductModel from '../interfaces/product/product-model-interface';
import db from './connection';

class ProductModel implements IProductModel {
  add = async (product: IProduct): Promise<number> => {
    const { name, amount } = product;
    const query = `
    INSERT INTO
    Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
    const [{ insertId }] = await db.execute<ResultSetHeader>(query, [
      name,
      amount,
    ]);
    return insertId;
  };

  getAll = async (): Promise<IProduct[]> => {
    const query = `
    SELECT *
    FROM Trybesmith.Products
    `;
    const [products] = await db.execute<RowDataPacket[]>(query);
    return products as IProduct[];
  };

  update = async (productId: number, orderId: number): Promise<void> => {
    const query = `
    UPDATE Trybesmith.Products
    SET orderId = ?
    WHERE id = ?
    `;
    await db.execute(query, [orderId, productId]);
  };
}

export default ProductModel;
