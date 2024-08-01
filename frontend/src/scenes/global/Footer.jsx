import { Logo } from '../../components'
import { FiGithub, FiLinkedin, FiBriefcase } from "react-icons/fi";

const socialLinks = [
	{
		label: "Portfolio",
		icon: <FiBriefcase size={20} />,
		link: "https://usman.codehub.pk/",
	},
	{
		label: "Github",
		icon: <FiGithub size={20} />,
		link: "https://github.com/malikkusman",
	},
	{
		label: "Linkedin",
		icon: <FiLinkedin size={20} />,
		link: "https://www.linkedin.com/in/muhammad-usman-asghar/",
	},
];

const Footer = () => {
  return (
    <div className="w-[calc(100%-2rem)] max-w-[1300px] flex items-center justify-between mt-auto mb-4 pt-4 pb-1 border-b border-tertiary">
        <Logo />
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-10">
                {socialLinks.map(({ link, icon, label }) => (
                    <a href={link} key={label} target="_blank" rel="noreferrer">
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer