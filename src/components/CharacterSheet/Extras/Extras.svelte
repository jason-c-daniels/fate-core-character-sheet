<style>
    @import "Extras.css";
</style>

<script>
    import Section from "../../shared/Section";
    export let value="";
    export let rows=6;
</script>

<Section title="Extras" props={{style:"width:100%"}}>
    <textarea bind:value={value} placeholder="Extras" rows="{rows}"/>
</Section>
