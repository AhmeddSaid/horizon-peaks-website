import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image src="/logo.png" height="60" width="60" alt="Horizon Peaks logo" /> */}
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="Horizon Peaks logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        Horizon Peaks
      </span>
    </Link>
  );
}

export default Logo;
