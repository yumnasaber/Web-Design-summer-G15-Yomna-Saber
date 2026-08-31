var courses = ["HTML", "CSS", "javascript", "python"];

var userCourse = prompt("Enter course name");

if (courses.includes(userCourse)) {
    alert("Found");
} else {
    courses.push(userCourse);
    alert(" your Course was added successfully");
}

console.log(courses);