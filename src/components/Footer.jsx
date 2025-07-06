import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-black text-white pt-16 pb-6">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-12 border-b border-gray-700 pb-8">
				{/* Logo & Brand */}
				<div className="flex flex-col items-center md:items-start min-w-[200px]">
					<div className="flex items-center gap-2 mb-4">
						<Image src="/img/logo.png" alt="Spices Logo" width={60} height={60} unoptimized />
						{/* <span className="text-4xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>spices</span> */}
					</div>
				</div>

				{/* --- Column 2: Popular Products --- */}
				<div className="flex flex-col">
					<h3 className="text-lg font-bold mb-2">Popular Products</h3>
					<div className="h-1 w-10 bg-orange-500 mb-3" />
					<ul className="space-y-2">
						<li><span className="text-orange-400">Coriander Seeds</span></li>
						<li>Fennel Seeds</li>
						<li>Sesame Seeds</li>
						<li>Flex Seeds</li>
					</ul>
				</div>
				{/* Quick Links */}
				<div>
					<h3 className="text-lg font-bold mb-2">Quick links</h3>
					<div className="h-1 w-10 bg-orange-500 mb-3" />
					<ul className="space-y-2">
						<li><span className="text-orange-400">Home</span></li>
						<li>About</li>
						<li>Products</li>
						<li>Contact Us</li>
					</ul>
				</div>
				{/* Contact Us */}
				<div className="min-w-[250px]">
					<h3 className="text-lg font-bold mb-2">Contact us</h3>
					<div className="h-1 w-10 bg-orange-500 mb-3" />
					<div className="flex items-start gap-2 mb-2">
						<span className="mt-1"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-orange-400"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg></span>
						<span>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for</span>
					</div>
					<div className="flex items-center gap-2 mb-2">
						<span><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-orange-400"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></span>
						<span>+91 88888 11111, <span className="text-orange-400">+91 99999 22222</span></span>
					</div>
					<div className="flex items-center gap-2">
						<span><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-orange-400"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg></span>
						<span>info@spices.com</span>
					</div>
				</div>
			</div>
			{/* Bottom Bar */}
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
				<div>
					Copyright © - 2024. Spices. All Rights Reserved.
				</div>
				<div>
					Developed by <span className="text-orange-400 font-semibold">TWT.</span>
				</div>
			</div>
		</footer>
	);
}
