export interface Lesson{
    id: string,
    linkedQuestions: string[]
    type: "APRENDER" | "PRATICAR"
    name: string
}