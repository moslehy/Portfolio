"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
	{ name: "accueil", path: "/" },
	{ name: "profil", path: "/profil" },
	{ name: "Travaux", path: "/travaux" },
	{ name: "contacte", path: "/contacte" },
];

const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="flex gap-8">
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`${
							link.path === pathname &&
							"text-accent border-b-2 border-accent"
						} capitalize font-medium hover:text-accent transition-all`}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
