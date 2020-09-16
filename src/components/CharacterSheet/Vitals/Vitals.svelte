<style>
    @import "Vitals.css";
</style>

<script>
    import Section from "../../shared/Section";
    import CheckedItem, {defaultCss as CSS} from "./CheckedItem/CheckedItem.svelte";
    export let vitals={};
    let css={...CSS,color:'black', size:"1.6rem", margin:"1rem;"};
    let grayCss={...css,color:'gray'};
</script>

<div class="flex-row" style="width: 100%">
<div style="width: 60%; flex-shrink: 2; flex-grow: 3; margin-right:1rem;">
    <Section title="Physical Stress" subtitle="(Physique)">
        <div class="flex-row" style="height:4rem;">
            <CheckedItem {css} number="1" bind:checked={vitals.physicalStress[0].taken} />
            <CheckedItem {css} number="2" bind:checked={vitals.physicalStress[1].taken} />
            <CheckedItem css={grayCss} number="3" bind:checked={vitals.physicalStress[2].taken} />
            <CheckedItem css={grayCss} number="4" bind:checked={vitals.physicalStress[3].taken} />
        </div>
    </Section>
    <Section title="Mental Stress" subtitle="(Will)">
        <div class="flex-row" >
            <CheckedItem {css} number="1" bind:checked={vitals.mentalStress[0].taken} />
            <CheckedItem {css} number="2" bind:checked={vitals.mentalStress[1].taken} />
            <CheckedItem css={grayCss} number="3" bind:checked={vitals.mentalStress[2].taken} />
            <CheckedItem css={grayCss} number="4" bind:checked={vitals.mentalStress[3].taken} />
        </div>
    </Section>
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