document.addEventListener('DOMContentLoaded', function () {
    var obtainedPrize = JSON.parse(localStorage.getItem('obtainedPrize'));

    if (obtainedPrize) {
        var inventoryItem = document.createElement('img');
        inventoryItem.src = obtainedPrize.image;
        inventoryItem.alt = obtainedPrize.name;
        document.getElementById('inventoryContainer').appendChild(inventoryItem);
    }
});
