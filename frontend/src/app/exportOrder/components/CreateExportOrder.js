import { useState } from 'react';
import API from '../../../../services/api';

const CreateExportOrder = ({ onExportOrderCreated }) => {

    const [formData, setFormData] = useState({
        customer_id: '',
        shipping_date: '',
        shipping_address: '',
        shipping_status: 'Pending',
        product_id: '',
        quantity: '',
        subtotal: '',
        total_amount: '',
        status: 'Pending' // ค่าเริ่มต้นเป็น true
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddExportOrder = async () => {
        try {
            const response = await API.post('/export-orders', formData);
            onExportOrderCreated(response.data); // ส่งข้อมูล export order ใหม่กลับไป
            setFormData({
                customer_id: '',
                shipping_date: '',
                shipping_address: '',
                shipping_status: 'Pending',
                product_id: '',
                quantity: '',
                subtotal: '',
                total_amount: '',
                status: 'Pending'
            });
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };


    return (
        <div>
            <h2 className="text-lg font-bold mb-2">Add New Expoer Order</h2>
            <div className="grid grid-cols-2 gap-4 text-black">
                <input
                    type="number"
                    name="customer_id"
                    placeholder="Customer ID"
                    value={formData.customer_id}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                />

                <input
                    type="number"
                    name="product_id"
                    placeholder="Product ID"
                    value={formData.product_id}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                />
                <input
                    type="number"
                    name="subtotal"
                    placeholder="Subtotal"
                    value={formData.subtotal}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                />
                <input
                    type="number"
                    name="total_amount"
                    placeholder="Total Amount"
                    value={formData.total_amount}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                />

                <input
                    type="text"
                    name="shipping_address"
                    placeholder="Shipping Address"
                    value={formData.shipping_address}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                />

                <div className="mb-4">
                <label htmlFor="Shipping Date" className="text-gray-400 block mb-2">
                Shipping Date
                </label>
                <input
                    type="date"
                    name="shipping_date"
                    placeholder="Shipping Date"
                    value={formData.shipping_date}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                />
                </div>


                



                
            </div>
            <button
                onClick={handleAddExportOrder}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 mb-3"
            >
                Save Export Order
            </button>
        </div>
    );
};

export default CreateExportOrder;