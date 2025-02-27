<script lang="ts">
  import type { PageProps } from './$types'
  import { resetPassword } from '$lib/fetchers'

  let { data }: PageProps = $props()

  let token = $state(data.token || ''),
    title = $state('Reset your password'),
    description = $state('Enter your new password below to regain access to your account.'),
    showForm = $state(true),
    password = $state(''),
    confirmPassword = $state('')

  let isValid = $derived.by(() => {
    if (password.length < 8 || confirmPassword.length < 8) {
      return false
    } else {
      return password === confirmPassword
    }
  })

  const onReset = async () => {
    const res = await resetPassword({ token, password })

    if (res.messageCode === 'password-reset-successful') {
      showForm = false
      title = 'Password reset successful'
      description = 'Your password has been successfully reset. You can now log in with your new password.'
    } else {
      showForm = true
      title = 'An error occurred'
      description = 'An error occurred while resetting your password. Please try again.'
    }
  }
</script>

<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col">
    {#if token}
      <div class="text-center">
        <h1 class="text-5xl font-bold">{title}</h1>
        <p class="py-6">{description}</p>
      </div>
      {#if showForm}
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body">
            <div class="form-control">
              <label class="label" for="password">
                <span class="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="Enter your password" class="input input-bordered" bind:value={password} required />
            </div>
            <div class="form-control">
              <label class="label" for="confirm">
                <span class="label-text">Confirm password</span>
              </label>
              <input name="confirm" type="password" placeholder="Confirm your password" class="input input-bordered" bind:value={confirmPassword} required />
            </div>
            <div class="card-actions justify-end">
              <div class="form-control mt-6">
                <button class="btn btn-primary" onclick={() => onReset()} disabled={!isValid}>
                  <span>Reset password</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      {/if}
    {:else}
      <div class="text-center">
        <h1 class="text-5xl font-bold">Invalid token</h1>
        <p class="py-6">The token you provided is invalid or has expired. Please request a new password reset link.</p>
      </div>
    {/if}
  </div>
</div>
