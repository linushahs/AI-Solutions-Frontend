import React, { Fragment, useEffect, useState } from "react";
import { FiSearch, FiTrash2 } from "react-icons/fi";
import Input from "./input";
import { twMerge } from "tailwind-merge";
import { useInquiries } from "../../utils/use-inquiries";

function AdminTable() {
  const { inquiries, error, loading, fetchInquiries, deleteInquiries } =
    useInquiries();
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  // Filter rows based on search term
  const filteredRows = inquiries.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle individual checkbox selection
  const handleRowSelect = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  // Handle "select all" checkbox
  const handleSelectAll = () => {
    if (selectedRows.size === filteredRows.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(filteredRows.map((row) => row.id)));
    }
  };

  // Handle deletion of selected rows
  const handleDelete = async () => {
    const selectedIds = Array.from(selectedRows);

    console.log(selectedIds);
    await deleteInquiries(selectedIds);
    setSelectedRows(new Set());
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error occurred...</div>;

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <div className="text-[#001D6C] text-lg font-semibold">Inquiries</div>

        <div className="flex gap-4">
          {selectedRows.size > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {selectedRows.size} item{selectedRows.size > 1 ? "s" : ""}{" "}
                selected
              </span>
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                <FiTrash2 className="size-4" />
                Delete Selected
              </button>
            </div>
          )}

          {/* For Search  */}
          <div className="flex px-2 border-b-[2px] w-[240px] bg-white items-center rounded overflow-hidden justify-center">
            <FiSearch className="size-5 text-gray-500" />
            <Input
              type=""
              className="border-none bg-none overflow-hidden w-full bg-transparent"
              placeholder="Search.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="w-full rounded-md overflow-hidden">
        <thead className="bg-gray-200 rounded-md">
          <tr className="[&>th]:py-2.5 [&>th]:px-3.5 [&>th]:text-left [&>th]:font-semibold">
            <th>
              <label htmlFor="selectAll" className="flex gap-2.5 items-center">
                <input
                  type="checkbox"
                  id="selectAll"
                  className="size-4"
                  checked={
                    selectedRows.size === filteredRows.length &&
                    filteredRows.length > 0
                  }
                  onChange={handleSelectAll}
                />
                S.No
              </label>
            </th>
            <th>FullName</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Business Type</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {filteredRows.map(
            ({ id, fullName, contact, email, address, jobType, message }) => (
              <tr
                key={id}
                className={twMerge(
                  "[&>td]:py-3.5 [&>td]:px-3.5 [&>td]:text-left [&>td]:bg-white",
                  selectedRows.has(id) && "[&>td]:bg-gray-100"
                )}
              >
                <td>
                  <label
                    htmlFor={`row_${id}`}
                    className="flex gap-2.5 items-center"
                  >
                    <input
                      type="checkbox"
                      id={`row_${id}`}
                      className="size-4"
                      checked={selectedRows.has(id)}
                      onChange={() => handleRowSelect(id)}
                    />
                    {id}
                  </label>
                </td>
                <td>{fullName}</td>
                <td>{contact}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td className="capitalize">{jobType}</td>
                <td className="max-w-[220px]">{message}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
}

const initialRowsData = [
  {
    id: 1,
    name: "John Doe",
    contact: "984xxxxxxx",
    email: "johndoe@gmail.com",
    address: "Kathmandu",
    message: "Hello World",
  },
  {
    id: 2,
    name: "Jane Doe",
    contact: "9843xxxxx",
    email: "janedoes@gmail.com",
    address: "Lalitpur",
    message: "Hello World",
  },
  {
    id: 3,
    name: "John Doe",
    contact: "984xxxxxxx",
    email: "johndoe@gmail.com",
    address: "Kathmandu",
    message: "Hello World",
  },
];

export default AdminTable;
