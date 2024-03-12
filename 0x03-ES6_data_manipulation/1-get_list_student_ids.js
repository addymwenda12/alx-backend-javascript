function getListStudentIds(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr.filter((student) => student.id > 100).map((student) => student.id);
}

export default getListStudentIds;
