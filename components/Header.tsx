"use client"; // for usePathname
import { cn, getInitials } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Session } from "next-auth";

// in the ui folder we will add shadcn components where inside the components folder we will add our components
const Header = ({session}:{session:Session}) => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            {/* applies above styles only when the given conditions are satisfied */}
            Library
          </Link>
        </li>
        <li>
          <Link href="/my-profile">
            <Avatar>
              {/*<AvatarImage src="https://github.com/shadcn.png" />*/}
              <AvatarFallback className="bg-amber-100">{getInitials(session?.user?.name || 'IN')}</AvatarFallback>
            </Avatar>

            {/* shadcn avatar component $ npx shadcn@latest add avatar*/}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
