<style>
    @import "Component.css";
</style>

<script>
    import Section from "../../shared/Section";
    export let value="";
</script>

<Section title="Extras" props={{style:"width:100%"}}>
    <textarea bind:value={value} placeholder="Extras"/>
</Section>
