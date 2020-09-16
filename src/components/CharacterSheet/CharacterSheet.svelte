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
    <div class="flex-row" style="width: 100%">
        <Aspects bind:aspects={characterSheet.characterData.aspects}/>
        <Skills bind:skills={characterSheet.characterData.skills}/>
    </div>
    <div class="flex-row" style="width: 100%">
        <Extras bind:value={characterSheet.characterData.extras}/>
        <Stunts bind:value={characterSheet.characterData.stunts}/>
    </div>
    <Vitals bind:vitals={characterSheet.characterData.vitals}/>
</div>