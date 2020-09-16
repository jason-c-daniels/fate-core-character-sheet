<style>
    @import "Stunts.css";
</style>

<script>
    import Section from "../../shared/Section";
    export let value="";
    export let rows=6;
</script>

<Section title="Stunts" props={{style:"width:100%; margin-left:1rem;"}}>
    <textarea bind:value={value} placeholder="Stunts" rows="{rows}"/>
</Section>
