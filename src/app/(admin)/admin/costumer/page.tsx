// import TableBodyUsers from "@/components/pages/admin/costumer/TableBodyCostumer";

function UserList() {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Phone Number</th>
              <th className="py-2 px-4 border-b text-left">Address</th>
              <th className="py-2 px-4 border-b text-left">Created At</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>{/* <TableBodyUsers /> */}</tbody>
        </table>
      </div>
    </section>
  );
}

export default UserList;
