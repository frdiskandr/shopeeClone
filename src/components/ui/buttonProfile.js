import Image from "next/image";
import Link from "next/link";

function ButtonProfile({img}) {
    return (
        <>
            <Link href="/profile" className="flex border-b gap-1">
                <span className="ml-2">Profile</span>
                <Image src={img} width={30} height={30} alt="Profile" />
            </Link>
        </>
    )
}

export default ButtonProfile;