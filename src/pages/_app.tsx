import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import {
  Roboto,
  Sora,
  Poppins,
  Manrope,
  Space_Grotesk,
  Be_Vietnam_Pro,
  Inter,
  Mulish,
  DM_Sans,
} from 'next/font/google'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
// handle more advanced cases than URLSearchParams supports.
import queryString from 'query-string'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryParamProvider } from 'use-query-params'

import NextAdapterPages from 'components/layout/NextAdapterPages'
import { ProtectedLayout } from 'components/layout/ProtectedLayout'
import NextProgress from 'components/ui/Progress/NextProgress'
import { wrapper } from 'redux/store'
import 'styles/index.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-sora',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-mulish',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

type AppPropsWithAuth = AppProps<{ session: Session }> & {
  Component: {
    requireAuth?: boolean
  }
}

const App = ({ Component, pageProps: { session, ...otherProps } }: AppPropsWithAuth) => {
  if (process.env.NODE_ENV === 'production') {
    // Polyfill để tắt console.log trong production
    console.log = function () {}
  }
  const { store: storeWrapper, props: pageProps } = wrapper.useWrappedStore(otherProps)
  return (
    <ReduxProvider store={storeWrapper}>
      <QueryParamProvider
        adapter={NextAdapterPages}
        options={{
          searchStringToObject: queryString.parse,
          objectToSearchString: queryString.stringify,
        }}
      >
        <ConfigProvider>
          <SessionProvider session={session}>
            {Component.requireAuth ? (
              <ProtectedLayout>
                <main
                  className={`
                  ${roboto.variable}
                  ${sora.variable} 
                  ${poppins.variable} 
                  ${manrope.variable} 
                  ${spaceGrotesk.variable} 
                  ${beVietnamPro.variable} 
                  ${inter.variable} 
                  ${mulish.variable}
                  ${dmSans.variable}
                  flex min-h-screen flex-col font-roboto`}
                >
                  <NextProgress />
                  <Component {...pageProps} />
                </main>
              </ProtectedLayout>
            ) : (
              <main
                className={`
                ${roboto.variable} 
                ${sora.variable} 
                ${poppins.variable} 
                ${manrope.variable} 
                ${spaceGrotesk.variable} 
                ${beVietnamPro.variable} 
                ${inter.variable} 
                ${mulish.variable}
                ${dmSans.variable}
                flex min-h-screen flex-col font-roboto`}
              >
                <NextProgress />
                <Component {...pageProps} />
              </main>
            )}
          </SessionProvider>
        </ConfigProvider>
      </QueryParamProvider>
    </ReduxProvider>
  )
}

export default App
