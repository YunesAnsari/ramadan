let day = 0;
let cls = 0;
function add() {
    day += 1;
    cls += 1;

    const tBody = document.querySelector("tbody")
    const tr = `
<tr class="${cls}">
        <td><input type="checkbox"></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
        <td><input type="checkbox""></td>
    <td>${day}</td>
</tr class="pb-4">
`
    tBody.innerHTML += tr;
}



for (i = 0; i < 30; i++) {
    add()
}

function calculateCheckedPercentage() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    const totalCheckboxes = checkboxes.length;
    const percentage = (checkedCount / totalCheckboxes) * 100;

    return percentage;
}

const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', () => {
    const checkedPercentage = calculateCheckedPercentage();
    console.log('درصد چک‌باکس‌های انتخاب شده:', checkedPercentage);
    const result = document.querySelector(".res")
    result.textContent = `${checkedPercentage.toFixed(2)}%`
});

function calculateCheckedPercentage1() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    const totalCheckboxes = checkboxes.length;
    const percentage = (checkedCount / totalCheckboxes) * 100;

    return percentage;
}

const calculateButton1 = document.getElementById('calculateButton');
calculateButton.addEventListener('click', () => {
    const checkedPercentage = calculateCheckedPercentage();
    console.log('درصد چک‌باکس‌های انتخاب شده:', checkedPercentage);
    const result = document.querySelector(".res")
    result.textContent = `${checkedPercentage.toFixed(2)}%`
});



