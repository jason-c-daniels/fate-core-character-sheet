<style>
    @import "BasicInfo.css";
</style>

<script>
    import Logo from "./logo.svg"
    import Section from "../../shared/Section";

    export let characterData = {};


</script>
<div class="info-bar">
    <Section title="ID" props={{style:"width:100%; margin-right:1rem"}}>
        <div class="flex-row">
            <div class="flex-column" style="flex-grow: 12">
                <input bind:value={characterData.name} width="100%" placeholder="Name" type="text" class="name"/>
                <textarea bind:value={characterData.description} type="text" placeholder="Description" class="desc"/>
            </div>
            <div class="refresh">
                <label for="refresh">Refresh</label>
                <input id="refresh" height="100%" type="number" bind:value={characterData.refresh} min="1" max="10" style="border:none"/>
            </div>
        </div>
    </Section>
    <div class="logo">
        <Logo height="100%" width="100%"/>
    </div>
</div>