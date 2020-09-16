<style>
    @import "Component.css";
</style>

<script>
    import Section from "../../shared/Section";
    export let value="";
</script>

<Section title="Stunts" props={{style:"width:100%; margin-left:1rem;"}}>
    <textarea bind:value={value} placeholder="Stunts"/>
</Section>
