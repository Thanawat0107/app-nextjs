import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function Header() {
  return (
    <header className="bg-white border border-blue-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-start gap-5">

          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <LocalMallIcon />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    5555
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
