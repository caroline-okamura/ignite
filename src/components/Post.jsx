import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'

export function Post() {
    return (
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder={true} src="https://github.com/caroline-okamura.png"/>
                <div className={styles.authorInfo}>
                <strong>Caroline Okamura</strong>
                <span>Web Developer</span>
                </div>
            </div>

            <time title="17 de Dezembro de 2024" dateTime="17-12-2024 15:10:37">Publicado há uma hora</time>
        </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Nearby 🚀</p>

        <p><a href="#">caroline.design/nearbyapp</a></p>

        <p><a href="#"> #novoprojeto</a>{' '}
        <a href="#">#nlw</a>{' '}
        <a href="#">#rocketseat</a>
        </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
            placeholder="Deixe um comentário" 
            />

            <footer>
                <button type="submit">Publicar</button>
            </footer>
            
        </form>

        <div className={styles.commentList}>
        <Comment />
            <Comment />
            <Comment />
        </div>
       </article>
    )
        
    
}