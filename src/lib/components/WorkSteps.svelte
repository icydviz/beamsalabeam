<script lang="ts">
  import { l } from '$lib/shared.svelte'
</script>

<div class="flex-center p-1">
  <div class="work-steps-bar bg-frosted-glass">
    <ol class="list work-steps">
      {#each Array.from({ length: 3 }), i}
        {@const n = i + 1}
        <li>
          <button type="button" class="btn btn-ghost">
            <span><small>{n}. {l(`step${n}`)}</small></span>
          </button>
        </li>
      {/each}
    </ol>
  </div>
</div>
