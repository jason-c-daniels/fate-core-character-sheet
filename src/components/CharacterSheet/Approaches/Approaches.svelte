<style>
    @import "Approaches.css";
</style>

<script>
    import Section from "../../shared/Section";
    import Approach from './Approach'
    export let approaches=[
                {name:"Careful", rank:0},
                {name:"Clever", rank:0},
                {name:"Flashy", rank:0},
                {name:"Forceful", rank:0},
                {name:"Quick", rank:0},
                {name:"Sneaky", rank:0}
            ];
</script>

<Section title="Approaches" props={{style:"flex-grow:0;flex-shrink:0;width:9rem;margin-left:1rem;"}}>
    {#each approaches as approach}
        <Approach bind:approach={approach} />
    {/each}
</Section>
