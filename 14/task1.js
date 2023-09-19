function uniqFn(initialArray) {

    const uniq = new Set(initialArray);

    const result = Array.from(uniq);

    return result;
}