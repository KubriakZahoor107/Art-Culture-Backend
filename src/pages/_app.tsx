import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps<{ locale: string; session: any }>) {
  const { locale = 'uk', session, ...rest } = pageProps
  const messages = require(`../../messages/${locale}.json`)
  return (
    <SessionProvider session={session}>
      <NextIntlProvider locale={locale} messages={messages}>
        <Component {...rest} />
      </NextIntlProvider>
    </SessionProvider>
  )
}
