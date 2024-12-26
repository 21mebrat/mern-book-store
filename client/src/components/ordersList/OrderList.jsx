import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetOrderByEmailQuery } from '../../feature/order/orderApi';

const OrderList = () => {
    const { email } = useParams();
    const { data: orders, error, isLoading } = useGetOrderByEmailQuery(email);
    if (isLoading) {
        return <p className="text-center text-gray-500">Loading orders...</p>;
    }

    if (error) {
        return (
            <p className="text-center text-red-500">
                Error loading orders: {error.message || 'Something went wrong'}
            </p>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center mb-6">Order List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Order ID</th>
                            <th className="py-3 px-6 text-left">Customer Name</th>
                            <th className="py-3 px-6 text-left">Customer Email</th>
                            <th className="py-3 px-6 text-left">Total</th>
                            <th className="py-3 px-6 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 ? (
                            orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-100 text-gray-700"
                                >
                                    <td className="py-3 px-6">{order._id}</td>
                                    <td className="py-3 px-6">{order.name}</td>
                                    <td className="py-3 px-6">{order.email}</td>
                                    <td className="py-3 px-6">${order.totalPrice}</td>
                                    <td className="py-3 px-6">
                                        <span
                                            className={`px-3 py-1 rounded ${order.status === 'Completed'
                                                    ? 'bg-green-500 text-white'
                                                    : order.status === 'Pending'
                                                        ? 'bg-yellow-500 text-white'
                                                        : 'bg-red-500 text-white'
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="py-6 text-center text-gray-500 text-lg"
                                >
                                    No orders available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;
