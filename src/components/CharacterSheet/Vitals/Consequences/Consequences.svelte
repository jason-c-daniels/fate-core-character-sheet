<style>
    @import "Consequences.css";
</style>

<script>
    import Section from '../../../shared/Section';

    export let consequences;
    export let dials={};
    export let style=""
</script>

<Section title="Consequences" props={{style:"width:100%; flex-grow:1;flex-shrink:1;height:300px"}}>
    <div class="consequences">
        <div>
            <label for="mild1">2</label><input id="mild1" type="text" placeholder=" Mild" bind:value={consequences.mild1} />
        </div>
        <div>
            <label for="moderate">4</label><input id="moderate" type="text" placeholder=" Moderate" bind:value={consequences.moderate} />
        </div>
        <div>
            <label for="severe">6</label><input id="severe" type="text" placeholder=" Severe" bind:value={consequences.severe} />
        </div>
        {#if !dials.hideFourthConsequence}
            <div>
                <label for="mild2" style="color:var(--input-border-color); break-before: column">2</label><input id="mild2" type="text" placeholder=" Mild" bind:value={consequences.mild2} />
            </div>
        {/if}
    </div>
</Section>