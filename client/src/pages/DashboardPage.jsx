import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Forex Card Dashboard</h1>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Multi-Currency Balance</h2>
            <p className="text-gray-600">USD: $1,200</p>
            <p className="text-gray-600">EUR: €800</p>
            <p className="text-gray-600">INR: ₹50,000</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Total Portfolio Value</h2>
            <p className="text-2xl font-bold text-green-600">$3,500</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Exchange Rate Ticker</h2>
            <p className="text-gray-600">USD/INR: ₹82.5</p>
            <p className="text-gray-600">EUR/INR: ₹90.3</p>
          </CardContent>
        </Card>
      </div>

      {/* Card Management & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Card Management</h2>
            <p className="text-gray-600 mb-2">Status: <span className="text-green-600 font-bold">Active</span></p>
            <div className="flex gap-2">
              <Button variant="outline">Block Card</Button>
              <Button variant="outline">Set Travel Notice</Button>
              <Button variant="outline">Report Lost</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Security Score</h2>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full w-3/4"></div>
            </div>
            <p className="text-gray-600 mt-2">Your account is 75% secure. Add 2FA for more security.</p>
          </CardContent>
        </Card>
      </div>

      {/* Spending Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <ul className="text-gray-600 space-y-2">
              <li>Amazon - $120</li>
              <li>Uber - €30</li>
              <li>Restaurant - ₹2,000</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Budget Tracking</h2>
            <div className="space-y-2">
              <p>Food: 70%</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full w-3/4"></div>
              </div>
              <p>Shopping: 50%</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full w-1/2"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4 text-center">
            <Button className="w-full">Load Funds</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Button className="w-full">Currency Converter</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Button className="w-full">View Offers</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
