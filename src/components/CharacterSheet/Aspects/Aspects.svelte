<style>
    @import "Aspects.css";
</style>

<script>
    import Section from '../../shared/Section'

    export let aspects={};
</script>

<Section title="Aspects" props={{style:"flex-grow:1;flex-shrink:1;width:66%"}}>
    <input type="text" placeholder="High Concept" bind:value={aspects.highConcept} />
    <input type="text" placeholder="Trouble" bind:value={aspects.trouble} />
    <input type="text" placeholder="Other Aspect" bind:value={aspects.otherAspects[0]} />
    <input type="text" placeholder="Other Aspect" bind:value={aspects.otherAspects[1]} />
    <input type="text" placeholder="Other Aspect" bind:value={aspects.otherAspects[2]} />
    <input type="text" placeholder="Other Aspect" bind:value={aspects.otherAspects[3]} />
</Section>