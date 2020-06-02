export class TvShow {
    constructor({
        id,
        name,
        coverImage,
        summary,
        episodes
    }){
        this.id = id
        this.name = name
        this.coverImage = coverImage
        this.summary = summary
        this.episodes = episodes
    }

    get episodesGroupedBySeason() {
        const groupBy = function(xs, key) {
            return xs.reduce(function(rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        }

        const groupedBy = groupBy(this.episodes, "season")
        return groupedBy
    }
}
