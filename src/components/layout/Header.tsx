import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Menu = styled.div`
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const SignInButton = styled.div`
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const MenuToggled = styled.div`
  @media screen and (min-width: 650px) {
  }
`;
function Header({ header }): JSX.Element {
  const [open, setOpen] = useState(false);
  const menuitems = header.menuItems;
  const handleCLick = () => {
    setOpen(!open);
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-32 flex justify-between items-center bg-transparent z-50 ${
        open ? 'bg-orange-500' : ' '
      }  `}
    >
      <div className="relative w-[100%] flex justify-start ">
        <div className="lg:hidden">
          <Icon
            name="bars"
            size={'big'}
            className="text-white  lg:text-red-900"
            onClick={handleCLick}
          />
        </div>
        <Menu className="w-[100%] flex justify-center">
          <ul className="flex text-white   w-full h-10 ">
            {menuitems.map((item) => (
              <li
                key={item._kenticoId}
                className="text-[14px] text-white uppercase font-semibold tracking-widest ml-[30px] hover:border-b-2 hover:border-secondary p-2 "
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Menu>
      </div>
      {open && (
        <MenuToggled className="bg-black absolute top-32 left-0 h-screen w-[318px] ">
          <ul className="mt-10 w-3/4 m-auto border-b-2 pb-[320px]">
            {menuitems.map((item) => (
              <li
                key={item._kenticoId}
                className=" text-[14px] text-white  uppercase margin font-semibold tracking-widest leading-10 "
              >
                {item.name}
              </li>
            ))}
          </ul>
        </MenuToggled>
      )}
      <span className=" flex justify-center lg:w-[100%] ">
        <img src={header.logo.url} className="lg:w-[180px] lg:h-[62px] " alt="Logo header" />
      </span>
      <div className="w-[100%] flex justify-end">
        <Icon name="search" className=" text-white " size={'big'} />
        <SignInButton className="  rounded-md uppercase mr-[30px] ml-[30px] text-secondary border-2 w-[81px] border-secondary p-2">
          Sign In
        </SignInButton>
      </div>
    </nav>
  );
}
export default Header;
