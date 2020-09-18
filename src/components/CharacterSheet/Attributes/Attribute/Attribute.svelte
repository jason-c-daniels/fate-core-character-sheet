<style>
    @import "Attribute.css";
</style>

<script>
    export let attribute={name:"",rank:0};
</script>

<div class="flex-row">
    <input id="name" type="text" placeholder="Attribute Name" bind:value={attribute.name} />
    <span>+</span>
    <input id="rank" type="number" min="0" max="10" bind:value={attribute.rank}/>
</div>

