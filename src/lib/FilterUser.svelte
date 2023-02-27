<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const filter = (e) => {
    dispatch("filter", e.target.value);
  };
</script>

<div class="ml-4 mt-4">
  <label for="user-filer"> Filter User </label>
  <select
    name="user-filer"
    id="user-filer"
    on:change={filter}
    class="border rounded-lg px4 py2 ml-4"
  >
    <option value={null}>All</option>
    <option value={true}>Active</option>
    <option value={false}>Inactive</option>
  </select>
</div>
