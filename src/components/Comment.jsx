import { useState } from "react";
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment,}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
      onDeleteComment(content);;
    }
    
    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
          });
      }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1733160801035-a6efd307ece6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjR8fHxlbnwwfHx8fHw%3D"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Silva</strong>
                            <time title="17 de Dezembro de 2024" dateTime="17-12-2024 15:10:37">Cerca de uma hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}