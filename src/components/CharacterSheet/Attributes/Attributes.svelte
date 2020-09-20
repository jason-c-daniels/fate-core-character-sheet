<style>
    @import "Attributes.css";
</style>

<script>
    import Section from "../../shared/Section";
    import Attribute from './Attribute'
    export let attributes=[
                {name:"Strength", rank:0},
                {name:"Dexterity", rank:0},
                {name:"Constitution", rank:0},
                {name:"Intelligence", rank:0},
                {name:"Wisdom", rank:0},
                {name:"Charisma", rank:0}
            ];
    export let dials={};

</script>

<Section title="{dials.attributesName}" props={{style:"flex-grow:0;flex-shrink:0;width:9rem;margin-left:1rem;"}}>
    {#each attributes as attribute}
        <Attribute bind:attribute={attribute} />
    {/each}
</Section>
