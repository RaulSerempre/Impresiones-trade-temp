import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  itemMenu: IItemNav
}
interface IItemNav {
  id: number;
  name: string;
  link: string;
}

export const NavItem = ({itemMenu}: IProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={itemMenu.link}
      className={`${
        pathname == itemMenu.link ? "font-bold" : ""
      } text-utility-black px-3 py-2 text-sm`}
    >
      {itemMenu.name}
    </Link>
  );
};
