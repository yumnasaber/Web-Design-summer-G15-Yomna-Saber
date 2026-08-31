var courses = ["HTML", "CSS", "javascript", "python"];

var UserCourse = prompt("Enter course name");

var foundCourse = courses.find(function(course) {
    return course === UserCourse;
});

if (foundCourse !== undefined) {
    alert("Found");
} else {
    courses.push(UserCourse);
    alert("your Course was added successfully");
}

console.log(courses);