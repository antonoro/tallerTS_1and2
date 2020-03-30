export class Course{
    name: string;
    credits: number;
    professor: string;

    constructor(pName: string, pProfessor: string, pCredits: number)
    {
        this.name = pName;
        this.credits = pCredits;
        this.professor = pProfessor;

    }

}