<script lang="ts">
  import favicon from '$lib/assets/favicon.svg'
  import '../app.css'
  import { onMount } from 'svelte'
  import { HomePageState } from './state.svelte'
  import AppBar from '$components/AppBar.svelte'
  import Footer from '$components/Footer.svelte'

  let { children } = $props(),
    pageState = new HomePageState()

  onMount(() => {
    pageState.initScollSmoother()
  })
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<AppBar />

<div id="smooth-wrapper">
  <div id="smooth-content">
    {@render children?.()}
    <Footer />
  </div>
</div>
