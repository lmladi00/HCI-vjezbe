import React from 'react'
import * as styles from './style.module.css'

const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']
//ovo nije bas dobar nacin, drugi put cemo rijesiti, na 3.vj
const Footer = () => (
  <footer className={styles.footer}>
      <ul className={styles.address}>
          <li className={styles.title}>
              VILA OLIVA VERDE
          </li>
          <li>Štrped 24</li>
          <li>521000 Vinkuran</li>
          <li className={styles.phone}>
              +385 99 11223344
          </li>
          <li>example@email.com</li>
      </ul>
      <ul className={styles.navigation}>
          {navTabs.map(tab =>
            <li>{tab}</li>)
          }
      </ul>
  </footer>
)

export default Footer