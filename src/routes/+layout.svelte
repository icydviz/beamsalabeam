<script lang="ts">
  import favicon from '$lib/assets/favicon.svg'
  import '../app.css'
  import { onMount } from 'svelte'
  import { HomePageState } from './state.svelte'

  let { children } = $props(),
    pageState = new HomePageState()

  onMount(() => {
    pageState.initScollSmoother()
  })
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
