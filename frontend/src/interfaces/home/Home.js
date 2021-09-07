import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "./home.css";
const Home = () => {
    return (
        <div className="HOME__PAGE">
            <div className="navbar FULL-HIEGTH">
                <nav className="nav__mobile"></nav>
                <div className="navbar__container">
                    <div className="navbar__inner">
                        <a className="navbar__logo">
                            <span style={{ color: "#fff" }}>Smart Shcool</span>
                        </a>
                        <nav className="navbar__menu">
                            <ul className="home__navbar__list">
                                <li className="navbar__list__items">
                                    <NavLink
                                        to="/login"
                                        className="navbar__link"
                                    >
                                        <span
                                            style={{
                                                color: "#fff",
                                                fontSize: 20,
                                            }}
                                        >
                                            Sign In
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="navbar__list__items">
                                    <NavLink
                                        to="/register"
                                        className="navbar__link"
                                    >
                                        <span
                                            style={{
                                                color: "#fff",
                                                fontSize: 20,
                                            }}
                                        >
                                            Sign Up
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="navbar__menu-mob">
                            <a id="toggle">
                                <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                        class=""
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero__overlay hero__overlay--gradient"></div>
                <div className="hero__mask"></div>
                <div className="hero__inner">
                    <div className="hero__header__top">
                        <div className="hero__content">
                            <div
                                className="hero__content__inner"
                                id="navConverter"
                            >
                                <h1 className="hero__title">
                                    A production-ready theme for your projects
                                </h1>
                                <p className="hero__text">
                                    Evie is an MIT licensed template bundled
                                    with a minimal style guide to build websites
                                    faster. It is extemely lightweight,
                                    customizable and works perfectly on modern
                                    browsers.
                                </p>
                                <a
                                    href="#"
                                    className="home__button button__accent"
                                >
                                    Download Evie
                                </a>
                                <div
                                    className="home__button hero__button"
                                    style={{ borderColor: "#333" }}
                                >
                                    <span style={{ color: "#333" }}>
                                        Learn more
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="steps landing__section">
                <div className="landing__container">
                    <h2>Who can use SmartSchool</h2>
                    <p>
                        Here's who we can think of, but surely creative people
                        will surprise us.
                    </p>
                </div>
                <div className="landing__container">
                    <div className="steps__inner">
                        <div className="step">
                            <div className="step__media">
                                <img
                                    src="/assets/undraw_design.svg"
                                    className="step__image"
                                />
                            </div>
                            <h4>Students</h4>
                            <p className="step__text">
                                A Student can see the history of his absence ,
                                the date of the exams and his average
                            </p>
                        </div>
                        <div className="step">
                            <div className="step__media">
                                <img
                                    src="/assets/undraw_responsive.svg"
                                    className="step__image"
                                />
                            </div>
                            <h4>Administartion</h4>
                            <p className="step__text">
                                the administration can consult and manage all
                                the students and teachers information
                            </p>
                        </div>
                        <div className="step">
                            <div className="step__media">
                                <img
                                    src="/assets/undraw_creation.svg"
                                    className="step__image"
                                />
                            </div>
                            <h4>Teachers</h4>
                            <p className="step__text">
                                A teacher can see all the students he studies ,
                                list the subject averages , give attendance to
                                students by departments, and can create exam
                                dates for students
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded sections */}
            <div className="expanded landing__section">
                <div className="expanded__container">
                    <div className="expanded__inner">
                        <div className="expanded__media">
                            <img
                                src="/assets/undraw_browser.svg"
                                className="expanded__image"
                            />
                        </div>
                        <div className="expanded__content">
                            <h2 className="expanded__title">
                                Natural styling with almost nothing to learn
                            </h2>
                            <p className="expanded__text">
                                Evie brings you the pages you'll need and the
                                structure to create your own, without a learning
                                curve. It is minimal and mostly styles plain
                                elements. There are only a few classNamees
                                you'll need to know but nothing to disrupt your
                                preferred coding style.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="expanded landing__section">
                <div className="expanded__container">
                    <div className="expanded__inner">
                        <div className="expanded__media">
                            <img
                                src="/assets/undraw_frameworks.svg"
                                className="expanded__image"
                            />
                        </div>
                        <div className="expanded__content">
                            <h2 className="expanded__title">
                                Framework agnostic. Your front-end setup, your
                                choice.
                            </h2>
                            <p className="expanded__text">
                                Evie has zero dependencies and uses vanilla
                                JavaScript for a few functions with minimal
                                footprint. You can use React, Vue, Angular,
                                jQuery or whatever you prefer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="expanded landing__section">
                <div className="expanded__container">
                    <div className="expanded__inner">
                        <div className="expanded__media">
                            <img
                                src="/assets/together.svg"
                                className="expanded__image"
                            />
                        </div>
                        <div className="expanded__content">
                            <h2 className="expanded__title">
                                Ready for production or rapid prototyping
                            </h2>
                            <p className="expanded__text">
                                Landing, authentication and a few other pages to
                                select from, despite the small size. Tested on
                                production at unDraw with amazing speeds and
                                unopinionated on how to structure your project.
                                We really hope you'll find it awesome and
                                useful!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer footer--dark">
                <div className="footer__container">
                    <div className="footer__inner">
                        <label className="footer__textLogo">Smart School</label>
                        <div className="footer__data">
                            <div className="footer__data__item">
                                <div className="footer__row">
                                    Created by
                                    <div className="footer__link">
                                        <span className="footer__span__item">
                                            Go My Code Team
                                        </span>
                                    </div>
                                </div>
                                <div className="footer__row FULL__WIDTH">
                                    Code/design by
                                    <span className="footer__link">
                                        Oussema Ghaoui And Hatem Kthiri
                                    </span>
                                </div>
                            </div>
                            <div className="footer__data__item">
                                <div className="footer__row">
                                    Created for
                                    <a
                                        href="https://undraw.co"
                                        target="_blank"
                                        className="footer__link"
                                    >
                                        <span className="footer__span__item">
                                            School Manegment
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="footer__data__item">
                                <div className="footer__row">
                                    <a
                                        href="https://github.com/anges244/evie"
                                        target="_blank"
                                        className="footer__link">
                                        GitHub
                                    </a>
                                </div>
                                <div className="footer__row">
                                    <a
                                        href="https://twitter.com/undraw_co"
                                        target="_blank"
                                        className="footer__link">
                                        Twitter
                                    </a>
                                </div>
                                <div className="footer__row">
                                    <a
                                        href="https://www.facebook.com/undraw.co/"
                                        target="_blank"
                                        className="footer__link">
                                        Facebook
                                    </a>
                                </div>
                                <div className="footer__row">
                                    <a
                                        href="./additional.html"
                                        className="footer__link">
                                        MIT license
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
