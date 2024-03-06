function obtainPrize() {
    var obtainedPrize = { name: "PrizeName", image: "prize.png" };
    localStorage.setItem('obtainedPrize', JSON.stringify(obtainedPrize));
}
