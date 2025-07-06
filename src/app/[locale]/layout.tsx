//
import { setRequestLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"

//
type LayoutTypes = {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}

//
export default async function LocaleLayout({ children, params }: Readonly<LayoutTypes>) {
    const [ locale, messages ] = await Promise.all([
        (await params).locale,
        getMessages()
    ])
    setRequestLocale(locale)

    return (
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
