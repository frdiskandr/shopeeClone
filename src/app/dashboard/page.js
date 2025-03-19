'use client';

import { useState } from 'react';
import { FiUsers, FiShoppingBag, FiDollarSign, FiActivity } from 'react-icons/fi';
import ProductForm from '~/components/ProductForm';

const StatCard = ({ title, value, icon: Icon, bgColor }) => (
  <div className={`p-6 rounded-lg ${bgColor} text-white`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="text-3xl opacity-80">
        <Icon />
      </div>
    </div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
    <div className="space-y-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex items-center gap-4 border-b pb-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <FiActivity className="text-gray-600" />
          </div>
          <div>
            <p className="font-medium">New order #123{item}</p>
            <p className="text-sm text-gray-500">2 minutes ago</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Dashboard() {
  const [stats] = useState({
    users: '1,234',
    orders: '456',
    revenue: '$12,345',
    growth: '23%'
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={stats.users}
          icon={FiUsers}
          bgColor="bg-blue-500"
        />
        <StatCard
          title="Total Orders"
          value={stats.orders}
          icon={FiShoppingBag}
          bgColor="bg-green-500"
        />
        <StatCard
          title="Revenue"
          value={stats.revenue}
          icon={FiDollarSign}
          bgColor="bg-purple-500"
        />
        <StatCard
          title="Growth"
          value={stats.growth}
          icon={FiActivity}
          bgColor="bg-orange-500"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
        {/* Product Form */}
        <div className="lg:col-span-1">
          <ProductForm />
        </div>
      </div>
    </div>
  );
} 