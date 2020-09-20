<style>
    @import "Vitals.css";
</style>

<script>
    import Section from "../../shared/Section";
    import StressTrack from "./StressTrack/StressTrack.svelte";
    import Conditions from "./Conditions/Conditions.svelte";
    import Consequences from "./Consequences/Consequences.svelte";

    export let vitals = {};
    export let dials = {};
</script>

<div class="flex-row" style="width: 100%">
<div style="width: 28%; flex-shrink: 0; flex-grow: 0; margin-right:1rem;">
    {#if dials.useStress}
        {#if dials.useSingleStressTrack}
            <StressTrack title="{dials.singleStressTitle}"
                         subtitle="{dials.singleStressSubtitle}"
                         count="{dials.numberOfStressBoxes}"
                         grayAfter="{dials.stressBoxesGrayAfter}"
                         stressBoxes={vitals.singleStress}
                         singlePointStress="{dials.useSinglePointStressBoxes}"
            />
        {:else}
            <StressTrack title="{dials.physicalStressTitle}"
                         subtitle="{dials.physicalStressSubtitle}"
                         count="{dials.numberOfStressBoxes}"
                         grayAfter="{dials.stressBoxesGrayAfter}"
                         stressBoxes={vitals.physicalStress}
                         singlePointStress="{dials.useSinglePointStressBoxes}"
            />

            <StressTrack title="{dials.mentalStressTitle}"
                         subtitle="{dials.mentalStressSubtitle}"
                         count="{dials.numberOfStressBoxes}"
                         grayAfter="{dials.stressBoxesGrayAfter}"
                         stressBoxes={vitals.mentalStress}
                         singlePointStress="{dials.useSinglePointStressBoxes}"
            />
        {/if}
    {/if}
</div>
    {#if dials.useConsequences}

        <Consequences dials={dials} bind:consequences={vitals.consequences} />

    {/if}


    {#if dials.useConditions}
        <div style="flex-shrink: 2; flex-grow: 2; margin-right:1rem; display:inline-flex">
        <Conditions title="Physical Conditions" bind:conditions={vitals.physicalConditions} />
        <Conditions title="Mental Conditions" bind:conditions={vitals.mentalConditions} />
        </div>
    {/if}
</div>