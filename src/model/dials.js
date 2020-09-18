export default function getNewDials() {
    return {
            useSingleStressTrack: false,
            useSinglePointStressBoxes: false,
            numberOfStressBoxes: 4,
            stressBoxesGrayAfter: 2,
            useApproachesInsteadOfSkills: false,
            useSkillsInsteadOfApproaches: true,
            useAttributes: false,
            useExtras: true,
            useEquipment: false
        };
}

export function validateDials(dials) {
    let result = true;
    try {

        // for now try accessing things in a way that will throw an exception.
        let _ = dials.toString();
        _ = dials.useSingleStressTrack.toString();
        _ = dials.useSinglePointStressBoxes.toString();
        _ = dials.numberOfStressBoxes.toString();
        _ = dials.useApproachesInsteadOfSkills.toString();
        _ = dials.useSkillsInsteadOfApproaches.toString();
        _ = dials.useAttributes.toString();
        _ = dials.useExtras.toString();

    } catch (err) {
        console.log(err);
        result = false;
    } finally {
    }
    return result;
}