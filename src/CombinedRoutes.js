import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import TvShows from "./views/TvShows/TvShows";


export default function CombinedRoutes(props) {
    return (
        <Switch>
            <Route exact path="/" component={() => <Redirect to="/tv-shows"/>} />
            <Route exact path="/tv-shows" component={() => <TvShows {...props} />} />
        </Switch>
    )
}

