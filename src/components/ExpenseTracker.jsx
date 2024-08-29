function ExpenseTracker({
    setAmount,
    setType,
    handleAddTransaction,
    transaction,
    amount,
    type,
    // totalExpense,
    // totalIncome,
    // balance,
}) {
    const totalIncome = transaction.reduce(
        (acc, transaction) =>
          transaction.type == "Income" ? acc + Number(transaction.amount) : acc,
        0
      );
    
      const totalExpense = transaction.reduce(
        (acc, transaction) =>
          transaction.type == "Expense" ? acc + Number(transaction.amount) : acc,
        0
      );
    
      const balance = totalIncome - totalExpense
    return (
        <div className="balancemedia flex flex-col justify-center items-center">
        <div className="balancemedia flex justify-center items-center gap-4 my-5">
          <div className="p-3 px-6 border border-yellow-500 rounded-lg">
            <h1 className="font-semibold">Total Income</h1>
            <h1 className="font-semibold">{totalIncome}</h1>
          </div>

          <div className="p-3 px-6 border border-yellow-500 rounded-lg">
            <h1 className="font-semibold">Total Expense</h1>
            <h1 className="font-semibold">{totalExpense}</h1>
          </div>

          <div className={`balancequery p-3 px-6 border border-yellow-500 rounded-lg ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <h1 className="font-semibold">Balance</h1>
            <h1 className="font-semibold">{balance}</h1>
          </div>
        </div>

        <div className=" flex font-semibold">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="border border-yellow-600 p-2 rounded-lg mx-2"
            placeholder="Add Amount"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-yellow-600 p-1 rounded-lg mx-2 font-semibold"
          >
            <option value="income" className="font-semibold">Income</option>
            <option value="Expense" className="font-semibold">Expense</option>
          </select>
          <button
            onClick={handleAddTransaction}
            className="submitquery border border-yellow-600 p-2 rounded-lg mx-2 font-semibold"
            disabled={!amount || isNaN(Number(amount))}
          >
            Submit
          </button>
        </div>

        <div>
          {transaction.map((data, index) => {
            return (
              <div key={index} className="flex p-3">
                <h3 className="font-bold text-2xl w-40">
                  {index + 1}
                  {")"} {data.amount}
                </h3>
                <h5
                  className={`font-semibold text-2xl font-mono ${
                    data.type === "Income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {data.type}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    )
}

export default ExpenseTracker;