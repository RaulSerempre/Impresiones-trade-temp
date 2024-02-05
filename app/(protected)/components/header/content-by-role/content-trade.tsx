import { DropdownComponent } from "@/src/components";
import Image from "next/image";
import React from "react";
import { Badge, Button } from "@nextui-org/react";
import { cn } from "@/src/lib/utils";
import { ShoppingCartIcon, UserIcon } from "../icons/icons";

const tradeDropdownMenu = [
  {
    id: 1,
    name: "Historial de pedidos",
    link: "/trade/user-zone/orders-history",
  },
  {
    id: 2,
    name: "¿Cómo crear impresiones?",
    link: "/trade/tutorial",
  },
  {
    id: 3,
    name: "Cerrar sessión",
    link: "",
  },
];

export const ContentTrade = () => {
  return (
    <>
      <div>
        <Image
          width={130}
          height={50}
          className="h-12 w-auto"
          src="/images/canto-execution-logo.webp"
          loading="lazy"
          alt="canto execution"
        ></Image>
        <div></div>
      </div>
      <div className="flex flex-row items-center">
        <DropdownComponent
          listMenu={tradeDropdownMenu}
          className="mr-5"
          title={<UserIcon className="text-utility-blue" />}
        />
        <Button isIconOnly variant="light">
          <Badge
            classNames={{
              badge: cn("text-white font-bold text-base"),
            }}
            content="2"
            size="md"
            color="warning"
            showOutline={false}
          >
            <ShoppingCartIcon className="text-utility-blue" />
          </Badge>
        </Button>
      </div>
    </>
  );
};
