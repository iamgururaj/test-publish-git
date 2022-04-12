export interface TypeTestProp {
    a: number,
    b: number
}

export default function typeTest(typeProp: TypeTestProp) {
    return [new Date(), typeProp.a + typeProp.b];
}

