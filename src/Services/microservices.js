export function removeUnit(string) {
    // This should just delete all non-numerical characters from a string
    return string.replace(/\D+/g, '');
};

export function minMaxChecker(e) {
    // Checks if the event value is outside the min/max range of an input
    if(parseInt(e.target.value) > parseInt(e.target.max)) {e.target.value = e.target.max};
    if(parseInt(e.target.value) < parseInt(e.target.min)) {e.target.value = e.target.min};
    return e;
};