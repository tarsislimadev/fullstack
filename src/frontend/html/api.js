import * as Ajax from './ajax.js'

export const saveForm = (form) => Ajax.post(['save'], form)
