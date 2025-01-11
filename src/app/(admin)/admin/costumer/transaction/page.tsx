// import TableBodyTransactions from "@/components/pages/admin/costumer/transaction/TableBodyTransactions";

function TransactionList() {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Costumer Name</th>
              <th className="py-2 px-4 border-b text-left">Product ID</th>
              <th className="py-2 px-4 border-b text-left">Order ID</th>
              <th className="py-2 px-4 border-b text-left">Amount</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Payment Type</th>
              <th className="py-2 px-4 border-b text-left">Created At</th>
              <th className="py-2 px-4 border-b text-left">Updated At</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>{/* <TableBodyTransactions /> */}</tbody>
        </table>
      </div>
    </section>
  );
}

export default TransactionList;
