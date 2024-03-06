document.addEventListener('DOMContentLoaded', function () {
    var obtainedPrize = JSON.parse(localStorage.getItem('obtainedPrize'));

    if (obtainedPrize) {
        var inventoryItem = document.createElement('img');
        inventoryItem.src = obtainedPrize.image;
        inventoryItem.alt = obtainedPrize.name;

        // Find the first empty inventory slot and append the obtained prize image
        var inventoryContainer = document.getElementById('inventoryContainer');
        var emptySlot = findEmptyInventorySlot();
        
        if (emptySlot) {
            emptySlot.appendChild(inventoryItem);
        }
    }
});

// Function to find the first empty inventory slot
function findEmptyInventorySlot() {
    var slots = document.getElementsByClassName('inventory__slot');
    
    for (var i = 0; i < slots.length; i++) {
        if (slots[i].children.length === 0) {
            return slots[i];
        }
    }

    return null; // No empty slot found
}
