const descriptions = [
    'Grocery Shopping', 'Monthly Rent', 'Electricity Bill', 'Coffee Shop',
    'Salary Deposit', 'Online Subs', 'Gas Station', 'Freelance Work',
    'Dinner with friends', 'Movie Tickets', 'Gym Membership', 'Internet Bill',
    'Birthday Gift', 'Bonus', 'Car Repair', 'Investment Return'
];

async function createTransactions() {
    console.log('Starting automation to create 50 random transactions...');
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < 50; i++) {
        // Randomize data
        const type = Math.random() > 0.4 ? 'WITHDRAWAL' : 'DEPOSIT';
        const amount = (Math.random() * (type === 'DEPOSIT' ? 1500 : 200) + 5).toFixed(2);
        const description = descriptions[Math.floor(Math.random() * descriptions.length)];

        const transaction = {
            description,
            amount: parseFloat(amount),
            type
        };

        try {
            const response = await fetch('http://localhost:8080/api/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(transaction)
            });

            if (response.ok) {
                successCount++;
                process.stdout.write('.'); // progress indicator
            } else {
                failCount++;
                console.error(`\nFailed on transaction ${i}: HTTP ${response.status}`);
            }
        } catch (e) {
            failCount++;
            console.error(`\nNetwork error on transaction ${i}: ${e.message}`);
        }

        // Slight delay to prevent completely overwhelming the local DB simultaneously
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    console.log(`\n\nAutomation completed: ${successCount} successful, ${failCount} failed.`);
    console.log('Check your frontend at http://localhost:5173 to see the new data!');
}

createTransactions();
