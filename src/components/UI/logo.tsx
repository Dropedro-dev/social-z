import Link from "next/link"
import Image from "next/image"

type Props = {
    size: number;
    
}
const Logo = ({size}: Props) => {
    return (
        <Link href="/">
            <Image
            src={'/logo.png'}
            alt="z"
            width={size}
            height={size}
            quality={100}
            ></Image>
        </Link>
    )
}

export default Logo