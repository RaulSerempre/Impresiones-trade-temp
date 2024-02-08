
import { ILayout } from "@/src/interfaces/layout.interface";
import { HeaderComponent } from "../components/header/header";
import { FooterComponent } from "../components/footer/footer";
import { auth } from "@/app/auth.config";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: ILayout) => {
  const session = await auth();

  if(!session?.user) {
    redirect("/auth/login")
  }
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

export default ProtectedLayout;
