import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { CommonModules } from './modules';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import AppRootModule from './app.shared/app'
import Navigation from "./app.shared/app.layouts/app.navigation/navigation";
import {Global,MantineProvider, MantineThemeOverride, } from "@mantine/core";
import {AppHeader} from "./app.shared/app.layouts/app.navigation/header";

// @ts-ignore
import fontRegular from './app.shared/app.assets/fonts/GreycliffCF-Regular.woff2'
// @ts-ignore
import fontMedium from './app.shared/app.assets/fonts/GreycliffCF-Medium.woff2'
// @ts-ignore
import fontDemiBold from './app.shared/app.assets/fonts/GreycliffCF-DemiBold.woff2'
// @ts-ignore
import fontBold from './app.shared/app.assets/fonts/GreycliffCF-Bold.woff2'
// @ts-ignore
import fontHeavy from './app.shared/app.assets/fonts/GreycliffCF-Heavy.woff2'

const MANTINE_THEME: MantineThemeOverride = {
    fontFamily: 'Greycliff CF',
}

const GLOBAL_STYLES = [
    {
        '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${fontRegular}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
        },
    },
    {
        '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${fontMedium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
        },
    },
    {
        '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${fontDemiBold}') format("woff2")`,
            fontWeight: 600,
            fontStyle: 'normal',
        },
    },
    {
        '@font-face': {
            // fontFamily: 'Greycliff CF',
            src: `url('${fontBold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
        },
    },
    {
        '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${fontHeavy}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
        },
    },
]

ReactDOM.render(
    <React.StrictMode>
        <Global styles={GLOBAL_STYLES}/>
        <MantineProvider theme={MANTINE_THEME}>
            <BrowserRouter>
                <AppHeader title={ <>ПропускЕсть</> }>
                    <Routes>
                        <Route {...AppRootModule.routeProps}/>
                        {
                            CommonModules.map(module =>
                                    <Route {...module.routeProps}
                                           key={module.name}
                                    />
                            )
                        }
                    </Routes>
                </AppHeader>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
