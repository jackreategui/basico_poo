class Comment {
    constructor ({
        content,
        studentName,
        studentRole = 'estudiante',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar () {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecreta = "https://www.youtube.com/watch";

    console.log('si ' + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://www.youtube.com/watch";

    console.log('se pauso' + urlSecreta);
}

class PlatziClass {
    constructor ({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() { 
        videoStop(this.videoID);
    }
}

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
        isFree = false,
        lang = 'spanish',
    }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this.name;
    }

    set name(newname) {
        // this.name = newname;
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
    isFree: true,
})

const cursoDefinitivoHTML = new Course({
    name: 'Curso definitivo de HTML y CSS',
})

const cursoPracticoHTML = new Course({
    name: 'Curso practio de HTML y CSS',
    lang: 'english',
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

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })

        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor (props) {
        super (props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('No ' + this.name + ' no esta permitido');
        }
    }
}

class BasicStudent extends Student{
    constructor (props) {
        super (props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('No ' + this.name + ' no esta permitido');
        }
    }
}

class ExpertStudent extends Student{
    constructor (props) {
        super (props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor (props) {
        super (props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'profesor',
        })

        comment.publicar();
    }
}

const jack = new ExpertStudent({
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

const samantha = new FreeStudent({
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

const sam = new BasicStudent({
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

const samjack = new TeacherStudent({
    name: 'SamJack',
    age: 20,
    usename: 'sam.reategui',
    email: 'samtteguivargas',
    instagram: 'sam.reategui',
    learningPaths: [
        escuelaDesarrolloVideoJuegos,
        escuelaDesarrolloWeb,
    ]
})