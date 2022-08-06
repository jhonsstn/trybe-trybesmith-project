import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IOrder from '../interfaces/order/db-order-interface';
import IOrderModel from '../interfaces/order/order-model-interface';
import db from './connection';

class OrderModel implements IOrderModel {
  getAll = async (): Promise<IOrder[]> => {
    const query = `
    SELECT O.id, O.userId, P.id AS productId
    FROM Trybesmith.Products AS P
    Join Trybesmith.Orders as O
    On O.id = P.orderId
    `;
    const [orders] = await db.execute<RowDataPacket[]>(query);
    return orders as IOrder[];
  };

  add = async (userId: number): Promise<number> => {
    const query = `
    INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)
    `;
    const [{ insertId }] = await db.execute<ResultSetHeader>(query, [userId]);
    return insertId;
  };
}

export default OrderModel;
