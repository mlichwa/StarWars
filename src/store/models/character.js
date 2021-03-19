import { types, flow, applySnapshot } from 'mobx-state-tree';


export const Character = types.model('Character', {
    id: types.string,
    name: types.string
})