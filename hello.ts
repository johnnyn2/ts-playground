const printName = (obj: { first: string, last?: string, age: number | string }) => {
    const { age } = obj;
    if (typeof age === 'string') {
        console.log(Number(age));
    } else {
        console.log(age);
    }
}

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log(`Hello, ${x.join(" and ")}`);
    } else {
        console.log(x.toLowerCase());
    }
}

/** Extend */
interface AnimalInterface {
    name: string
}
interface BearInterface extends AnimalInterface {
    honey: boolean
}

type AnimalType = {
    name: string
}
type BearType = AnimalType & {
    honey: boolean
}

/** Type Assertions */
const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const videoEl = document.getElementById('myVideo') as HTMLVideoElement;

function printText(s: string, alignment: 'left' | 'center' | 'right'): -1 | 0 | 1 {
    switch (alignment) {
        case 'center': return 0;
        case 'left': return -1;
        case 'right': return 1;
    }
}

const req = { url: 'https://google.com', method: 'GET' as 'GET' }
function handleRequest(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE') {

}
handleRequest(req.url, req.method)

/** Not null  assertion */
function liveDangerously(x?: number | undefined) {
    // No error
    console.log(x!.toFixed());
}

interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    sideLength: number,
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch(shape.kind) {
        case 'circle': return shape.radius * shape.radius;
        case 'square': return shape.sideLength * shape.sideLength;
    }
}

type DescribeFunction = {
    description: string,
    new (someArg: number): boolean,
    (a: number): boolean
}

function callSignature(fn: DescribeFunction) {
    console.log(fn.description + " returned " + new fn(3));
}

function longest<Type extends {length: number}> (a: Type, b: Type):Type {
    return a.length > b.length ? a : b;
}

interface ReadOnly {
    readonly prop: string;
}
