import {
  BreadcrumbItem,
  Breadcrumbs,
  BreadcrumbsProps,
} from "@nextui-org/react";

interface IBreadcrumbComponent extends BreadcrumbsProps {
  data: Array<string>;
  icon: React.ReactNode;
}

export const BreadcrumbComponent = ({ data, icon }: IBreadcrumbComponent) => {
  return (
    <Breadcrumbs>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <BreadcrumbItem key={item.replaceAll(" ", "")}>
            {icon}
            <span className="text-primary ml-2">{item}</span>
          </BreadcrumbItem>
        ))}
    </Breadcrumbs>
  );
};
