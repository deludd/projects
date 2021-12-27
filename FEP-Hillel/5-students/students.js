const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

function averageStudentMark(searchId){
    const studentMarks = students.find(allMarks => allMarks.id === searchId).marks

    console.log(calculateAverage(studentMarks))
}

function calculateAverage(studentMarks) {
    return studentMarks.reduce((a, b) => a + b) / studentMarks.length
}

function averageGroupMark(students){
    const test = students.map(average => average.marks)

    const avr = test.reduce((a,b) => a + b) / test.length
}

averageStudentMark(10)
averageGroupMark(students)