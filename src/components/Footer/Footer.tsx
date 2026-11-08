import { pcma } from "../../assets/images/pcma";
import { footerLinks } from "./footerLinks";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.footer__top}>
        <div className={`container ${styles.container}`}>
          <div className="row">
            <div className={`col-12 col-lg-4 d-flex flex-column align-items-center ${styles.contact}`}>
              <img src={pcma.logo} alt="" className={styles.footer__logo} />
              <div
                className="d-flex flex-column align-items-center"
              >
                <span>200 E. Randolph St.</span>
                <span>Suite 7150</span>
                <span>Chicago, IL 60601</span>
                <span>United States</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>
                  <a href="tel:+18778277262">+1 877-827-7262</a> (toll-free)
                </span>
                <span>
                  <a href="tel:+13124237262">+1 312-423-7262</a> (main)
                </span>
              </div>
              <div className={styles.socials}>
                <a href="" aria-label="PCMA en Facebook">
                  <FaFacebookF aria-hidden="true" />
                </a>
                <a href="" aria-label="PCMA en X">
                  <FaXTwitter aria-hidden="true" />
                </a>
                <a href="" aria-label="PCMA en LinkedIn">
                  <FaLinkedinIn aria-hidden="true" />
                </a>
                <a href="" aria-label="PCMA en Instagram">
                  <FaInstagram aria-hidden="true" />
                </a>
                <a href="" aria-label="PCMA en YouTube">
                  <FaYoutube aria-hidden="true" />
                </a>
              </div>
            </div>
            <div
              className={`col-12 col-lg-8 ${styles.footer__links}`}
            >
              {footerLinks.map((group) => (
                <section className={styles.group} key={group.title}>
                  <h3 className={styles.group__title}>
                    {group.title}
                  </h3>
                  <div
                    className={`d-flex flex-wrap ${styles.group__links}`}
                  >
                    {group.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={`container ${styles.container}`}>
          <div className="row">
            <div className="col-12 col-lg-auto py-3 d-flex justify-content-center gap-3 flex-wrap">
              <img
                className={`${styles.footer__icon}`}
                src={pcma.convene}
                alt=""
              />
              <img
                className={`${styles.footer__icon}`}
                src={pcma.cema}
                alt=""
              />
              <img
                className={`${styles.footer__icon}`}
                src={pcma.institute}
                alt=""
              />
              <img
                className={`${styles.footer__icon}`}
                src={pcma.foundation}
                alt=""
              />
            </div>
            <div className="col-12 col-lg py-3 d-flex flex-row justify-content-center justify-content-lg-end align-items-center flex-wrap">
              <a href="" className="">
                Help
              </a>
              <a href="" className="">
                Privacy Policy
              </a>
              <a href="" className="">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
