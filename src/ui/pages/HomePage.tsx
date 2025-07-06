import { useTranslations } from "next-intl"

export const HomePage = () => {
    const t = useTranslations("Configs")

    return (
        <main>
            <div>Hello world! {t("locale")}</div>
        </main>
    )
}