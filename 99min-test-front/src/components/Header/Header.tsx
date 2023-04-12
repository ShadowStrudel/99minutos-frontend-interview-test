import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <img src="/assets/rocket-home.png" alt="rocket-home" />
          </Link>
          <Link href="/about">
            <img src="/assets/rocket-about.png" alt="rocket-about" />
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
