<script lang="ts">
  import { website } from '$lib'
  import { l } from '$lib/shared.svelte'
  import MetaHome from '$components/MetaHome.svelte'
  import Footer from '$components/Footer.svelte'
  import WorkSteps from '$components/WorkSteps.svelte'
</script>

<MetaHome />

<section class="hero h-screen">
  <div class="hero-content">
    <div class="max-w-md text-center">
      <h1 class="text-title gentium-book-plus">
        {l('motto1Title.verbPhrase')}
        <span class="text-secondary">{l('motto1Title.adjective')}</span>
      </h1>
      <p>{l('motto1Subtitle')}</p>
      <WorkSteps />
      <div class="w-full img-decor-1">
        <img class="rounded" src={`${website}/hero-1_3694×2078.webp`} alt="Battlecard bot" width="3694" height="2078" />
      </div>
    </div>
  </div>
</section>

<Footer />
