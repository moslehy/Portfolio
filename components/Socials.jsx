import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
	{
		icon: <FaGithub />,
		path: "",
	},
	{
		icon: <FaLinkedinIn />,
		path: "",
	},
];
const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((social, index) => {
				return (
					<Link href={social.path} key={index} className={iconStyles}>
						{social.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
