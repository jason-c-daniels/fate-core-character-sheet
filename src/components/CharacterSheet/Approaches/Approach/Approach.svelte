<style>
    @import "Approach.css";
</style>

<script>
    export let approach={name:"",rank:0};
</script>

<div class="flex-row">
    <span>+</span>
    <input id="rank" type="number" min="0" max="10" bind:value={approach.rank}/>
    <input id="name" type="text" placeholder="Approach Name" bind:value={approach.name} />
</div>
