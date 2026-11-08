import { useLayoutEffect, useRef } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const previousHeight = root.style.getPropertyValue("--header-height");
    const updateHeight = () => {
      root.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      if (previousHeight) root.style.setProperty("--header-height", previousHeight);
      else root.style.removeProperty("--header-height");
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.borderTop}></div>
      <div className={styles.divider}></div>
      <nav className={styles.navigation} aria-label="Navegación principal">
        <div className="container-fluid container-md">
          <div className={`row justify-content-center ${styles.navItems}`}>
            <div className="col-auto text-center">
              <span aria-disabled="true" className={styles.nav__item}>
                Asiste
              </span>
            </div>
            <div className="col-auto text-center">
              <a href="#pricing" className={styles.nav__item}>
                Información de Registro
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="#speakers" className={styles.nav__item}>
                Speakers
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="#partners" className={styles.nav__item}>
                Patrocina
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="#agenda" className={styles.nav__item}>
                Programa
              </a>
            </div>
            <div className="col-auto text-center">
              <span aria-disabled="true" className={styles.nav__item}>
                Lima
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
