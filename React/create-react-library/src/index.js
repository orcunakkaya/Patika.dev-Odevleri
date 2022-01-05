import React from 'react'
import styles from './styles.module.css'

export const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>
}
