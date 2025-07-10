import styles from "./styles/feedpage.module.css"

import imgP from "@/src/resources/assets/p.jpg"

import Image from "next/image"
import { supabase } from "@/src/lib/db/supabase"

import type { postTypes } from "@/src/types/postsTypes"

export const FeedPage = async () => {
    const { data, error } = await supabase.from("posts").select("*")

    return (
        <div className={styles.feedpage}>
            <h2>Feed</h2>
            <button>Novo Post</button>
            <div className={styles.content_container}>
                {data?.map((post: postTypes) => (
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
