import React from "react";

function RevenueCard({ title, orderCount, amount  , count}) {
  return (
    <div className="bg-white-500 rounded shadow-sm p-10">
      <div> {title}</div>
      <div className="flex justify-between">
          <div>₹ {amount}</div>
          {orderCount ? 
            <div className="flex text-blue-500"> 
              {orderCount} order(s) <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>

            </div>
           : null}
      </div>
    </div>
  );
}

export default RevenueCard;
