class learningPaths {
    constructor ({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaDesarrolloWeb = new learningPaths({
    name: 'Escuela de desarrollo web',
    courses: [
        'Curso definitivo de HTML y CSS',
        'Curso practio de HTML y CSS',
    ],
});
const escuelaDiseñoGrafico = new learningPaths({
    name: 'Escuela de diseño grafico',
    courses: [
        'Curso de teoria del color',
        'Curso de composicion visual',
    ],
});
const escuelaDesarrolloVideoJuegos = new learningPaths({
    name: 'Escuela de desarrollo de video juegos',
    courses: [
        'Escuela de Unity basico',
        'Escuela de Unity avanzado',
    ],
});
class Student {
    constructor ({
        name,
        age,
        email,
        usename,
        instagram = undefined,
        twitter = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.usename = usename;
        this.socialMedia = {
            instagram,
            twitter,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = approvedCourses;
    }
}

const jack = new Student({
    name: 'Jack',
    age: 22,
    usename: 'jack.reategui',
    email: 'jackreatteguivargas',
    instagram: 'jack.reategui',
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDiseñoGrafico,
    ],
})

const samantha = new Student({
    name: 'Samantha',
    age: 20,
    usename: 'sam.reategui',
    email: 'samtteguivargas',
    instagram: 'sam.reategui',
    learningPaths: [
        escuelaDesarrolloVideoJuegos,
        escuelaDesarrolloWeb,
    ]
})