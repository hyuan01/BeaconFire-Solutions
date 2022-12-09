function toggleRow(i) {
    const editRow = document.querySelectorAll(`[id=editMode-${i}]`);
    for (let i = 0; i < editRow.length; i++) {
        editRow[i].classList.toggle("hidden");
    }

    const defaultRow = document.querySelectorAll(`[id=default-${i}]`);
    for (let i = 0; i < defaultRow.length; i++) {
        defaultRow[i].classList.toggle("hidden");
    }
}