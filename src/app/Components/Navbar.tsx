// Link, Redes sociales, imágenes
import React from "react";
import { SocialMedia } from "../../../constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed-top-0 w-full h-full flex">
      <div className="flex flex-row gap-3 items-center">
        <div>
          {/*

            <image
              src="/favicon.ico"
              alt="logo"
              width={}
              height={}
              className='w-full h-full'
              />
            */}
            
        </div>

        <h1 className="text-white"> Welcome to my page</h1>
      </div>

      {/*secciones*/}
      <div className="absolute flex flex-col">
        <Link
          href="/skills"
          className="text-lg"
          //My projects
        />
      </div>

      {/*redes sociales*/}

      <div className="flex flex-row">
        {SocialMedia.map((social) => (
          <img
            key={social.name}
            src={social.src}
            alt={social.name}
            width={60}
            height={60}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
