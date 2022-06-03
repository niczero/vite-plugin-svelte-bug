import { createInertiaApp } from '@inertiajs/inertia-svelte'

const app = createInertiaApp({
  page: null,
  render: null,
  resolve: name => import(`./page/${name}.svelte`),
  setup({el, App, props}) {
    new App({target: el, props})
  }
})

export default app
