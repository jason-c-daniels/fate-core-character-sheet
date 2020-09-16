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

    import getNewCharacterSheet from '../../model/character';

    export let characterSheet = getNewCharacterSheet();
</script>

<div class="page" >
    <BasicInfo bind:characterData={characterSheet.characterData}/>
    <div class="flex-row" style="width: 100%; margin-bottom: 1rem;">
        <Aspects bind:aspects={characterSheet.characterData.aspects}/>
        <Skills bind:skills={characterSheet.characterData.skills}/>
    </div>
    <div class="flex-row" style="width: 100%; margin-bottom: 1rem;">
        <Extras bind:value={characterSheet.characterData.extras} rows="12"/>
        <Stunts bind:value={characterSheet.characterData.stunts} rows="12"/>
    </div>
    <Vitals bind:vitals={characterSheet.characterData.vitals}/>
</div>