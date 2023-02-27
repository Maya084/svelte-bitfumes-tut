<script>
  import Modal from "./Modal.svelte";

  let showModal = false;
</script>

<div class="mt-4">
  <button
    on:click={() => (showModal = true)}
    class="px-4 py-1 bg-blue-500 text-white rounded cursor-pointer"
    >New User</button
  >
</div>

{#if showModal}
  <Modal on:close={() => (showModal = false)} />
{/if}
