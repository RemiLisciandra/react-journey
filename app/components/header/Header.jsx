"use client";

import { ReactSvg } from "../logos/ReactSvg";
import { ShoppingBasket } from "lucide-react";
import { User } from "lucide-react";
import { Button } from "../ui/button/Button";
import Link from "next/link";

export const Header = ({ title = "ReactJourney" }) => {
  return (
    <header className="px-5">
      <div className="flex justify-between py-5">
        <Link href="/" className="flex items-center">
          <ReactSvg size={35} />
          <h1 className="font-bold ms-2 text-xl">{title}</h1>
        </Link>
        <div className="flex items-center gap-5">
          <Button>
            <User />
          </Button>
          <Button>
            <ShoppingBasket />
          </Button>
        </div>
      </div>
    </header>
  );
};
