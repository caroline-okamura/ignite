import { Post } from "./components/Post"
import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/caroline-okamura.png',
      name: 'Caroline Okamura',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
  
      {type: 'paragraph', content: 'Acabei de subir mais um projeno meu portifólio. É um projeque fiz no NLW Return, evento Rocketseat. O nome do projetoNearby 🚀'},
  
      {type: 'link', content: 'caroline.desinearbyapp'},
    ],
    publishedAt: new Date('2024-12-17 15:10:37'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1733160801035-a6efd307ece6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNjR8fHxlbnwwfHx8fHw%3D',
      name: 'Rafael Silva',
      role: 'RH'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      
      {type: 'paragraph', content: 'Acabei de subir mais um projeno meu portifólio. É um projeque fiz no NLW Return, evento Rocketseat. O nome do projetoNearby 🚀'},
      
      {type: 'link', content: 'caroline.desinearbyapp'},
    ],
    publishedAt: new Date('2024-12-18 14:41:37'),
      },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post => {
          return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
        })}
        </main>
      </div>
    </div>
    
  )
}
