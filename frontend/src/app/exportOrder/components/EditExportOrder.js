import React, { useState } from "react";
import ChangeStatusExportOrder from "./ChangeStatusExportOrder"; // ใช้ ChangeStatusexportOrder เพื่อการยืนยันสถานะ

const EditExportOrder = ({ exportOrder, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    export_order_id: exportOrder.export_order_id || "",
    customer_id: exportOrder.customer_id,
    shipping_date: exportOrder.shipping_date || "",
    shipping_address: exportOrder.shipping_address || "",
    shipping_status: exportOrder.shipping_status || "Pending",
    product_id: exportOrder.product_id || "",
    quantity: exportOrder.quantity || "",
    subtotal: exportOrder.subtotal || "",
    total_amount: exportOrder.total_amount || "",
    status: exportOrder.status || "Pending",
  });
  


  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newStatus, setNewStatus] = useState(formData.status); // สถานะที่ผู้ใช้เลือก

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData); // ส่งข้อมูลที่แก้ไขกลับไปยัง Main Component
  };

  const handleStatusChange = (status) => {
    setNewStatus(status);
    setIsPopupVisible(true); // เปิดหน้าต่างยืนยันสถานะ
  };

  const handleShippingStatusChange = (status) => {
    setFormData({
      ...formData,
      shipping_status: status,
    });
  };
  

  const confirmStatusChange = () => {
    setFormData((prev) => ({ ...prev, status: newStatus }));
    setIsPopupVisible(false); // ปิดหน้าต่าง popup
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-2/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Edit Export Order Detail</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 text-2xl"
          >
            ✖
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Left Section */}
          <div>
            <label className="text-gray-400">Customer ID</label>
            <input
              type="number"
              name="customer_id"
              value={formData.customer_id}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="text-gray-400">Shipping Date</label>
            <input
              type="date"
              name="shipping_date"  // ใช้ชื่อที่ตรงกับใน formData
              value={formData.shipping_date ? formData.shipping_date.split('T')[0] : ""}  // แปลงวันที่ในรูปแบบ YYYY-MM-DD
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />


            <label className="text-gray-400">Shipping Address</label>
            <textarea
              name="shipping_address"
              value={formData.shipping_address}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-2 h-40"
            ></textarea>
          
            <label className="block text-gray-400 mb-1 text-sm">
              Shipping Status <span className="text-red-500">*Important</span>
            </label>
            <div className="space-y-2">
              {/* แถวแรก */}
              <div className="flex space-x-4">
                {/* Pending */}
                <label
                  className={`flex items-center px-4 py-2 rounded ${
                    formData.shipping_status === "Pending"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping_status"
                    value="Pending"
                    checked={formData.shipping_status === "Pending"}
                    onChange={() => handleShippingStatusChange("Pending")}
                    className="mr-2 hidden"
                  />
                  Pending
                </label>

                {/* In Transit */}
                <label
                  className={`flex items-center px-4 py-2 rounded ${
                    formData.shipping_status === "In Transit"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping_status"
                    value="In Transit"
                    checked={formData.shipping_status === "In Transit"}
                    onChange={() => handleShippingStatusChange("In Transit")}
                    className="mr-2 hidden"
                  />
                  In Transit
                </label>

                {/* Delivered */}
                <label
                  className={`flex items-center px-4 py-2 rounded ${
                    formData.shipping_status === "Delivered"
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping_status"
                    value="Delivered"
                    checked={formData.shipping_status === "Delivered"}
                    onChange={() => handleShippingStatusChange("Delivered")}
                    className="mr-2 hidden"
                  />
                  Delivered
                </label>
              </div>

              {/* แถวที่สอง */}
              <div className="flex space-x-4">
                {/* Returned */}
                <label
                  className={`flex items-center px-4 py-2 rounded ${
                    formData.shipping_status === "Returned"
                      ? "bg-red-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping_status"
                    value="Returned"
                    checked={formData.shipping_status === "Returned"}
                    onChange={() => handleShippingStatusChange("Returned")}
                    className="mr-2 hidden"
                  />
                  Returned
                </label>

                {/* Failed */}
                <label
                  className={`flex items-center px-4 py-2 rounded ${
                    formData.shipping_status === "Failed"
                      ? "bg-black text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping_status"
                    value="Failed"
                    checked={formData.shipping_status === "Failed"}
                    onChange={() => handleShippingStatusChange("Failed")}
                    className="mr-2 hidden"
                  />
                  Failed
                </label>
              </div>
            </div>


          

          </div>

          {/* Right Section */}
          <div>
            <label className="text-gray-400">Product ID</label>
            <input
              type="number"
              name="product_id"
              value={formData.product_id}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="text-gray-400">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="text-gray-400">Subtotal</label>
            <input
              type="number"
              name="subtotal"
              value={formData.subtotal}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="text-gray-400">Total Amount</label>
            <input
              type="number"
              name="total_amount"
              value={formData.total_amount}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded mb-2"
            />

            <label className="block text-gray-400 mb-1 text-sm">
            Status <span className="text-red-500">*Important</span>
            </label>
            <div className="flex items-center space-x-4">
            {/* Completed */}
            <label
                className={`flex items-center px-4 py-2 rounded ${
                formData.status === "Completed"
                    ? "bg-green-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
            >
                <input
                type="radio"
                name="status"
                value="Completed"
                checked={formData.status === "Completed"}
                onChange={() => handleStatusChange("Completed")} // เปลี่ยนสถานะเป็น Completed
                className="mr-2 hidden"
                />
                Completed
            </label>

            {/* Pending */}
            <label
                className={`flex items-center px-4 py-2 rounded ${
                formData.status === "Pending"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
            >
                <input
                type="radio"
                name="status"
                value="Pending"
                checked={formData.status === "Pending"}
                onChange={() => handleStatusChange("Pending")} // เปลี่ยนสถานะเป็น Pending
                className="mr-2 hidden"
                />
                Pending
            </label>

            {/* Cancelled */}
            <label
                className={`flex items-center px-4 py-2 rounded ${
                formData.status === "Cancelled"
                    ? "bg-red-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
            >
                <input
                type="radio"
                name="status"
                value="Cancelled"
                checked={formData.status === "Cancelled"}
                onChange={() => handleStatusChange("Cancelled")} // เปลี่ยนสถานะเป็น Cancelled
                className="mr-2 hidden"
                />
                Cancelled
            </label>
            </div>


          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
      </div>

      <ChangeStatusExportOrder
        isOpen={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        onConfirm={confirmStatusChange} // อัปเดตสถานะเมื่อผู้ใช้ยืนยัน
        status={newStatus}
      />
    </div>
  );
};

export default EditExportOrder;