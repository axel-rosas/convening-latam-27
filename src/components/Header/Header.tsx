import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.borderTop}></div>
      <div className={styles.divider}></div>
      <nav className={styles.navigation}>
        <div className="container-fluid container-md">
          <div className="row justify-content-center">
            <div className="col-auto text-center">
              <a href="" className={styles.nav__item}>
                Asiste
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="" className={styles.nav__item}>
                Información de Registro
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="" className={styles.nav__item}>
                Speakers
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="" className={styles.nav__item}>
                Patrocina
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="" className={styles.nav__item}>
                Programa
              </a>
            </div>
            <div className="col-auto text-center">
              <a href="" className={styles.nav__item}>
                Lima
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
