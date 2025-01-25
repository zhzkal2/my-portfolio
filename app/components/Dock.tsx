'use client';
import React, { useEffect } from "react";

const socials = {
  linkedin: {
    link: "https://www.linkedin.com/in/christianbarlow",
    label: "LinkedIn",
    color: "#0077b5",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zm-8 16h-3v-8h3v8zm-1.5-9.6c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7.5 9.6h-3v-4.8c0-1.2-.6-2.4-2.4-2.4-1.8 0-2.6 1.3-2.6 2.4v4.8h-3v-8h3v1.1c.4-.6 1.3-1.1 2.4-1.1 1.7 0 3 1.3 3 3v4.9z"/>
      </svg>
    ),
  },
  twitter: {
    link: "https://twitter.com/TheRealBarlow_",
    label: "Twitter",
    color: "#1DA1F2",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M23.444 4.834c-.885.392-1.83.655-2.828.775 1.014-.606 1.795-1.565 2.16-2.724-.95.566-2.005.975-3.122 1.198C18.233 2.507 16.372 1 14.226 1c-3.33 0-6.02 2.69-6.02 6.003 0 .47.055.927.161 1.367-5.003-.251-9.436-2.644-12.392-6.293-.516.888-.81 1.918-.81 3.015 0 2.08 1.057 3.92 2.664 5.001-.981-.032-1.91-.301-2.715-.753-.001.025-.001.05-.001.076 0 2.91 2.073 5.34 4.814 5.902-.504.137-1.037.209-1.588.209-.39 0-.77-.038-1.145-.107.773 2.406 3.02 4.16 5.651 4.204-2.08 1.625-4.693 2.603-7.517 2.603-1.106 0-2.199-.067-3.27-.189 2.504 1.603 5.491 2.537 8.646 2.537 10.379 0 16.067-8.334 16.067-15.579 0-.237-.006-.473-.017-.71.701-.505 1.307-1.14 1.844-1.85z"/>
      </svg>
    ),
  },
  github: {
    link: "https://github.com/Barlow1",
    label: "Github",
    color: "#333",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.801 8.207 11.395.6.111.82-.258.82-.577 0-.283-.01-1.039-.015-2.039-3.338.727-4.038-1.606-4.038-1.606-.546-1.38-1.334-1.748-1.334-1.748-1.089-.74.082-.726.082-.726 1.205.086 1.837 1.237 1.837 1.237 1.071 1.836 2.808 1.303 3.49.997.106-.78.418-1.304.762-1.604-2.664-.302-5.464-1.332-5.464-5.927 0-1.31.468-2.382 1.236-3.222-.124-.302-.535-.943-.053-1.91 0 0 1.009-.32 3.304 1.231 1.287-.358 2.676-.536 4.036-.536 1.36 0 2.749.178 4.036.536 2.295-1.551 3.304-1.231 3.304-1.231.482.967.071 1.608-.053 1.91.768.84 1.236 1.913 1.236 3.222 0 4.603-2.801 5.624-5.471 5.926.428.375.811 1.115.811 2.256 0 1.627-.014 2.939-.014 3.335 0 .321.219.692.825.574C20.563 21.801 24 17.303 24 12c0-6.628-5.372-12-12-12z"/>
      </svg>
    ),
  },
  email: {
    link: "/contact",
    label: "Email me!",
    color: "#FF8C00",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 13.5L8.5 10h7L12 13.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    ),
  },
};

export function SocialBar() {
  useEffect(() => {
    function addPrevClass(e: any) {
      var target = e.target;
      if (target.tagName === "svg") {
        var li = target.parentNode.parentNode;
        var prevLi = li.previousElementSibling;
        if (prevLi) {
          prevLi.className = "prev";
        }

        target.addEventListener(
          "mouseout",
          function () {
            if (prevLi) {
              prevLi.removeAttribute("class");
            }
          },
          false
        );
      }
    }
    if (window && document) {
      document
        .getElementsByClassName("dock")[0]
        ?.addEventListener("mouseover", addPrevClass, false);
    }

    return () => {
      document
        .getElementsByClassName("dock")[0]
        ?.removeEventListener("mouseover", addPrevClass, false);
    };
  }, []);
  
  return (
    <div className="dock-container fixed bottom-0 text-center w-full left-0 right-0 pointer-events-none z-50">
      <div className="dock relative inline-block perspective-[400px] pointer-events-all">
        <div className="base absolute bottom-0 w-full h-11 z-[-10] bg-gray-600 bg-gradient-to-b from-gray-800 to-gray-400 opacity-50 border-b-2 border-gray-400 transform-origin-center rotate-x-[55deg]"></div>
        <ul className="text-sm px-7 py-0 m-0 flex justify-center space-x-4">
          {Object.entries(socials).map(([key, { link, label, color, svg }]) => (
            <li key={key} className="relative inline-block">
              <span className="absolute bottom-[140px] left-0 w-full bg-secondary p-1 rounded-[12px] hidden text-white text-center">
                {label}
              </span>
              <a href={link}>
                <div
                  className="dummy-icon w-12 h-12 rounded-full mb-2"
                  style={{ backgroundColor: color }}
                >
                  {svg}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialBar;
