import {component$, createContext, useContextProvider, useStore, useStyles$} from '@builder.io/qwik';
import {QwikCityProvider, RouterOutlet, ServiceWorkerRegister} from '@builder.io/qwik-city';
import {RouterHead} from './components/router-head/router-head';

import globalStyles from './global.css?inline';

export const globalContext = createContext<{ theme: 'mytheme' | 'dark', dir: 'rtl' | 'ltr' }>('global-context')

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Dont remove the `<head>` and `<body>` elements.
     */
    useStyles$(globalStyles);

    const state = useStore<{ theme: 'mytheme' | 'dark', dir: 'rtl' | 'ltr' }>({
        theme: 'mytheme',
        dir: 'ltr'
    })
    useContextProvider(globalContext, state)

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8"/>
                <link rel="manifest" href="/manifest.json"/>
                <RouterHead/>
            </head>
            <body lang="en" dir={state.dir} data-theme={state.theme} class="min-h-screen">
            <RouterOutlet/>
            <ServiceWorkerRegister/>
            </body>
        </QwikCityProvider>
    );
});
