import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=310&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"/>

            <div className={styles.profile}>
                <Avatar hasBorder={true}src="https://avatars.githubusercontent.com/u/174622774?v=4" />
                <strong>Caroline Okamura</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )

}