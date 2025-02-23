const sum = (a:number , b:number) => {
                                                  return a+b;

  
}
const a = sum (1,2)
console.log(a)
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())