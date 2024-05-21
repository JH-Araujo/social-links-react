import profileImg from '../../assets/profileImg.jpg'
import styles from './styles.module.css'
import Button from '../Button'

export default function Card(){
    return(
        <section className={styles.card_container}>
    <div className={styles.card_profile}>
      <img className={styles.profile_img} src={profileImg} alt="Image Profile" />
      
        <div className={styles.card_title}>
        <h1>João Henrique</h1>
        <span>São Paulo, Brasil</span>
        <p>"Desenvolvedor Front-End"</p> 
        </div>
        
        <div className={styles.card_links}>
          <Button title="Portifólio"/>
          <Button title="GitHub" />
          <Button title="LinkedIn" />
          <Button title="Instagram" />
          <Button title="Facebook" />
    </div>
    </div>
   
  </section>
    )
}