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
import {MantineProvider, MantineThemeOverride, } from "@mantine/core";
import {AppHeader} from "./app.shared/app.layouts/app.navigation/header";

const MANTINE_THEME: MantineThemeOverride = {
    colors: {
    },
    primaryColor: '',

}

ReactDOM.render(
    <React.StrictMode>
        <MantineProvider>
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
