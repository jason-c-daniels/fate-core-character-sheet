<style>
    @import "NotesSheet.css";
    @import "../../styles/Page.css";
</style>

<script>
    import Section from "../../shared/Section/Section.svelte";

    export let notes="";
    export let subtitle="";
    export let page=1;

</script>
<div class="page">
<Section title="Notes - Pg. {page}" props={{style:"width:100%;height:100%;break-before: page"}} subtitle="for {subtitle}" >
    <textarea bind:value={notes} placeholder="Write notes here..." rows="43"/>
</Section>

</div>