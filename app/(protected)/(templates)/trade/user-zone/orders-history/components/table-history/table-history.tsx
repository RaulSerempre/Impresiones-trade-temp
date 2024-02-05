"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
} from "@nextui-org/react";
import { useCallback } from "react";
import { PiEyeBold } from "react-icons/pi";
import { columns, users } from "./data";
import { cn } from "@/src/lib/utils";
import { ButtonComponent } from "@/src/components";
import { ChipStatus } from "@/app/(protected)/components/chip-status/chip-status";
import { EOrderStatus } from "@/src/lib/constants";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export const TableHistory = () => {
  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <ChipStatus status={EOrderStatus.aproved}/>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            {/* isIconOnly */}
            <ButtonComponent  className={cn("rounded-lg p-0 h-10 w-10 max-w-10 min-w-10")} variant="solid">
                <PiEyeBold  size={20}/>
            </ButtonComponent>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      classNames={{
        th: cn("bg-utility-blue-sky text-utility-blue text-sm font-bold py-6 !rounded-none"),
        tr: cn("py-6 data-[odd=true]:bg-utility-purple rounded-none")
      }}
      removeWrapper
      aria-label="Example table with custom cells"
    >
      <TableHeader className="bg-[#D5E1F5]" columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users} data-odd>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
