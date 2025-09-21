"use client";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks &&
        adminLinks.map((link) => {
          const isActivePage = pathname === link.href;
          const variant = isActivePage ? "default" : "ghost";
          return (
            <Button
              className="w-full mb-2 capitalize font-normal justify-start"
              asChild
              variant={variant}
              key={link.href}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          );
        })}
    </aside>
  );
};

export default Sidebar;
