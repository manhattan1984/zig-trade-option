"use client";
import React from "react";
import Balance from "../(components)/Balance";
import { MdOutlineFilterNone } from "react-icons/md";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import Transaction from "../(components)/Transaction";

const Dashboard = ({
  userInfo: {
    first_name,

    total_profit,
    bonus,
    total_deposit,
    total_withdrawal,
    referral_bonus,
    total_earned,
  },
  deposits,
  transactions,
}) => {
  const balances = [
    {
      name: "Acount Balance",
      amount: total_profit + total_deposit,
    },
    {
      name: "Total Profit",
      amount: total_profit,
    },
    {
      name: "Bonus",
      amount: bonus,
    },
    {
      name: "Referral Bonus",
      amount: referral_bonus,
    },
    {
      name: "Total Deposit",
      amount: total_deposit,
    },
    {
      name: "Total Withdrawals",
      amount: total_withdrawal,
    },
  ];

  return (
    <div className="py-4 w-11/12 mx-auto bg-gray-100">
      <p className="text-xl mb-2">Hello {first_name}</p>
      {/* Amounts */}
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
        {balances.map((balance, index) => (
          <Balance {...balance} key={index} />
        ))}
      </div>

      {/* Deposits */}

      <div className="bg-white rounded p-4 my-4 text-center">
        <p className="text-left my-2">Latest Active Deposits</p>

        <div className="border grid grid-cols-4 gap-4 text-center text-sm py-2">
          {/* <p>Ref Id</p> */}
          <p>Plan Name</p>
          <p>Amount ($)</p>
          <p>Date</p>
          <p>Status</p>
        </div>
        {/* <div className="border p-8"> */}
        {deposits ? (
          <>
            {deposits.map((deposit, index) => (
              <Transaction {...deposit} key={index} />
            ))}
          </>
        ) : (
          <p>No Active Deposits</p>
        )}
        {/* </div> */}
      </div>

      {/* Transactions */}
      <div className="bg-white rounded p-4 my-4">
        <p className="my-2">Latest Transactions</p>
        <div className="border grid grid-cols-4 gap-4 text-center text-sm py-2">
          {/* <p>Ref Id</p> */}
          <p>Plan Name</p>
          <p>Amount ($)</p>
          <p>Date</p>
          <p>Status</p>
        </div>
        {transactions ? (
          <>
            {transactions.map((transaction, index) => (
              <Transaction {...transaction} key={index} />
            ))}
          </>
        ) : (
          <div className="border p-4 flex gap-3 justify-between items-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <MdOutlineFilterNone className="text-blue-900" />
            </div>
            <div className="flex-1">
              <p>No Transaction Done</p>
              <p className="text-xs text-gray-500">05 Feb, 2023</p>
            </div>
            <p className="text-xs text-gray-500">N/A</p>
          </div>
        )}
      </div>

      <div className="overflow-x-auto justify-center flex w-full">
        <CryptoCurrencyMarket />
      </div>
    </div>
  );
};

export default Dashboard;
