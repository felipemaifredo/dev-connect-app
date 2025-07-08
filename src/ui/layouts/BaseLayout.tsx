//
import { Nav } from "@/src/ui/components/Nav"

//
type BaseLayoutTypes = {
    children: React.ReactNode
    locale: string
}

//
export const BaseLayout = ({ children, locale }: BaseLayoutTypes) => {

    function defineLang() {
        if (locale === "pt") {
            return "pt-br"
        }

        if (locale === "en") {
            return "en"
        }

        if (locale === "es") {
            return "es"
        }

        return "pt"
    }

    return (
        <html lang={ defineLang() }>
            <body data-theme="dark">
                <Nav />
                <div className="body_container">
                    {children}
                </div>
            </body>
        </html>
    )
}
