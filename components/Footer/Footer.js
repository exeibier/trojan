import Link from "next/link";
import React from "react";

function Footer({ link, bgFooter }) {
  return (
    <div className={`footer ${bgFooter}`} >
      <Link href={link} >
        <a>Aviso de Privacidad</a>
      </Link>
    </div>
  );
}

export default Footer;
