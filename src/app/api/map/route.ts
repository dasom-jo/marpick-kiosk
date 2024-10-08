import { getConnection, query } from "../db";
//http://localhost:3000/api/map
export async function GET() {
    const connection = await getConnection();

        const managerPagesql = "SELECT * FROM managerpage";
        const loginSql = "SELECT * FROM login";
        const menuSql = "SELECT * FROM menu";
        const meatSql = "SELECT * FROM meat";
        const otherSql = "SELECT * FROM other";
        const tasteSql = "SELECT * FROM taste";

        const managerPage = await query(connection, managerPagesql,[]);
        const login = await query(connection, loginSql,[]);
        const menu = await query(connection, menuSql,[]);
        const meat = await query(connection, meatSql,[]);
        const other = await query(connection, otherSql,[]);
        const taste = await query(connection, tasteSql,[]);

        const result = {
            managerPage,
            login,
            menu,
            meat,
            other,
            taste
        }
        connection.release();
        return new Response(JSON.stringify(result))
}