export default function getNewWorksheet() {
    return {
        name: "",
        otherData: ""
    };
}


export function validateWorksheet(worksheet) {
    let result = true;
    try {

        /* TODO: There has to be a better way.
                 like maybe a JSON DTD? */

        // for now try accessing things in a way that will throw an exception.
        let _ = worksheet.name.toString();

    } catch (err) {
        console.log(err);
        result = false;
    } finally {
    }
    return result;
}