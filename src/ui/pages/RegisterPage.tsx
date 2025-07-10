'use client'

import { useState } from "react"
import { supabase } from "@/src/lib/db/supabase"

export const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState<string | null>(null)

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setMessage(null)

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            setMessage(`Erro: ${error.message}`)
        } else {
            setMessage('Cadastro realizado! Verifique seu email para confirmar.')
        }
    }

    return (
        <div>
            <h1>Registrar</h1>
            <form onSubmit={handleRegister} className="space-y-4">
                <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                >
                    Registrar
                </button>
            </form>

            {message && <p>{message}</p>}
        </div>
    )
}
