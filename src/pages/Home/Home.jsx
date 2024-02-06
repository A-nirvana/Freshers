import styles from './Home.module.css'
export default function Home() {
    return (
        <div>
            <img src='/Freshers.svg' className={styles.logo}/>
            <h1 className={styles.heading}>Hello</h1>
        </div>   
    )
}