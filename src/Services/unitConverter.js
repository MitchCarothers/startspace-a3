export default function removeUnit(string) {
    // This should just delete all non-numerical characters
    return string.replace(/\D+/g, '');
};