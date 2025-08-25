export default function TransactionPage() {
  const transactions = [
    { id: 1, desc: "Deposit", amount: 1000 },
    { id: 2, desc: "Withdrawal", amount: -500 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Transactions</h1>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li key={t.id} className="p-3 rounded-xl shadow-md bg-white flex justify-between">
            <span>{t.desc}</span>
            <span className={t.amount > 0 ? "text-green-600" : "text-red-600"}>
              {t.amount > 0 ? `+₹${t.amount}` : `-₹${Math.abs(t.amount)}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}