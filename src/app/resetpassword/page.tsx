import Link from "next/link";
import React from "react";

function resetpassword() {
	return (
		<main>
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-2xl">
				<div className="w-full p-6 bg-white rounded-2xl dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8 shadow-2xl">
					<h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-[#1F5780] md:text-2xl dark:text-white">
						Change Password
					</h2>
					<form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
						<div>
							<label
								htmlFor="text"
								className="block mb-2 text-sm font-medium text-[#1F5780] dark:text-white"
							>
								OTP
							</label>
							<input
								type="text"
								name="OTP"
								id="OTP"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="123445"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-[#1F5780] dark:text-white"
							>
								New Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="confirm-password"
								className="block mb-2 text-sm font-medium text-[#1F5780] dark:text-white"
							>
								Confirm password
							</label>
							<input
								type="confirm-password"
								name="confirm-password"
								id="confirm-password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
						<Link href="/login">
							<button
								type="submit"
								className="w-full mt-4 text-white bg-[#1F5780] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#1F5780] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Reset password
							</button>
						</Link>
					</form>
				</div>
			</div>
		</main>
	);
}

export default resetpassword;
