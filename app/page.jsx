import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Accueil = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* Texte */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">Développeur logiciel</span>
						<h1 className="h1 mb-6">
							Bonjour, Je suis <br />
							<span className="text-accent">Yassine Mosleh</span>
						</h1>
						<p className="max-w-[500px] mb-9 text-white/80">
							I excel at crafting elegant digital experiences and
							I am proficient in variuous programming in various
							programming languages and technologies
						</p>

						{/* Bouton dowload CV & Socials*/}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button
								variant="outline"
								size="lg"
								className="uppercase flex items-center gap-2"
							>
								<span>Télecharger mon CV</span>
								<FiDownload className="text-xl" />
							</Button>
							<div className="mb-8 xl:mb-0">
								<Socials
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-bas hover:bg-accent hover:text-primary hover-transition-all duration-500"
								/>
							</div>
						</div>
					</div>

					{/* Photo */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
};

export default Accueil;
