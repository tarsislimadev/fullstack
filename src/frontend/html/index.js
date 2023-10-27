import { HTML, nInput, nButton } from '@brtmvdl/frontend'

import * as API from './api.js'

const app = HTML.fromId('app')

const email_input = new nInput()
app.append(email_input)

const save_button = new nButton()
save_button.setText('save')
save_button.on('click', () => {
  const email = email_input.getValue()
  API.saveForm({ email })
    .then((res) => console.log({ res }))
    .catch((err) => console.error(err))
})
