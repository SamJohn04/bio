import { GitHub, LinkedIn, Mail, WhatsApp } from "@mui/icons-material";

export default function IconLinks() {
    const links = [
        {
            icon: GitHub,
            link: "https://github.com/SamJohn04"
        }, {
            icon: LinkedIn,
            link: "https://www.linkedin.com/in/samuel-john-329b08246/"
        }, {
            icon: Mail,
            link: "mailto:samuel.john.codes@gmail.com"
        }, {
            icon: WhatsApp,
            link: "https://wa.me/+917306199074"
        }
    ]

    return(
        <div className="icon-links">
            {links.map((link, index) => {
                return(
                    <a href={link.link} key={index} target="_blank" rel="noreferrer">
                        <link.icon color="primary" fontSize="large"/>
                    </a>
                )
            })}
        </div>
    )
}