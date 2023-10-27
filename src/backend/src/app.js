import { Router } from '@brtmvdl/backend'

const router = new Router()

router.get('/', (_, res) => res.setJSON({ get_id: Date.now() }))

router.post('/', (_, res) => res.setJSON({ post_id: Date.now() }))

export default router
