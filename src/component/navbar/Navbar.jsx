import React from "react";
import { NavLink } from "react-router-dom";
import { navbarMenu } from "./NavItems";

function Navbar() {
  return (
    <div>
      <div className="bg-[#7a8889] text-white flex justify-center py-2">
        {navbarMenu?.map((item) => (
          <NavLink key={item?.id} to={item?.path} className={({ isActive }) =>
            `rounded-full font-semibold text-lg px-4 py-2 hover:text-[#0be0c0] ${
              isActive && "text-[#0be0c0]"
            }`
          }>
            {item?.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
