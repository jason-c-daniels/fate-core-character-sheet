<style>
    @import "StressTrack.css";
</style>

<script>
    import CheckedItem, {defaultCss as CSS} from "../../../shared/CheckedItem/CheckedItem.svelte";
    import Section from "../../../shared/Section";

    let css = {...CSS, color: 'black', size: "1.6rem", margin: "1rem;"};
    let grayCss = {...css, color: 'gray'};

    export let title = "Stress";
    export let subtitle='Physique/Will';
    export let stressBoxes = [{number:"1",taken:false}];
    export let count = 4;
    export let grayAfter = 2;
    export let singlePointStress=false;

</script>

<Section {title} {subtitle}>
    <div class="flex-row" style="height:4rem; flex-wrap: wrap">
    {#each Array(count) as _,i}
        <CheckedItem css={ i < grayAfter? css : grayCss} number="{ singlePointStress ? ' ' : i+1 }" bind:checkedItem={stressBoxes[i]} />
    {/each}
    </div>
</Section>