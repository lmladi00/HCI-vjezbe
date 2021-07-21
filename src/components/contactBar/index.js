//izgled i logika
//containter je main//

import React from 'react'

//novija verzija za gatsby (v3), umjesto import styles
import * as styles from './style.module.css'

//main class ne moze nego po dogovoru className
const ContactBar = () => (
    <main className={styles.container}>
      <span>example@email.com</span>
      <span>+0385911122334</span>
    </main>
  )

export default ContactBar