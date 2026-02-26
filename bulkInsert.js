const mysql = require('mysql2/promise');

const descriptions = [
    'Grocery Shopping', 'Monthly Rent', 'Electricity Bill', 'Coffee Shop',
    'Salary Deposit', 'Online Subs', 'Gas Station', 'Freelance Work',
    'Dinner with friends', 'Movie Tickets', 'Gym Membership', 'Internet Bill',
    'Birthday Gift', 'Bonus', 'Car Repair', 'Investment Return'
];

async function seedMillionTransactions() {
    console.log('Connecting to MySQL database...');

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'sua_senha_aqui',
        database: 'transactions_db'
    });

    console.log('Connected! Starting bulk insert of 1,000,000 transactions...');

    const totalRecords = 1000000;
    const batchSize = 25000;
    const totalBatches = totalRecords / batchSize;

    for (let i = 0; i < totalBatches; i++) {
        const values = [];

        for (let j = 0; j < batchSize; j++) {
            const type = Math.random() > 0.4 ? 'WITHDRAWAL' : 'DEPOSIT';
            const amount = (Math.random() * (type === 'DEPOSIT' ? 1500 : 200) + 5).toFixed(2);
            const description = descriptions[Math.floor(Math.random() * descriptions.length)];
            const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // YYYY-MM-DD HH:MM:SS

            values.push([description, parseFloat(amount), type, date]);
        }

        const sql = 'INSERT INTO transactions (description, amount, type, date) VALUES ?';
        await connection.query(sql, [values]);

        process.stdout.write(`\rInserted batch ${i + 1}/${totalBatches} (${(i + 1) * batchSize} records)`);
    }

    console.log('\n\nSuccessfully inserted 1,000,000 transactions!');
    await connection.end();
}

seedMillionTransactions().catch(err => {
    console.error('\nError during bulk insertion:', err);
});
