import React from 'react';

function Footer({ footerData }): JSX.Element {
  const menuFooter = footerData.menuItems || [];
  const copyright = (footerData.copyright).replace(/<(.+?)>/g, ' ').replace(/ {2,}/g, ' ');
  return (
    <footer className="grid grid-cols-1 h-[225px] bg-[#FBCEB3]">
      <div className="h-[204px] ">
        <ul className="flex flex-col justify-center h-full gap-5 ml-[17px] uppercase">
          {menuFooter.map((item) => (
            <li key={item._kenticoId}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="">
        <p className="text-center">{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
