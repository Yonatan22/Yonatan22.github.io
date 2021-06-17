export interface Assignment {
    isImportant: boolean,
    isDone: boolean,
    description?: string | null,
    deadline?: Date | null,
}