import { getRequestConfig } from "next-intl/server"
import { routing } from "@/src/i18n/routing"
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }
 
  return {
    locale,
    messages: (await import(`../resources/texts/${locale}.json`)).default
  }
})
