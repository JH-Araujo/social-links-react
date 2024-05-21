import styles from './styles.module.css'

export default function Button({title}){
    return <a className={styles.card_btn} href="#">{title}</a>
}