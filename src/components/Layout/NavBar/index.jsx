import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
// import Dropdown from "./Language";
import { MdDehaze } from "react-icons/md";
// import { FaPlus } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { showModal } from "../../../redux/modal.slice";
import { handleScroll } from "../../../helpers/scroll";
import { NavElement } from "../../../data/navData";
import Logo from "../../../assets/logos/AVA-Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
const NavBarT2 = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState("transparent");
  const [selectedLink, setSelectedLink] = useState("home");
  // const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 40) {
      return setHeader("transparent");
    } else if (document.documentElement.scrollTop > 40) {
      return setHeader("white");
    }
  };
  useEffect(() => {
    setHeader(false);
    document.addEventListener("scroll", listenScrollEvent);
    return () => {
      document.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  let slug = localStorage.getItem("slug");
  return (
    <>
      <div className={`flex flex-col justify-center items-center`}>
        <div
          // dir={i18n.language == "en" ? "" : "rtl"}
          className={`${
            header == "white"
              ? "shadow-2xl border-transparent"
              : "shadow-0 border-gray-400"
          } transition-all duration-500 z-40 fixed max-w-[1920px] w-full top-0 px-2 xl:px-12 py-4 flex justify-end md:justify-end items-center  md:gap-x-24`}
          style={{
            background:
              header === "white"
                ? "#161535"
                : location.pathname == "/" ||
                  location.pathname == "/about-us" ||
                  location.pathname == "/jobs" ||
                  location.pathname == "/articles" ||
                  location.pathname == `/articles/${slug}`
                ? "transparent"
                : "#161535",
          }}
        >
          <div className="h-12 2xl:h-16">
            <img
              src={Logo}
              className={`h-full w-full transition-all duration-300 ${
                header == "white"
                  ? "scale-100"
                  : "max-md:scale-150 md:scale-[2.5] md:-translate-x-12 md:translate-y-12"
              }`}
              alt=""
              onClick={() => navigate("/")}
            />
          </div>
          {NavElement.map((e) => (
            <LinkElement
              key={e.link}
              name={t(e.name)}
              link={e.link}
              selectedLink={selectedLink}
              header={header}
              styled={"max-md:hidden"}
            />
          ))}

          <div className={`flex justify-between items-center md:hidden`}>
            {/* <div className="flex flex-1">
              <div
                className="flex justify-center items-center px-[3%] cursor-pointer"
                onClick={() =>
                  dispatch(showModal({ data: <RegisterT1 modal={true} /> }))
                }
              >
                <FaPlus className="animate-pulse" />
                <p className="font-normal uppercase p-4 ">{t("register")}</p>
              </div>
            </div> */}
            {/* <Dropdown
              textColor={header == "white" ? "text-primary" : "text-white"}
            /> */}
            {/* <div
              onClick={() => setMobileOpen(true)}
              className=" cursor-pointer text-white flex justify-center items-center gap-x-2"
            >
              <MdDehaze size={24} />
              <p className="text-white">{t("menu")}</p>
            </div> */}
          </div>
        </div>
      </div>
      <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
        {NavElement.map((e) => (
          <LinkElement
            key={e.link}
            name={t(e.name)}
            link={e.link}
            selectedLink={selectedLink}
            onClick={() => {
              setMobileOpen(false);
              handleScroll(e.link);
              setSelectedLink(e.link);
            }}
          />
        ))}
      </Drawer>
      {/* <div className="h-16" /> */}
    </>
  );
};

export default NavBarT2;
