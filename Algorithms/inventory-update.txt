function updateInventory(arr1, arr2) {
    let inventory = new Map();
    arr1.forEach((item) => {
        console.log('Current Inventory Item', item)
        inventory.set(item[1], item[0]);
    });
    arr2.forEach((item) => {
        if(inventory.has(item[1])) {
            inventory.set(item[1], (inventory.get(item[1]) + item[0]));
        } else {
            inventory.set(item[1], item[0]);
        }
    });
    console.log(inventory);
    let itemsInInventory = [];
    for(let item of inventory.keys()) {
        itemsInInventory.push(item);
    }
    itemsInInventory.sort();
    console.log(itemsInInventory)
    return itemsInInventory.map((item) => [inventory.get(item), item]);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);