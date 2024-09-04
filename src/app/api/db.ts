// app/api/db.ts
import { PoolConnection, MysqlError } from 'mysql';
import mysql from 'mysql';

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
};


const pool = mysql.createPool(config);

console.log(config);
export function getConnection(): Promise<PoolConnection> {
  return new Promise((resolve, reject) => {
    pool.getConnection((error: MysqlError | null, connection: PoolConnection) => {
      if (error) return reject(error);
      return resolve(connection);
    });
  });
}

// 쿼리 함수의 제네릭을 설정하여 배열과 객체를 모두 지원
export function query<T>(connection: PoolConnection, sql: string, params: any[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error: MysqlError | null, results: T[]) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
}