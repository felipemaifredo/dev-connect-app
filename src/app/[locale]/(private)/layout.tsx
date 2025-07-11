"use client"

import { useEffect } from "react"
import { useRouter } from "@/src/i18n/routing"
import { useAuthStore } from "@/src/lib/store/useAuthStore"

type LayoutTypes = {
    children: React.ReactNode
}

export default function LocaleLayout({ children }: Readonly<LayoutTypes>) {

    const user = useAuthStore((state) => state.user)
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push("/login")
        }
    }, [user])

    if (!user) return null

    return (<>
        {children}
    </>)
}
