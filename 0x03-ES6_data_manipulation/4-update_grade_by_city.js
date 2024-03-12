import getListStudents from "./0-get_list_students.js";

function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            const grade = gradeObj ? gradeObj.grade : 'N/A';
            return { ...student, grade };
        });
}

export default updateStudentGradeByCity;