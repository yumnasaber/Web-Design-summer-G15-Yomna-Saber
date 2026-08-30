function calculateGrade() {
    var degree = prompt("Enter your degree");

    if (degree === null) {
        alert("You clicked Cancel");
    }
    else if (degree.trim() === "") {
        alert("Please enter your degree");
    }
    else if (isNaN(degree)) {
        alert("Invalid degree");
    }
    else {
        degree = Number(degree);

        if (degree < 0 || degree > 100) {
            alert("Invalid degree");
        }
        else if (degree >= 90) {
            alert("Excellent");
        }
        else if (degree >= 80) {
            alert("Very Good");
        }
        else if (degree >= 70) {
            alert("Good");
        }
        else {
            alert("Failed");
        }
    }
}


//Task2//


function myLoop(start, end, skip, stop) {
    if (
        start !== undefined &&
        end !== undefined &&
        skip !== undefined &&
        stop !== undefined
    ) {
        for (let i = start; i <= end; i++) {
            if (i === skip) {
                continue;
            }

            if (i === stop) {
                break;
            }

            console.log(i);
        }
    } else {
        alert("Please enter all numbers");
    }
}

myLoop(1, 10, 3, 8);
