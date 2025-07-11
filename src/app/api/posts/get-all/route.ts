import { NextResponse } from "next/server"
import { supabase } from "@/src/lib/db/supabase"

export async function GET() {
    try {
        const { data, error } = await supabase.from("posts").select("*")
         return NextResponse.json(
            data, 
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { error: "Erro ao buscar dados" }, 
            { status: 500 }
        )
    }
}
