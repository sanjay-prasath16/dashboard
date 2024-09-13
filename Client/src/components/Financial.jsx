import { CiBadgeDollar } from "react-icons/ci";

const Financial = () => {
    return (
      <div className="min-w-[300px] max-w-[350px]  border border-solid bg-white shadow-md rounded-lg p-6">
        {/* Title Section */}
        <div className="flex items-center">
            <p className="mr-2"><CiBadgeDollar /></p>
            <h3 className="text-lg">Financial Overview</h3>
        </div>
  
        {/* Financial Stats */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center border border-solid rounded-lg p-2">
            <div className="flex items-center space-x-2 border border-solid px-2 py-1 bg-gray-100 rounded-xl">
              <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
              <p className="text-sm text-gray-500">Total Revenue</p>
            </div>
            <p className="text-2xl font-bold">$2,584</p>
            <p className="text-xs text-gray-400">Last 30 days</p>
          </div>
  
          <div className="flex flex-col items-center border border-solid rounded-lg p-2">
            <div className="flex items-center space-x-2 border border-solid px-2 py-1 bg-gray-100 rounded-xl">
              <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
              <p className="text-sm text-gray-500">Profit Margin</p>
            </div>
            <p className="text-2xl font-bold">32%</p>
            <p className="text-xs text-gray-400">Last 30 days</p>
          </div>
  
          <div className="flex flex-col items-center border border-solid rounded-lg p-2">
            <div className="flex items-center space-x-2 border border-solid px-2 py-1 bg-gray-100 rounded-xl">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-500">Income</p>
            </div>
            <p className="text-2xl font-bold">$1,879</p>
            <p className="text-xs text-gray-400">Last 30 days</p>
          </div>
  
          <div className="flex flex-col items-center border border-solid rounded-lg p-2">
            <div className="flex items-center space-x-2 border border-solid px-2 py-1 bg-gray-100 rounded-xl">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <p className="text-sm text-gray-500">Expenses</p>
            </div>
            <p className="text-2xl font-bold">$348</p>
            <p className="text-xs text-gray-400">Last 30 days</p>
          </div>
        </div>
  
        {/* Footer */}
        <div className="mt-4 p-2 bg-gray-100 rounded-lg text-center flex">
            <div className="text-gray-500 text-lg">ⓘ</div>
          <p className="text-sm text-gray-600 mt-1 ml-2">Check daily to keep it on track</p>
        </div>
      </div>
    );
  }
  
  export default Financial;  