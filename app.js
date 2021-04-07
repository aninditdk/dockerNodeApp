const { Client } = require('pg');

const client = new Client({
    user,
    host,
    database,
    password,
    port,
}=process.env);

client.connect();

const query = `SELECT * FROM public.user`;
client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});