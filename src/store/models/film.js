import { types, flow, applySnapshot } from 'mobx-state-tree';


export const Film = types.model('Film', {
    id: types.string,
    title: types.string,
    episode_id: types.string,
    opening_crawl: types.string,
    director: types.string,
    // characters: types.optional(types.array(Character), []),
})

export default Film