/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState, useEffect } from "react";

import paragraphs from "../data/paragraphs";

const Project = () => {
	const [count, setCount] = useState("0");
	const [lorems, setLorems] = useState<string[]>([]);

	useEffect(() => {
		if (Number(count) < 0) setCount("0");
		if (Number(count) > 10) setCount("10");
	});

	return (
		<>
			<h1 className="relative py-4 mb-12 text-4xl font-bold capitalize after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-green-600">
				lorem generator
			</h1>
			<div className="max-w-[40rem] relative">
				<div className="flex items-center justify-center gap-4 mb-4">
					<label className="text-lg capitalize" htmlFor="number">
						quantity:
					</label>
					<input
						className="p-1 rounded outline-none appearance-none bg-slate-100"
						id="number"
						type="number"
						value={count}
						onChange={e => setCount(e.target.value)}
					/>
					<button
						className="p-2 font-bold text-white uppercase bg-green-600 rounded"
						onClick={() => {
							const lorems = [];
							for (let i = 0; i < Number(count); i++)
								lorems.push(
									paragraphs[Math.floor(Math.random() * paragraphs.length)]
								);
							setLorems(lorems);
						}}>
						generate
					</button>
				</div>
				<ul className="space-y-4 [counter-reset:lorem]">
					{lorems.map(l => (
						<li className="[counter-increment:lorem] overflow-visible relative before:content-[counter(lorem)] before:font-bold before:top-0 before:-left-2 before:text-green-600 before:text-3xl before:mr-2">
							{l}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Project;
