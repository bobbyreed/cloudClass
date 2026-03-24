const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
    //read the connection string from environment variable
    const sql = neon(process.env.DATABASE_URL);

    //Run a SQL query using Neon's tagged template literal syntax
    const rows = await sql`SELECT * FROM visitors`;

    //return http res
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rows)
    };
}