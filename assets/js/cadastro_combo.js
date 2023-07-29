function moveToSelected(item) {
    // Remove the item from the available list
    item.parentNode.removeChild(item);

    // Add the item to the selected list
    const selectedList = document.getElementById("selected-items");
    selectedList.appendChild(item);

    // Add a class to mark the item as selected
    item.classList.add("selected-item");
}