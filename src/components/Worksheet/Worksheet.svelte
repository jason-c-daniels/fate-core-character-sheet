<style>
    @import "Worksheet.css";
    @import "../styles/Page.css";
</style>

<script>

    import LogoBar from '../shared/LogoBar';
    import getNewWorksheet from '../../model/worksheet'
    import Section from "../shared/Section";

    export let worksheet = getNewWorksheet();
</script>

<div class="page" >
    <LogoBar />
    <Section title="Basic Info">
        <label for="name-input">Name:
            <input id="name-input" type="text" bind:value={worksheet.name} />
        </label>
    </Section>
</div>