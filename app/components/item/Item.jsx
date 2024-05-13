"use client";

import { Card } from "../ui/card/Card";
import { CardHeader } from "../ui/card/CardHeader";
import { CardFooter } from "../ui/card/CardFooter";
import { CardBody } from "../ui/card/CardBody";
import { BookOpenText } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { ReactSvg } from "../logos/ReactSvg";
import { LinkButton } from "../ui/button/LinkButton";

export const Item = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <ReactSvg size={30} />
          <h3>React</h3>
        </div>
      </CardHeader>
      <CardBody>{data.name}</CardBody>
      <CardFooter>
        <p className="text-xs text-gray-400">{data.category}</p>
        <div className="flex items-center gap-2">
          <LinkButton className="bg-gray-200" href={data.url} target="_blank">
            <BookOpenText size={15} />
          </LinkButton>
          <LinkButton className="bg-gray-200" href="#">
            <PlusCircle size={15} />
          </LinkButton>
        </div>
      </CardFooter>
    </Card>
  );
};
