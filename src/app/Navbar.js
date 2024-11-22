import Link from "next/link"
export default function Navbar() {
    return (
        <div className="NavBox">
        <Link href = "/"> Home </Link> 
        <Link href = "./Profile"> Profile </Link>
        <Link href = "./Events"> Events </Link>
        <Link href = "./Info"> Info </Link>
        <Link href = "./LeaderSHPE"> LeaderSHPE </Link>
        <Link href = "./Sponsors"> Sponsors </Link>
        </div>
    );
}