import localStorage from 'local-storage'
const worksheetPrefix="fate-worksheet-";
export default class LocalStorageRepository {
    prefix=worksheetPrefix;
    constructor(
        prefix=worksheetPrefix
    ) {
        this.prefix=prefix;
    }

    save(itemName, object) {
        console.log("save");
        let key=this.prefix+itemName;
        let text = JSON.stringify(object);
        console.log(text);
        localStorage.set(key,text);
    }

    load(itemName,defaultItemGenerator= ()=>null) {
        console.log("load");
        let key=this.prefix+itemName;
        if (localStorage.get(key) === null) {
            console.log("LocalStorage not supported, or no prior item found. Creating new item instead.");
            return defaultItemGenerator();
        }
        console.log("loading...");
        let text = localStorage.get(key);
        console.log("loaded:", text);
        if (text === "undefined" || text === "null") return defaultItemGenerator();
        return JSON.parse(text);
    }
}