<script lang="ts">
  import { page } from '$app/state'

  let title = $derived(page.status),
    description = $derived.by(() => {
      switch (title) {
        case 400:
          return 'The request was invalid.'
        case 401:
          return 'You are not authorized to access this page.'
        case 403:
          return 'You are not allowed to access this page.'
        case 404:
          return 'The page you are looking for does not exist.'
        case 500:
          return 'An error occurred while processing your request.'
        default:
          return 'An error occurred.'
      }
    })
</script>

<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{title}</h1>
      <p class="py-6">{description}</p>
      <a class="btn btn-primary" href="/">Back to home</a>
    </div>
  </div>
</div>
