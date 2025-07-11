"use client"
import styles from "./styles/feedpage.module.css"

import { useState, useEffect } from "react"

import { RenderPost } from "@/src/ui/components/RenderPost"

import type { postTypes } from "@/src/types/postsTypes"

export const ExplorePage = () => {
    const [fetching, setFething] = useState<boolean>(true)
    const [data, setData] = useState<any>()

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`http://localhost:3000/api/posts/get-all`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (!res.ok) {
                    throw new Error("Erro ao buscar dados.")
                }

                const data = await res.json()

                setData(data)

            } catch (error) {
                setData(null)

            } finally {
                setFething(false)
            }
        }

        getData()
    }, [])

    if (fetching) {
        return (
            <div className={styles.feedpage}>
                <h2>Explorar</h2>
                <p>Carregando posts...</p>
            </div>
        )
    }

    return (
        <div className={styles.feedpage}>
            <h2>Explorar</h2>
            <div className={styles.content_container}>
                {data ? (<>
                    {data?.map((post: postTypes) => (
                        <RenderPost key={post.id} postData={post} />
                    ))}
                </>) : (
                    <p>Nenhum dado encontrado!</p>
                )}
            </div>
        </div>
    )
}
