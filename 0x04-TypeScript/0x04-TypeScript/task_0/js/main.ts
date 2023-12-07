interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_a: Student = {
    firstName: 'Nosipho',
    lastName: 'Khumalo',
    age: 19,
    location: 'Mnambithi, KZN',
}
const student_b: Student = {
    firstName: 'Ntando',
    lastName: 'Khumalo',
    age: 20,
    location: 'Eshowe, KZN',
}

const myStudentList: Student[] = [student_a, student_b];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

myStudentList.forEach((student: Student): void => {
	const myNewRow: HTMLTableRowElement = table.insertRow();
	const myNewRowFirstName: HTMLTableCellElement = myNewRow.insertCell();
	const myNewRowLocation: HTMLTableCellElement = myNewRow.insertCell();
	myNewRowFirstName.innerHTML = student.firstName;
	myNewRowLocation.innerHTML = student.location;
})