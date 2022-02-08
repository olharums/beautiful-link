import React, { FC } from "react";
import { BiLink } from "react-icons/bi";

const BeautifulLink: FC<{ link: string }> = function ({ link }) {
  return (
    <a href={`https://www.${link}`}>
      <h4>
        <BiLink size="1.5em" />
        {link}
      </h4>
    </a>
  );
};
export default BeautifulLink;
