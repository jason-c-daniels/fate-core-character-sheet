import getNewDials, {validateDials} from "./dials";
export default function getNewCharacterSheet() {
    return {
        fateVersion: "fate core 3.0 - standard",
        dials: getNewDials(),
        characterData: {
            name: "",
            pronouns:"",
            description:"",
            refresh:3,
            fate:3,
            aspects: {
                highConcept:"",
                trouble:"",
                otherAspects:[]
            },
            approaches:[
                {name:"Careful", rank:0},
                {name:"Clever", rank:0},
                {name:"Flashy", rank:0},
                {name:"Forceful", rank:0},
                {name:"Quick", rank:0},
                {name:"Sneaky", rank:0}
            ],
            attributes:[
                {name:"Strength", rank:0},
                {name:"Dexterity", rank:0},
                {name:"Toughness", rank:0},
                {name:"Intelligence", rank:0},
                {name:"Willpower", rank:0},
                {name:"Charm", rank:0}
            ],
            skills: {
                superb:[],
                great:[],
                good:[],
                fair:[],
                average:[],
                unranked:[]
            },
            extras:"",
            equipment:"",
            stunts:"",
            vitals : {
                singleStress:[
                    { label:"1", taken:false},
                    { label:"2", taken:false},
                    { label:"3", taken:false},
                    { label:"4", taken:false},
                ],
                physicalStress:[
                    { label:"1", taken:false},
                    { label:"2", taken:false},
                    { label:"3", taken:false},
                    { label:"4", taken:false},
                ],
                mentalStress:[
                    { label:"1", taken:false},
                    { label:"2", taken:false},
                    { label:"3", taken:false},
                    { label:"4", taken:false},
                ],
                consequences:{
                    mild1:"",
                    moderate:"",
                    severe:"",
                    mild2: ""
                },
                physicalConditions: [
                    {number:1, name:"Hurt", taken:false},
                    {number:1, name:"Bruised", taken:false},
                    {number:2, name:"Injured", taken:false},
                    {number:3, name:"Wounded", taken:false},
                ],
                mentalConditions: [
                    {number:1, name:"Startled", taken:false},
                    {number:1, name:"Scared", taken:false},
                    {number:2, name:"Shaken", taken:false},
                    {number:3, name:"Demoralized", taken:false},
                ]
            }
        }
    };
}

export function validateCharacterSheet(sheet) {
    let result = true;
    try {
        // for now try accessing things in a way that will throw an exception.
        if (!!sheet.dials) { result = validateDials(sheet.dials)}
        else if (!sheet.dials) { sheet.dials=getNewDials(); }

        if (result) {
            let _ = sheet.characterData.name.toString();
        }
    } catch (err) {
        console.log(err);
        result = false;
    } finally {
    }
    return result;
}