import Link from "next/link"

export default function Footer(){
    return (
        <div>
        <div className = "footerContainer">
            <div className = "newsLetter">
                <h2>Newsletter</h2>
                <p2>Want to keep updated with current events? Sign up for our weekly newsletter using your utsa email.</p2>
            </div>
            <div className = "linkbox">
                <h1>Follow Us!</h1>
                <Link href = "https://utsa.campuslabs.com/engage/organization/shpe" target = "_blank">
                Rowdylink
                </Link>
                <span></span>
                <Link href = "https://web.groupme.com/join_group/52143137/laH3wqa2" target = "_blank" >
                GroupMe
                </Link>
                <span></span>
                <Link href = "https://discord.com/invite/sN9MVj5gfm" target = "_blank" >
                Discord
                </Link>
                <span></span>
                <Link href = "https://www.linkedin.com/company/shpe-university-of-texas-at-san-antonio/" target = "_blank">
                LinkedIn
                </Link>
                <span></span>
                <Link href = "https://www.instagram.com/shpe.utsa/?hl=en" target = "_blank" >
                Instagram
                </Link>
                <span></span>
                <Link href = "https://www.tiktok.com/@shpe.utsa" target = "_blank">
                TikTok
                </Link>
                <span></span>
            </div>
        </div>
        <p className = "copyright"> © 2024 SHPE University of Texas at San Antonio. All Rights Reserved.</p>
        </div>
    )
}