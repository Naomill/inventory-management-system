import React from "react";

const ViewSupplier = ({ supplier, onClose, onEdit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-2/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Show Supplier Detail</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 text-2xl"
          >
            ✖
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* ซ้าย */}
          <div>
            <label className="text-gray-400">Supplier Name</label>
            <input
              type="text"
              value={supplier.supplier_name || "N/A"}
              disabled
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="text-gray-400">Contact Name</label>
            <input
              type="text"
              value={supplier.contact_name || "N/A"}
              disabled
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="text-gray-400">Phone</label>
            <input
              type="text"
              value={supplier.phone || "N/A"}
              disabled
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />
            </div>

            

          {/* ขวา */}
          <div>
            <label className="text-gray-400">E-mail</label>
            <input
              type="text"
              value={supplier.email || "N/A"}
              disabled
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="text-gray-400">Address</label>
            <input
              type="text"
              value={supplier.address || "N/A"}
              disabled
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="block text-gray-400 mb-1 text-sm">Status</label>
            <div
                className={`inline-block text-white p-2 rounded text-center ${
                supplier.is_active === 1 ? "bg-green-500" : "bg-red-500"
                }`}
                >
                {supplier.is_active === 1 ? "Active" : "Inactive"}
            </div>


          </div>
        </div>
        </div>
      </div>
      
  );
};

export default ViewSupplier;