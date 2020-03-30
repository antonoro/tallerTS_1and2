import { dataCourses } from './dataCourses.js';
import { dataStudents } from './studentData.js';
var coursesTbody = document.getElementById('courses');
var studentTbody = document.getElementById('studentInfo');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBox = document.getElementById("search-box");
var minFilterBox = document.getElementById("min-box");
var maxFilterBox = document.getElementById("max-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudentData(dataStudents);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Displaying courses');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentData(student) {
    console.log('Displaying student info');
    var trElement1 = document.createElement("tr");
    var trElement2 = document.createElement("tr");
    var trElement3 = document.createElement("tr");
    var trElement4 = document.createElement("tr");
    trElement1.innerHTML = " <td>Codigo: </td>\n                          <td>" + student.codigo + "</td>";
    trElement2.innerHTML = " <td>Edad: </td>\n                          <td>" + student.edad + "</td>";
    trElement3.innerHTML = " <td>Direccion: </td>\n                          <td>" + student.direccion + "</td>";
    trElement4.innerHTML = " <td>Telefono: </td>\n                          <td>" + student.telefono + "</td>";
    studentTbody.appendChild(trElement1);
    studentTbody.appendChild(trElement2);
    studentTbody.appendChild(trElement3);
    studentTbody.appendChild(trElement4);
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByCredits() {
    var minvalue = +minFilterBox.value;
    var maxvalue = +maxFilterBox.value;
    var dataCredits = [minvalue, maxvalue];
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(dataCredits, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCredits(dataCredits, courses) {
    return dataCredits === [] ? dataCourses : courses.filter(function (c) {
        if (c.credits >= dataCredits[0] && c.credits <= dataCredits[1]) {
            return c;
        }
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
