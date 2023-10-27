import app from './app.js'
import { CloudflareRequest, CloudflareResponse } from '@brtmvdl/backend'

export default {
	async fetch(request, env, ctx) {
		const req = new CloudflareRequest(request)
		const res = new CloudflareResponse(req)

		return Promise.resolve(app.run(req, res))

		// return Promise.resolve(new Response('Hello World!'))
	},
}
