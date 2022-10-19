import React from "react";
import NewsLetter from "./NewsLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Footer = () => {
  const socialIcons = [
    {
      name: "facebook link",
      href: "#",
      faIcon: faFacebook,
    },
    {
      name: "instagram link",
      href: "#",
      faIcon: faInstagramSquare,
    },
    {
      name: "twitter link",
      href: "#",
      faIcon: faTwitter,
    },
  ];

  const router = useRouter();
  let url = `${router.asPath}`;

  const shareData = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `The Anchor, Digbeth`,
          text: `The Anchor, Digbeth`,
          url: `${url}`,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <footer className="mt-3 border-top border-dark bg-dark text-light">
        <div className="container footer-container">
          <div className="row my-4 fs-5">
            <div className="col-md-5">
              <div className="opening-hours-container text-uppercase">
                <div className="opening-hours">
                  <p className="opening-hours-day">Monday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Tuesday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Wednesday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Thursday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Friday</p>
                  <span className="opening-hours-dots"></span>
                  <p className="opening-hours-time">12:00 - 00:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Saturday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 00:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Sunday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 p-3"></div>

            {/* <div className="col-md-4 address-container"> */}
            <address className="col-md-5 address-container m-0">
              Cartlands Independent <br />
              Kings Heath Park House <br />
              Vicarage Rd <br />
              Birmingham <br />
              B14 7TQ
            </address>
            {/* </div> */}
          </div>
          <div className="d-flex justify-content-center">
            <p className="text-center fs-5">
              Please let us know how we&apos;re doing with a{" "}
              <a href="#" className="link-light">
                review
              </a>
            </p>
          </div>
        </div>
        <div className="social-container border-top border-light">
          <div className="container d-flex justify-content-around fs-3 align-items-center py-4">
            {socialIcons.map((icon, key) => {
              return (
                <React.Fragment key={`3${key}`}>
                  <a
                    href={icon.href}
                    target="_blank"
                    className="social-link"
                    rel="noopener noreferrer"
                    aria-label={icon.name}
                  >
                    <FontAwesomeIcon
                      icon={icon.faIcon}
                      className="social-icon"
                      size="sm"
                    ></FontAwesomeIcon>
                  </a>
                </React.Fragment>
              );
            })}
            <div
              onClick={() => {
                shareData();
              }}
              className="social-link"
            >
              <FontAwesomeIcon
                icon={faShareNodes}
                className="social-icon"
                size="sm"
                aria-label="Page Share Link"
              />
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <div className="container">
            <div className="copyright-container justify-content-center text-center fs-6 text-light">
              <p className="copyright mb-1">
                <span>
                  &copy; 1997 - {new Date().getFullYear()} Cartlands
                  Independent. ALL RIGHTS RESERVED.
                </span>
              </p>
              <br />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link px-3 mb-3 link-light"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link mb-3 link-light"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-center pb-4">
                Website developed by{" "}
                <a href="#" className="link-light">
                  Plan;D
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
