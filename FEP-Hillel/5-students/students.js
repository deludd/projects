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

averageStudentMark(10)
averageGroupMark(students)

function averageStudentMark(searchId){
    const studentMarks = students.find(allMarks => allMarks.id === searchId).marks

    return console.log(calculateAverage(studentMarks))
}

function calculateAverage(studentMarks) {
    return studentMarks.reduce((a, b) => a + b) / studentMarks.length
}

function averageGroupMark(students){
    const massiv = students.map(average => average.marks).flat()

    const avr = massiv.reduce((a,b) => a + b) / massiv.length

    return console.log(avr)
}

