import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const InterestCalculator = () => {
	const [principal, setPrincipal] = useState(500000);
	const [interestRate, setInterestRate] = useState(10);
	const [startDate, setStartDate] = useState("2022-06-26");
	const [payments, setPayments] = useState([
		{ date: "2022-11-04", amount: 3466.67 },
		{ date: "2022-07-22", amount: 4166.67 },
		{ date: "2022-08-22", amount: 4166.67 },
		{ date: "2022-09-22", amount: 4166.67 },
		{ date: "2022-11-22", amount: 701.0 },
	]);

	const [balance, setBalance] = useState(principal);
	const [breakdown, setBreakdown] = useState([]);

	useEffect(() => {
		calculateInterest();
	}, [principal, interestRate, startDate, payments]);

	const calculateInterest = () => {
		let currentBalance = principal;
		let monthlyInterestRate = interestRate / 100 / 12;
		let currentDate = dayjs(startDate);
		let endDate = dayjs();
		let schedule = [];
		let accumulatedInterest = 0;
		let totalPaid = 0;

		while (currentDate.isBefore(endDate, "month")) {
			let interestDue = currentBalance * monthlyInterestRate;
			accumulatedInterest += interestDue;
			currentBalance += interestDue;

			let payment = payments.find((p) =>
				dayjs(p.date).isSame(currentDate, "month")
			);

			let paymentAmount = payment ? payment.amount : 0;
			totalPaid += paymentAmount;
			currentBalance -= paymentAmount;

			schedule.push({
				date: currentDate.format("MMM YYYY"),
				interestDue: interestDue.toFixed(2),
				paymentMade: paymentAmount.toFixed(2),
				balance: currentBalance.toFixed(2),
			});

			currentDate = currentDate.add(1, "month");
		}

		setBreakdown(schedule);
		setBalance(currentBalance);
	};

	return (
		<div className="p-5 max-w-3xl mx-auto bg-white shadow rounded-lg">
			<h2 className="text-xl font-bold mb-4">Interest Calculation Breakdown</h2>

			<div className="mb-4">
				<label className="block text-sm font-medium">Principal:</label>
				<input
					type="number"
					value={principal}
					onChange={(e) => setPrincipal(parseFloat(e.target.value))}
					className="border p-2 w-full"
				/>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium">Interest Rate (% per year):</label>
				<input
					type="number"
					value={interestRate}
					onChange={(e) => setInterestRate(parseFloat(e.target.value))}
					className="border p-2 w-full"
				/>
			</div>

			<table className="w-full border-collapse border border-gray-300 mt-4">
				<thead>
					<tr className="bg-gray-100">
						<th className="border p-2">Month</th>
						<th className="border p-2">Interest Due</th>
						<th className="border p-2">Payment Made</th>
						<th className="border p-2">Balance</th>
					</tr>
				</thead>
				<tbody>
					{breakdown.map((row, index) => (
						<tr key={index}>
							<td className="border p-2">{row.date}</td>
							<td className="border p-2">${row.interestDue}</td>
							<td className="border p-2">${row.paymentMade}</td>
							<td className="border p-2">${row.balance}</td>
						</tr>
					))}
				</tbody>
			</table>

			<h3 className="mt-4 text-lg font-bold">Total Balance Due: ${balance.toFixed(2)}</h3>
		</div>
	);
};

export default InterestCalculator;
