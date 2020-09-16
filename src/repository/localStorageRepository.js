import localStorage from 'local-storage'
const worksheetPrefix="fate-core-character-sheet-";
export default class LocalStorageRepository {
    prefix=worksheetPrefix;
    constructor(
        prefix=worksheetPrefix
    ) {
        this.prefix=prefix;
    }

    save(itemName, object) {
        console.log(`save(${itemName},[object])`);
        let key=this.prefix+itemName;
        let text = JSON.stringify(object);
        console.log(text);
        console.log("saving to key:"+key);
        localStorage.set(key,text);
    }

    load(itemName,defaultItemGenerator= ()=>null) {
        console.log(`load(${itemName})`);
        let key=this.prefix+itemName;
        console.log("loading from key:"+key);
        let text = localStorage.get(key);
        console.log("loaded:", text);
        if (text === "undefined" || text === "null") return defaultItemGenerator();
        return JSON.parse(text);
    }
}