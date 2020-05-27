import React from 'react'
import { Switch, Route } from "react-router-dom";
import TvShows from "./views/TvShows/TvShows";


export default function CombinedRoutes(props) {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={() => <TvShows {...props}/>} />
        </Switch>
    )
}

