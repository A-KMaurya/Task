
// Style the Accordian Design for the Units
const headers = document.querySelectorAll('.unit-heading');

// Open second accordion section by default
const defaultContent = document.querySelectorAll('.unit-selection')[1];
defaultContent.style.maxHeight = defaultContent.scrollHeight + "px";

headers.forEach(header => {
    header.addEventListener('click', () => {

        const content = header.nextElementSibling;

        // Close all other contents
        document.querySelectorAll('.unit-selection').forEach(c => {
            if (c !== content) {
                c.style.maxHeight = null;
            }
        });

        // Toggle current content
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Show the Alert with Selected Records

document.getElementById("addToCart").addEventListener("submit", function (event) {
    event.preventDefault();

    const unit = document.querySelector('input[name="unit"]:checked')?.value;
    let colorFirst = "";
    let sizeFirst = "";
    let colorSecond = "";
    let sizeSecond = "";
    if (unit === "Unit-1") {
        colorFirst = document.getElementById("unit1FirstColour").value;
        sizeFirst = document.getElementById("unit1FirstSize").value;

        colorSecond = document.getElementById("unit1SecondColour").value;
        sizeSecond = document.getElementById("unit1SecondSize").value;
    }
    else if (unit === "Unit-2") {
        colorFirst = document.getElementById("unit2FirstColour").value;
        sizeFirst = document.getElementById("unit2FirstSize").value;

        colorSecond = document.getElementById("unit2SecondColour").value;
        sizeSecond = document.getElementById("unit2SecondSize").value;

    }
    else if (unit === "Unit-3") {
        colorFirst = document.getElementById("unit3FirstColour").value;
        sizeFirst = document.getElementById("unit3FirstSize").value

        colorSecond = document.getElementById("unit3SecondColour ").value;
        sizeSecond = document.getElementById("unit3SecondSize").value;
    }


    alert("Item Added successfully! \n" +
        "You have Selected: " + unit + "\n" +
        "The First Colour is: " + colorFirst + " and the size is : " + sizeFirst + "\n" +
        "The Second Colour is: " + colorSecond + " and the size is : " + sizeSecond + "\n");
});


// Chenge the Radio Button Selection Based on Active Unit Heading

document.querySelectorAll('.unit-heading').forEach(heading => {
    heading.addEventListener('click', () => {
        const targetId = heading.getAttribute('data-target');
        const radio = document.getElementById(targetId);

        if (radio) {
            radio.checked = true;
        }

        // Optional: mark selected unit
        document.querySelectorAll('.unit').forEach(unit => {
            unit.classList.remove('selected');
        });

        heading.closest('.unit').classList.add('selected');
    });
});

