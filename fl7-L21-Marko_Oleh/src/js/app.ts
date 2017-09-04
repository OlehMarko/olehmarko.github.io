function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };
