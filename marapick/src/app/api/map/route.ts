import { getConnection, query } from "../db";
//http://localhost:3000/api/map
export async function GET() {
    const connection = await getConnection();

        const managerPagesql = "SELECT * FROM managerpage";
        const loginSql = "SELECT * FROM login";

        const managerPage = await query(connection, managerPagesql);
        const login = await query(connection, loginSql);

        const result = {
            managerPage,
            login
        }
        connection.release();
        return new Response(JSON.stringify(result))
}