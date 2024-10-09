import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className="py-8 xl:py-12 text-white ">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Yass<span className="text-accent">.</span>
					</h1>
				</Link>

				{/* Desktop nav & contact button*/}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<Link href="/contact">
						<Button href="/contact">Contact moi</Button>
					</Link>
				</div>

				{/* Mobile nav*/}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
