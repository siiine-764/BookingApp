import React from "react";
import {
  localities,
  residence,
  exploreMore,
  services,
  query,
} from "./data/Footer";

const Footer = () => {
  // to hide the link section in small screens
  let display;
  display = window.innerWidth < 430 ? "hidden" : "block";
  return (
    <div>
      {/* link section */}
      <div
        className={`max-w-4xl mx-auto flex mt-3 gap-x-1 sm:gap-x-8 text-[10px] sm:text-[13px] text-secondary ${display}`}
      >
        <ul className="">
          {localities.map((item, index) => (
            <a key={index} href={`${item.link} `}>
              <li className="pb-1 hover:text-red-600">{item.name}</li>
            </a>
          ))}
        </ul>
        <ul className="">
          {residence.map((item, index) => (
            <a key={index} href={`${item.link}`}>
              <li className="pb-1 hover:text-red-600">{item.name}</li>
            </a>
          ))}
        </ul>
        <ul className="">
          {exploreMore.map((item, index) => (
            <a key={index} href={`${item.link}`}>
              <li className="pb-1 hover:text-red-600">{item.name}</li>
            </a>
          ))}
        </ul>
        <ul className="">
          {services.map((item, index) => (
            <a key={index} href={`${item.link}`}>
              <li className="pb-1 hover:text-red-600">{item.name}</li>
            </a>
          ))}
        </ul>
        <ul className="">
          {query.map((item, index) => (
            <a key={index} href={`${item.link}`}>
              <li className="pb-1 hover:text-red-600">{item.name}</li>
            </a>
          ))}
        </ul>
      </div>
      {/* Copyright & Sponsors Section */}
      <div className="max-w-4xl mx-auto">
        <div className="font-bold text-sm text-secondary mx-auto text-center mt-4 sm:mt-1">
          <a
            href="https://account.booking.com/sign-in?op_token=EgVvYXV0aCKkAQoUNlo3Mm9IT2QzNk5uN3prM3BpcmgSCWF1dGhvcml6ZRoaaHR0cHM6Ly9hZG1pbi5ib29raW5nLmNvbS8qX3sidXRtX2NhbXBhaWduIjoibG9naW5fZm9vdGVyX3YwIiwidXRtX21lZGl1bSI6ImZyb250ZW5kIiwidXRtX3NvdXJjZSI6ImV4dHJhbmV0X2xvZ2luX2Zvb3RlciJ9QgRjb2RlKkQwtLnEvpzGJToAQjIKFWV4dHJhbmV0X2xvZ2luX2Zvb3RlchIIZnJvbnRlbmQaD2xvZ2luX2Zvb3Rlcl92MFio_beTBg"
            className="hover:text-red-600"
          >
            Extranet login
          </a>
        </div>
        <p className="text-[11px] mt-1 sm:mt-0">
          Copyright <span>&copy;</span> <span>1996-2022 </span>Booking.com™
          <span> </span>.All rights reserved.
        </p>
        <div className="max-w-3xl">
          <h1 className="text-xs text-center pt-2 sm:pt-8 text-textLight">
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
          </h1>
          <ul className="py-6 text-center">
            <li className="inline-block px-3">
              <img
                src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
                alt="logo of booking"
              />
            </li>
            <li className="inline-block px-3">
              <img
                src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
                alt="logo of priceline"
              />
            </li>
            <li className="inline-block px-3">
              <img
                src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
                alt="logo of kayak"
              />
            </li>
            <li className="inline-block px-3">
              <img
                src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
                alt="logo of agoda"
              />
            </li>
            <li className="inline-block px-3">
              <img
                src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"
                alt="logo of rentcolors"
              />
            </li>
            <li className="inline-block px-3">
              <img
                src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
                alt="logo of opentable"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;