
import { ILayout } from "@/src/interfaces/layaut.interface";
import { HeaderComponent } from "../components/header/header";
import { FooterComponent } from "../components/footer/footer";

const AdminLayout = ({ children }: ILayout) => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="">
        <div className="container mx-auto px-4 pt-9 pb-10 max-w-7xl">
          {children}
        </div>
      </div>
      
      <FooterComponent></FooterComponent>
    </>
    
  );
};

export default AdminLayout;
