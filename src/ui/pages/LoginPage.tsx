"use client"

import { useState } from "react"
import { useRouter } from "@/src/i18n/routing"
import { supabase } from "@/src/lib/db/supabase"

export const LoginPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrorMessage(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            setErrorMessage(error.message)
        } else {
            router.push("/feed")
        }
    }

    return (
        <div >
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                >
                    Entrar
                </button>
            </form>
            {errorMessage && (
                <p>{errorMessage}</p>
            )}
        </div>
    )
}
