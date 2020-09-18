<style>
    @import "Equipment.css";
</style>

<script>
    import Section from "../../shared/Section";
    export let value="";
    export let rows=6;
</script>

<Section title="Equipment" props={{style:"width:100%; margin-right:1rem;"}}>
    <textarea bind:value={value} placeholder="Equipment" rows="{rows}"/>
</Section>
