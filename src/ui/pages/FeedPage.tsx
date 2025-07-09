import styles from "./styles/feedpage.module.css"

import imgP from "@/src/resources/assets/p.jpg"

import type { postTypes } from "@/src/types/postsTypes"
import Image from "next/image"

const posts: postTypes[] = [
    {
        image: "",
        name: "Sophia Bennett",
        content: "Sharing insights on the latest tech trends and their impact on our daily lives. Let's discuss!",
        likes: Math.floor(Math.random() * 1000),
        time: "2h"
    },
    {
        image: "",
        name: "Ethan Carter",
        content: "Just finished a great book on sustainable living. Highly recommend it to anyone interested in eco-friendly practices.",
        likes: Math.floor(Math.random() * 1000),
        time: "1d"
    },
    {
        image: "",
        name: "Olivia Davis",
        content: "Exploring the city's hidden gems today. Found a cozy cafe with the best coffee!",
        likes: Math.floor(Math.random() * 1000),
        time: "3d"
    },
    {
        image: "",
        name: "Liam Anderson",
        content: "Attended an amazing tech meetup last night. So many innovative minds in one place!",
        likes: Math.floor(Math.random() * 1000),
        time: "5h"
    },
    {
        image: "",
        name: "Emma Johnson",
        content: "Trying out minimalism in daily life. Decluttering feels so refreshing!",
        likes: Math.floor(Math.random() * 1000),
        time: "4d"
    },
    {
        image: "",
        name: "Noah Brown",
        content: "Anyone else obsessed with AI-generated art lately? It's fascinating.",
        likes: Math.floor(Math.random() * 1000),
        time: "12h"
    },
    {
        image: "",
        name: "Ava Wilson",
        content: "Visited a nature reserve this weekend. So peaceful and energizing.",
        likes: Math.floor(Math.random() * 1000),
        time: "2d"
    },
    {
        image: "",
        name: "Mason Lee",
        content: "Learning JavaScript has been a rollercoaster. But I'm finally getting the hang of it!",
        likes: Math.floor(Math.random() * 1000),
        time: "6h"
    },
    {
        image: "",
        name: "Isabella Martinez",
        content: "What’s everyone watching on Netflix lately? Need good recommendations.",
        likes: Math.floor(Math.random() * 1000),
        time: "3h"
    },
    {
        image: "",
        name: "Lucas Garcia",
        content: "Started composting at home! Small steps for a greener planet 🌱",
        likes: Math.floor(Math.random() * 1000),
        time: "5d"
    },
    {
        image: "",
        name: "Mia Robinson",
        content: "Just discovered a productivity hack that’s actually working. DM me if curious!",
        likes: Math.floor(Math.random() * 1000),
        time: "1h"
    },
    {
        image: "",
        name: "Elijah Walker",
        content: "Tried deep work for 2 hours straight. Got more done than the last 3 days!",
        likes: Math.floor(Math.random() * 1000),
        time: "8h"
    },
    {
        image: "",
        name: "Amelia Hall",
        content: "Baked homemade cookies for the first time 🍪 Turned out great!",
        likes: Math.floor(Math.random() * 1000),
        time: "6d"
    },
    {
        image: "",
        name: "James Allen",
        content: "Started reading 'Atomic Habits' — already rethinking my daily routine.",
        likes: Math.floor(Math.random() * 1000),
        time: "9h"
    },
    {
        image: "",
        name: "Harper Young",
        content: "What are some good freelance platforms for designers? Open to suggestions.",
        likes: Math.floor(Math.random() * 1000),
        time: "7h"
    },
    {
        image: "",
        name: "Benjamin Hernandez",
        content: "Attended an online workshop about sustainability. Learned so much!",
        likes: Math.floor(Math.random() * 1000),
        time: "2d"
    },
    {
        image: "",
        name: "Evelyn King",
        content: "Trying to balance work and personal life is a real challenge. Any tips?",
        likes: Math.floor(Math.random() * 1000),
        time: "3d"
    },
    {
        image: "",
        name: "Henry Wright",
        content: "Just saw a meteor shower! Nature is incredible.",
        likes: Math.floor(Math.random() * 1000),
        time: "10h"
    },
    {
        image: "",
        name: "Abigail Lopez",
        content: "Is it just me or is journaling seriously underrated?",
        likes: Math.floor(Math.random() * 1000),
        time: "4h"
    },
    {
        image: "",
        name: "Daniel Scott",
        content: "Experimenting with meal prep — saves time and money!",
        likes: Math.floor(Math.random() * 1000),
        time: "1d"
    }
]

export const FeedPage = () => {
    return (
        <div className={styles.feedpage}>
            <h2>Feed</h2>
            <button>Novo Post</button>
            <div className={styles.content_container}>
                {posts.map((post: postTypes) => (
                    <div key={post.name} className={styles.post_container}>
                        <Image 
                            src={imgP} 
                            height={80} 
                            width={80} 
                            alt="Imagem de pessoa" 
                        />
                        <div className={styles.content_post}>
                            <p className={styles.name}><strong>{post.name}</strong></p>
                            <p className={styles.cotent}>{post.content}</p>
                            <div className={styles.btns}>
                                <p className={styles.time}>{post.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
