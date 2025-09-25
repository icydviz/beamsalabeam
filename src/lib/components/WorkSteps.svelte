<script lang="ts">
  import { l } from '$lib/shared.svelte'
</script>

<div class="work-steps-container">
  <div class="work-steps-bar">
    <ol class="list work-steps">
      {#each Array.from({ length: 3 }), i}
        {@const n = i + 1}
        <li>
          <button type="button" class="btn btn-ghost">
            <span class="text-inverted"><small>{n}. {l(`step${n}`)}</small></span>
          </button>
        </li>
      {/each}
    </ol>
  </div>
</div>
