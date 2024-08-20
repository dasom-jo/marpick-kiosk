import { getConnection, query } from "../db";

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