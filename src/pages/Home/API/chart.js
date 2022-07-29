import {instance} from '../../../configs'

// creates and exports axios response with necessary route
export const get = (route) => instance.get(route)