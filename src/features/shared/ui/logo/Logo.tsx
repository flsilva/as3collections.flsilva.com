import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  readonly onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <h1 className="flex">
    <Link href="/" onClick={onClick}>
      <Image
        src="/images/logo@2x.png"
        alt="AS3Collections"
        width={167}
        height={47}
      />
    </Link>
  </h1>
);
