import { ILayout } from '@/src/interfaces/layaut.interface';
import Image from 'next/image';


const AuthLayout = ({ children }: ILayout) => {
  return (
    <div className="bg-gradient-primary h-screen w-screen">
      <div className="bg-white px-10 py-10 mx-auto  w-fit relative center-vertical">
        <div className="max-w-[408px] min-w-[408px]">
          <Image src="/images/canto-execution-auth.webp" width={200} height={77} className="mx-auto" alt="canto execution" loading="lazy"></Image>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AuthLayout;
