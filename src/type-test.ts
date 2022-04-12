export interface TypeTestProp {
    a: number,
    b: number
}

export function typeTest(typeProp: TypeTestProp) {
    return [new Date(), typeProp.a + typeProp.b];
}

