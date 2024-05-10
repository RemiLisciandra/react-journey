"use client";

import {ReactSvg} from "../logos/ReactSvg";
import {ShoppingBasket} from "lucide-react";
import {User} from "lucide-react";
import {Button} from "../ui/Button";

export const Header = ({ title = "ReactJourney" }) => {
    return (
        <header>
            <div className="flex justify-between p-5">
                <div className="flex items-center">
                    <ReactSvg size={35}/>
                    <h1 className="font-bold ms-2 text-xl">{title}</h1>
                </div>
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

