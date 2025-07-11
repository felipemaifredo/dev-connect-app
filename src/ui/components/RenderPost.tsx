import styles from "./styles/renderpost.module.css"
import Image from "next/image"

import imgP from "@/src/resources/assets/p.jpg"

import type { postTypes } from "@/src/types/postsTypes"

export const RenderPost = ({ postData }: { postData: postTypes }) => {
    return (
        <div key={postData.name} className={styles.post_container}>
            <Image
                src={imgP}
                height={80}
                width={80}
                alt="Imagem de pessoa"
            />
            <div className={styles.content_post}>
                <p className={styles.name}><strong>{postData.name}</strong></p>
                <p className={styles.cotent}>{postData.content}</p>
                <div className={styles.btns}>
                    <p className={styles.time}>{postData.time}</p>
                </div>
            </div>
        </div>
    )
}