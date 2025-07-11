"use client"
import styles from "./styles/feedpage.module.css"

import { useState, useEffect } from "react"

import { RenderPost } from "@/src/ui/components/RenderPost"

import type { postTypes } from "@/src/types/postsTypes"

import { useAuthStore } from "@/src/lib/store/useAuthStore"

export const FeedPage = () => {
    const [fetching, setFething] = useState<boolean>(true)
    const [data, setData] = useState<any>()
    const user = useAuthStore((state) => state.user)

    if (fetching) {
        return (
            <div className={styles.feedpage}>
                <h2>Feed</h2>
                 <h1>Bem-vindo, {user?.email}</h1>
                <p>Carregando posts...</p>
            </div>
        )
    }

    return (
        <div className={styles.feedpage}>
            <h2>Feed</h2>
            <h1>Bem-vindo, {user?.email}</h1>
            <button>Novo Post</button>
            <div className={styles.content_container}>
                {data?.map((post: postTypes) => (
                    <RenderPost key={post.id} postData={post} />
                ))}
            </div>
        </div>
    )
}
