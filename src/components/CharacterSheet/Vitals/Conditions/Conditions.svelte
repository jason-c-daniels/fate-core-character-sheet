<style>
    @import "Conditions.css";
</style>

<script>
    import Section from '../../../shared/Section';
    import CheckedItem from "../../../shared/CheckedItem/CheckedItem.svelte";
    export let conditions=[{name:"",taken:false,number:1}];
    export let title = "Conditions";
</script>

<Section {title} props={{style:"width:100%; flex-grow:2;flex-shrink:2;height:300px; margin-left:0.5rem"}}>
    {#each conditions as condition}
        <div style="display: flex; flex-direction: flex-shrink:1;flex-grow:1; row; margin-bottom:0.5rem;">
            <CheckedItem checkedItem={condition} number="{condition.number}"/><input type="text" bind:value={condition.name}/>
        </div>
    {/each}
</Section>