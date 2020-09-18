<style>
    @import "Vitals.css";
</style>

<script>
    import Section from "../../shared/Section";
    import StressTrack from "./StressTrack/StressTrack.svelte";

    export let vitals = {};
    export let dials = {};
</script>

<div class="flex-row" style="width: 100%">
<div style="width: 70%; flex-shrink: 2; flex-grow: 3; margin-right:1rem;">
    {#if dials.useSingleStressTrack}
        <StressTrack title="Stress"
                     count="{dials.numberOfStressBoxes}"
                     grayAfter="{dials.stressBoxesGrayAfter}"
                     bind:stressBoxes={vitals.singleStress}
                     singlePointStress="{dials.useSinglePointStressBoxes}"
        />
    {:else}
        <StressTrack title="Physical"
                     count="{dials.numberOfStressBoxes}"
                     grayAfter="{dials.stressBoxesGrayAfter}"
                     bind:stressBoxes={vitals.physicalStress}
                     singlePointStress="{dials.useSinglePointStressBoxes}"
        />

        <StressTrack title="Mental"
                     count="{dials.numberOfStressBoxes}"
                     grayAfter="{dials.stressBoxesGrayAfter}"
                     bind:stressBoxes={vitals.mentalStress} />
    {/if}
</div>
    <Section title="Consequences" props={{style:"width:100%; flex-grow:1;flex-shrink:1;height:300px"}}>
        <div class="consequences">
            <div>
            <label for="mild1">2</label><input id="mild1" type="text" placeholder=" Mild" bind:value={vitals.consequences.mild1} />
            </div>
            <div>
            <label for="moderate">4</label><input id="moderate" type="text" placeholder=" Moderate" bind:value={vitals.consequences.moderate} />
            </div>
            <div>
            <label for="severe">6</label><input id="severe" type="text" placeholder=" Severe" bind:value={vitals.consequences.severe} />
            </div>
            <div>
            <label for="mild2" style="color:var(--input-border-color); break-before: column">2</label><input id="mild2" type="text" placeholder=" Mild" bind:value={vitals.consequences.mild2} />
            </div>
        </div>
    </Section>
</div>