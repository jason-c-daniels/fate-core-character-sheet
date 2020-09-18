<style>
    @import "CharacterSheet.css";
    @import "../styles/Page.css";
</style>

<script>

    import BasicInfo from './BasicInfo';
    import Aspects from './Aspects';
    import Extras from './Extras';
    import Stunts from './Stunts';
    import Skills from './Skills';
    import Vitals from './Vitals';
    import Attributes from "./Attributes";
    import Approaches from "./Approaches";

    import getNewCharacterSheet from '../../model/character';


    export let characterSheet = getNewCharacterSheet();
</script>

<div class="page" >
    <BasicInfo bind:characterData={characterSheet.characterData}/>
    <div class="flex-row" style="width: 100%; margin-bottom: 1rem;">
        <Aspects bind:aspects={characterSheet.characterData.aspects}/>
        {#if characterSheet.dials.useAttributes}
            <Attributes bind:attributes={characterSheet.characterData.attributes} />
        {/if}
        {#if characterSheet.dials.useSkillsInsteadOfApproaches}
            <Skills bind:skills={characterSheet.characterData.skills}/>
        {:else if characterSheet.dials.useApproachesInsteadOfSkills}
            <Approaches bind:approaches={characterSheet.characterData.approaches} />
        {/if}
    </div>
    <div class="flex-row" style="width: 100%; margin-bottom: 1rem;">
        {#if characterSheet.dials.useExtras}
            <Extras bind:value={characterSheet.characterData.extras} rows="11"/>
        {/if}
        <Stunts bind:value={characterSheet.characterData.stunts} rows="11"/>
    </div>
    <Vitals bind:vitals={characterSheet.characterData.vitals} bind:dials={characterSheet.dials}/>
</div>