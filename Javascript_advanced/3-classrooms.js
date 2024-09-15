function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat
        }
    }
    let students = []
    for (let i = 0; i != numbersOfStudents; i = i + 1) {
        students.push(studentSeat(i + 1))
    }
    return students
}
let classRoom = createClassRoom(10)