import React, { useEffect, useState } from "react";
//Component
import Input from "./Input";
// SVG
import {
    EnvelopeHeader,
    UserWhite,
    Plus,
    HamburgerMenu,
    Logo,
    ShoppingCart,
    Phone,
    Favourite,
    SearchIcon,
    BackArrowMobileIcon,
    LogoPnMobile,
    PostMobileIcon,
    UserMobileIcon,
    FavMobileIcon,
    InvoiceMobileIcon,
    MsgMobileIcon,
    LogoutMobileIcon,
    ShopMobileIcon,
    ServiceMobileIcon,
    HelpMobileIcon,
} from "../../../svg";

const Header = () => {
    const [showhide, setShowhide] = useState("");
    const [showhideMobileMenu, setShowhidemobilemenu] = useState("");

    const toggleDropdown = () => {
        setShowhide(showhide == "" ? "show" : "");
    };

    const toggleMobileMenu = () => {
        setShowhidemobilemenu(showhideMobileMenu == "" ? "open" : "");
    };

    if (typeof window !== "undefined") {
        window.addEventListener("click", function (event) {
            if (
                showhide === "show" &&
                event.target.className !== "dropdown-toggle"
            ) {
                setShowhide("");
            }
        });
    }

    return (
        <div>
            <header className="header">
                <div>
                    <div className="header-top">
                        <div className="container inner-block">
                            <HamburgerMenu
                                className="ham-menu"
                                onClick={toggleMobileMenu}
                            />
                            <a className="header-logo-mb" href="./index.html">
                                <Logo />
                            </a>

                            <div className="header-top-wrap">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="#">Elanlar</a>
                                        </li>
                                        <li>
                                            <a href="./shop.html">Ma??azalar</a>
                                        </li>
                                        <li>
                                            <a href="#">Xidm??tl??r</a>
                                        </li>
                                        <li>
                                            <a href="#">D??st??k</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-top-wrap header-top-right">
                                <a href="#">
                                    <Phone className="icon icon-phone1" />
                                    <span>(012) 525 83 08</span>
                                </a>
                                <a href="#">
                                    <i className="icon">
                                        <EnvelopeHeader />
                                    </i>
                                    <span>xxxx@xxxx.az</span>
                                </a>
                                <a href="#">
                                    <Favourite />
                                </a>
                                <a href="#">
                                    <i className="icon">
                                        <ShoppingCart />
                                    </i>
                                </a>
                                <a href="#">
                                    <i className="icon">
                                        <UserWhite />
                                    </i>
                                    <span>Giri??</span>
                                </a>

                                <div
                                    className="dropdown"
                                    onClick={toggleDropdown}
                                >
                                    <a
                                        className="dropdown-toggle"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        href="#"
                                        aria-expanded="false"
                                    >
                                        AZ
                                    </a>
                                    <div
                                        className={`dropdown-menu dropdown-menu-right ${showhide}`}
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a className="dropdown-item" href="#">
                                            AZ
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            RU
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            EN
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-main">
                        <div className="container inner-block">
                            <a href="./index.html" title="XXXX.AZ">
                                <Logo className="header-main-logo" />
                            </a>
                            <div className="main-search">
                                <Input
                                    type="search"
                                    className="header-main-input"
                                    id="head-search-field"
                                    input-block
                                    placeholder="Axtar????..."
                                    icon={<SearchIcon />}
                                />
                            </div>
                            <a href="#" className="header-main-btn">
                                <Plus />
                                ELAN YERL????D??R
                            </a>
                        </div>
                    </div>

                    <div className="search-box">
                        <ul className="search-box-list">
                            <li className="search-box-list-item">
                                <p>
                                    <span className="search-box-black">
                                        acer
                                    </span>
                                    <span className="search-box-pn">
                                        Acer kateqoriyas??nda
                                    </span>
                                </p>{" "}
                                <a href="#">kateqoriyaya ke??m??k</a>
                            </li>
                            <li className="search-box-list-item">
                                <p>
                                    <span className="search-box-black">
                                        acer
                                    </span>
                                    <span className="search-box-pn">
                                        Acer kateqoriyas??nda
                                    </span>
                                </p>{" "}
                                <a href="#">kateqoriyaya ke??m??k</a>
                            </li>
                            <li className="search-box-list-item">
                                <p>
                                    <span className="search-box-black">
                                        acer
                                    </span>
                                    <span className="search-box-pn">
                                        Acer kateqoriyas??nda
                                    </span>
                                </p>{" "}
                                <a href="#">kateqoriyaya ke??m??k</a>
                            </li>
                            <li className="search-box-list-item">
                                <p>
                                    <span className="search-box-black">
                                        acer
                                    </span>
                                    <span className="search-box-pn">
                                        Acer kateqoriyas??nda
                                    </span>
                                </p>{" "}
                                <a href="#">kateqoriyaya ke??m??k</a>
                            </li>
                        </ul>
                        <div className="row search-box-wrap">
                            <div className="col-md-4 col-xs-12 search-box-wrap-item">
                                <img
                                    className="search-box-wrap-item-img"
                                    src="./src/img/xps-zcbtpjgToUY-unsplash.jpg"
                                    alt=""
                                />
                                <div className="search-box-wrap-item-cont">
                                    <h3 className="search-box-wrap-item-name">
                                        Noutbuk ??antas?? HP Value Top Case
                                    </h3>
                                    <p className="search-box-wrap-item-price">
                                        21 AZN
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 search-box-wrap-item">
                                <img
                                    className="search-box-wrap-item-img"
                                    src="./src/img/xps-zcbtpjgToUY-unsplash.jpg"
                                    alt=""
                                />
                                <div className="search-box-wrap-item-cont">
                                    <h3 className="search-box-wrap-item-name">
                                        Noutbuk ??antas?? HP Value Top Case
                                    </h3>
                                    <p className="search-box-wrap-item-price">
                                        21 AZN
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 search-box-wrap-item">
                                <img
                                    className="search-box-wrap-item-img"
                                    src="./src/img/xps-zcbtpjgToUY-unsplash.jpg"
                                    alt=""
                                />
                                <div className="search-box-wrap-item-cont">
                                    <h3 className="search-box-wrap-item-name">
                                        Noutbuk ??antas?? HP Value Top Case
                                    </h3>
                                    <p className="search-box-wrap-item-price">
                                        21 AZN
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`menu ${showhideMobileMenu}`}>
                    <div className="menu-header">
                        <a href="#!" id="backMenu" onClick={toggleMobileMenu}>
                            <BackArrowMobileIcon />
                        </a>
                        <LogoPnMobile />
                        <div className="dropdown" onClick={toggleDropdown}>
                            <a
                                className="dropdown-toggle"
                                id="dropdownMenuButtonMb"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                href="#"
                                aria-expanded="false"
                            >
                                AZ
                            </a>
                            <div
                                className={`dropdown-menu dropdown-menu-right ${showhide}`}
                            >
                                <a className="dropdown-item" href="#!">
                                    AZ
                                </a>
                                <a className="dropdown-item" href="#!">
                                    RU
                                </a>
                                <a className="dropdown-item" href="#!">
                                    EN
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li className="menu-list-item menu-list-welcome">
                            Xo?? g??lmisiniz, <b>XXXX.AZ</b>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <PostMobileIcon />
                                M??nim elanlar??m
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <UserMobileIcon />
                                Profil m??lumatlar??
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <FavMobileIcon />
                                Se??ilmi??l??r
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <InvoiceMobileIcon />
                                Hesab fakturalar
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <MsgMobileIcon />
                                Mesajlar
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <LogoutMobileIcon />
                                ????x????
                            </a>
                        </li>
                    </ul>

                    <hr className="menu-list-line" />

                    <ul className="menu-list">
                        <li className="menu-list-item">
                            <a href="#!">
                                <PostMobileIcon />
                                Elanlar
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <ShopMobileIcon />
                                Ma??azalar
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <ServiceMobileIcon />
                                Xidm??tl??r
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#!">
                                <HelpMobileIcon />
                                D??st??k
                            </a>
                        </li>
                    </ul>

                    <div className="footer-sub">
                        <div className="line"></div>
                        <p className="copyright">
                            XXXX.az - ?? 2021 B??t??n h??quqlar qorunur
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
