var courses = ["HTML", "CSS", "javascript", "python"];

var UserCourse = prompt("Enter course name");

if (UserCourse !== null && UserCourse.trim() !== "") {
    var foundCourse = courses.find(function(course) {
        return course.toLowerCase() === UserCourse.trim().toLowerCase();
    });

    if (foundCourse !== undefined) {
        alert("Found");
    } else {
        courses.push(UserCourse.trim());
        alert("Your Course was added successfully");
    }

    console.log(courses);
} else {
    alert("Operation cancelled or empty input");
}