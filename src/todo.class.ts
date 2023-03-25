export class Todo {
    private static myTodo: string = "Hi I'm you're ugly ass life";

    static getMyTodo(): string{
        return this.myTodo;
    }

    static setMyTodo(value: string): void{
        this.myTodo = value;
    }
}