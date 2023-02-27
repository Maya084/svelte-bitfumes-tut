<script>
  import { createEventDispatcher } from "svelte";
  import Modal from "./Modal.svelte";

  const dispatch = createEventDispatcher();
  let showModal = false;
  $: disableSubmitBtn = !newUser.name || !newUser.email;

  let newUser = {
    name: "",
    email: "",
    active: false,
  };

  function handleForm() {
    dispatch("newUser", newUser);
    showModal = false;
  }
</script>

<div class="mt-4">
  <button
    type="button"
    on:click={() => (showModal = true)}
    class="px-4 py-1 bg-blue-500 text-white rounded cursor-pointer"
    >New User</button
  >
</div>

{#if showModal}
  <Modal on:close={() => (showModal = false)} on:submit={handleForm}>
    <h1 class="text-2xl text-center">Create new user</h1>

    <div class="py-1 px-2 my-4">
      <label for="">Name</label>
      <input
        type="text"
        bind:value={newUser.name}
        class="px-2 py-1 rounded border w-full"
      />
    </div>

    <div class="py-1 px-2 my-4">
      <label for="">Email</label>
      <input
        type="email"
        bind:value={newUser.email}
        class="px-2 py-1 rounded border w-full"
      />
    </div>

    <div class="py-1 px-2 my-4 flex justify-between">
      <label for="true">Active</label>
      <div class="flex" id="active">
        <label for="true">Yes</label>
        <input
          type="radio"
          value={true}
          name="active"
          id="true"
          bind:group={newUser.active}
          class="px-2 py-1 rounded border w-full mx-5"
        />
        <label for="false">No</label>
        <input
          type="radio"
          value={false}
          name="active"
          id="false"
          class="px-2 py-1 rounded border w-full mx-5"
        />
      </div>
    </div>

    <button
      slot="right-button"
      type="submit"
      disabled={disableSubmitBtn}
      class="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-75"
      >Create</button
    >
  </Modal>
{/if}
