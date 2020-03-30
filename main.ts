import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudents } from './studentData.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('studentInfo')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const minFilterBox: HTMLInputElement = <HTMLInputElement> document.getElementById("min-box")!;
const maxFilterBox: HTMLInputElement = <HTMLInputElement> document.getElementById("max-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();

renderCoursesInTable(dataCourses);
renderStudentData(dataStudents);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Displaying courses');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudentData(student: Student): void {
  console.log('Displaying student info')
  let trElement1 = document.createElement("tr");
  let trElement2 = document.createElement("tr");
  let trElement3 = document.createElement("tr");
  let trElement4 = document.createElement("tr");
  trElement1.innerHTML = ` <td>Codigo: </td>
                          <td>${student.codigo}</td>`
  trElement2.innerHTML = ` <td>Edad: </td>
                          <td>${student.edad}</td>`
  trElement3.innerHTML = ` <td>Direccion: </td>
                          <td>${student.direccion}</td>`  
  trElement4.innerHTML = ` <td>Telefono: </td>
                          <td>${student.telefono}</td>`       
  studentTbody.appendChild(trElement1);
  studentTbody.appendChild(trElement2);
  studentTbody.appendChild(trElement3);
  studentTbody.appendChild(trElement4);
}


function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByCredits() { 
  let minvalue = +minFilterBox.value;
  let maxvalue = +maxFilterBox.value;
  const dataCredits = [minvalue, maxvalue];
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(dataCredits, dataCourses);
  renderCoursesInTable(coursesFiltered);
}


function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function searchCourseByCredits(dataCredits: number[], courses: Course[]) {
  return dataCredits === [] ? dataCourses : courses.filter( c => {
    if(c.credits >= dataCredits[0] && c.credits <= dataCredits[1])
    {
      return c;
    }
  } ) 
} 



function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}