import { flow, types } from 'mobx-state-tree';

const Film = types.model('Film', {
    episode_id: types.identifierNumber,
    title: types.maybeNull(types.string),
    opening_crawl: types.maybeNull(types.string),
    characters : types.optional(types.array(types.string), []),
    director: types.maybeNull(types.string),
    producer: types.maybeNull(types.string),
    release_date: types.maybeNull(types.string),
    isFaved: types.optional(types.boolean, false)
})
.actions(self => ({
    
    toggleFave: flow(function* () {
        console.log("toggleFaved")
        self.isFaved = !self.isFaved
    })
    
}))
.views(self => ({
    niceReleaseDate(){
        return Date(self.release_date)
    }
}));

export default Film