export default function getNewCharacterSheet() {
    return {
        version: "fate core 3.0 - standard",
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
            skills: {
                superb:[],
                great:[],
                good:[],
                fair:[],
                average:[],
                unranked:[]
            },
            extras:"",
            stunts:"",
            vitals : {
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
                }
            }
        }
    };
}


export function validateCharacterSheet(sheet) {
    let result = true;
    try {

        /* TODO: There has to be a better way.
                 like maybe a JSON DTD? */

        // for now try accessing things in a way that will throw an exception.
        let _ = sheet.characterData.name.toString();

    } catch (err) {
        console.log(err);
        result = false;
    } finally {
    }
    return result;
}