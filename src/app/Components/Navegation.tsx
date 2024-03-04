import React, {useEffect, useState} from "react"
import { NavLinks } from "../../../constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Transition from "./Transition"

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/") ;

  useEffect( () => {
    if(isRouting){
      setPrevPath(path);
      const timeout = setTimeout(() =>{
        setisRouting(false);
      },1200);
      return() => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
//      style={{}}
      className="rounded-full flex items-center"   
    >
      {isRouting && <Transition/>}
      {NavLinks.map((nav) =>(
        <Link key={nav.name} href={nav.link} className="mb-5">
          <nav.icon
            className={`w-[16px] h-[16px] ${
              // dimensiones y path
              path === nav.name ? "text-blue-500" : "text-white"
            }`}
        />
        </Link>
       ))}      
    </div>
  );
};

export default Navigation
