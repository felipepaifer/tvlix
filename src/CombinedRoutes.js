import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import TvShows from "./views/TvShows/TvShows";
import TvShow from "./views/TvShow/TvShow";
import TvShowEpisode from "./views/TvShowEpisode/TvShowEpisode";


export default function CombinedRoutes(props) {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={() => <Redirect to="/tv-shows"/>} />
            <Route
                exact
                path="/tv-shows"
                component={(props) => <TvShows {...props} />} />
            <Route
                exact
                path="/tv-shows/:tvShowId"
                component={(props) => <TvShow {...props} />} />
            <Route
                exact
                path="/tv-shows/:tvShowId/seasons/:seasonNumber/episodes/:episodeNumber"
                component={(props) => <TvShowEpisode {...props} />} />
            <Route path='*' exact={true} component={() => <Redirect to="/tv-shows" />} />
        </Switch>
    )
}

