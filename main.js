const jack = {
    name: 'jack',
    age: 21,
    cursosAprovados: [
        'Curso 1',
        'Curso 2',
    ],
    aprobrarCurso(curso) {
        this.cursosAprovados.push(curso)
    },
}

jack.cursosAprovados.push('curso 3')
jack.age += 1

function Student(name, age, cursoAprobados) {
    this.name = name;
    this.age = age;
    this.cursoAprobados = cursoAprobados;
}

Student.prototype.aprobrarCurso = function (curso) {
    this.cursoAprobados.push(curso)
}

const juanita = new Student(
    "Juanita",
    15,
    [
        "curso 1",
        "curso 2",
        "curso 3",
    ]
);

//Prototipos con la sintaxis de clases

class Student2 {
    constructor ({
        name,
        age,
        cursosAprobados = [], 
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobrarCurso(curso) {
        this.cursosAprobados.push(curso)
    }
}

const jackson = new Student2({
    name: 'jackson',
    age: 22,
    cursosAprobados: [
        'curso 1',
        'curso 2',
        'curso 3',
    ],
})
