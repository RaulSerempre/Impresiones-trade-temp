"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavItem } from "./nav-item";
import { ContentTrade } from "./content-by-role/content-trade";

const userListRoutes = [
  {
    id: 1,
    name: "Pedidos por aprobar",
    link: "/admin/pending-orders",
  },
  {
    id: 2,
    name: "Resumen de costos",
    link: "/admin/cost-summary",
  },
];

const adminDropdownMenu = [
  {
    id: 1,
    name: "Usuario",
    link: "",
  },
  {
    id: 2,
    name: "SAG",
    link: "",
  },
  {
    id: 3,
    name: "Cerrar sessión",
    link: "",
  },
];

enum TUserRole {
  admin,
  trade,
  vendor,
}

export const HeaderComponent = () => {
  // Get from service
  let userRole: TUserRole = TUserRole.trade;

  const [role, setrole] = useState<TUserRole>(userRole);

  return (
    <nav className="bg-white shadow-header">
      <div className="mx-auto container max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {
            role === TUserRole.trade && (
              <ContentTrade/>
            )
          }
          {
            role === TUserRole.admin && (
              <ContentTrade/>
            )
          }
          {
            role === TUserRole.vendor && (
              <ContentTrade/>
            )
          }
        </div>
      </div>
    </nav>
  );

  // return (
  //   <nav className="bg-white shadow-header">
  //     <div className="mx-auto container max-w-7xl px-2 sm:px-6 lg:px-8">
  //       <div className="relative flex h-16 items-center justify-between">
  //         <div className="flex flex-1 items-center justify-center sm:justify-start">
  //           <div className="flex flex-shrink-0 items-center">
  //             <Image
  //               width={130}
  //               height={50}
  //               className="h-12 w-auto"
  //               src="/images/canto-execution-logo.webp"
  //               loading="lazy"
  //               alt="canto execution"
  //             ></Image>
  //           </div>
  //           {role === TUserRole.admin && (
  //             <div className="sm:ml-6 sm:block">
  //               <div className="flex space-x-4">
  //                 {userListRoutes &&
  //                   userListRoutes.map((item) => (
  //                     <NavItem key={item.id} itemMenu={item}></NavItem>
  //                   ))}
  //               </div>
  //             </div>
  //           )}
  //         </div>

  //         {role === TUserRole.trade && (
  //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  //             {/* <button type="button" className="p-1 text-2xl text-utility-blue hover:text-utility-blue/85 focus:outline-none mr-5">
  //             <IoMdPerson />
  //           </button>
  //           <button type="button" className="p-1 text-2xl text-utility-blue hover:text-utility-blue/85  focus:outline-none mr-5">
  //             <IoMdCart />
  //           </button> */}

  //             <div className="relative ml-3">
  //               <ContentTrade></ContentTrade>
  //             </div>

  //             {/* <Image src="/icons/thumbnail.webp" className="w-10 h-10" loading="lazy" alt="avatar"></Image> */}
  //           </div>
  //         )}
  //         {role === TUserRole.vendor &&

  //         }
  //       </div>
  //     </div>
  //   </nav>
  // );
};
