class learningPaths {

}

const escuelaDesarrolloWeb = new learningPaths;
const escuelaDiseñoGrafico = new learningPaths;
const escuelaDesarrolloVideoJuegos = new learningPaths;
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