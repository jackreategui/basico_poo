class Clases{
    constructor ({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}
class Course{
    constructor ({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}
class learningPaths {
    constructor ({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

// Clases

const cursoProgramaionBasica = new Course({
    name: 'Curso programacion basica',
})

const cursoDefinitivoHTML = new Course({
    name: 'Curso definitivo de HTML y CSS',
})

const cursoPracticoHTML = new Course({
    name: 'Curso practio de HTML y CSS',
})

const cursoTeoriaColor = new Course({
    name: 'Curso de teoria del color',
})

const cursoUnityBasico = new Course({
    name: 'Escuela de Unity basico',
})

const cursoUnityAvanzado = new Course({
    name: 'Escuela de Unity avanzado',
})

// Escuelas

const escuelaDesarrolloWeb = new learningPaths({
    name: 'Escuela de desarrollo web',
    courses: [
        cursoProgramaionBasica,
        cursoDefinitivoHTML,
    ],
});
const escuelaDiseñoGrafico = new learningPaths({
    name: 'Escuela de diseño grafico',
    courses: [
        cursoTeoriaColor,
    ],
});
const escuelaDesarrolloVideoJuegos = new learningPaths({
    name: 'Escuela de desarrollo de video juegos',
    courses: [
        cursoUnityBasico,
        cursoUnityAvanzado,
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