import { getNotesAvg, getSumOfAllValues } from "../src/arrayFunctions";

describe('Testing getSumOfAllValues()', () => {

  // TEST 0
  it('should return 0 when the array is empty', () => {
    const array = [];
    const expectedResult = 0;

    const result = getSumOfAllValues(array);

    expect(result).toBe(expectedResult);

  });

  // TEST 1
  it('should be a number when the array is []', () => {
    const arr1 = [];
    const result = getSumOfAllValues(arr1);
    expect(typeof result).toBe("number");
  });

  // TEST 2
  it('should be a number when array length is greater than 0', () => {
    const arr2 = [0, 1, 2]; 

    const resul = getSumOfAllValues(arr2);

    expect(arr2).toContain(0);
    expect(arr2).toHaveLength(3);
    expect(arr2.length).toBeGreaterThan(0);
    expect(resul).toBe(3);
  });

  it('should throw and error if the array contains any string', () => {
    const arr3 = [0, '', 2];
    expect(() => getSumOfAllValues(arr3)).toThrow();

    // Si getSumOfAllValues fuese asincrono: 
    // await expect(myAsyncFunction()).rejects.toThrow('Error message');
  });
});



describe('Testing getNotesAvg(arr): ', () => {
  it ('Should return the average of the array: ', () => {
    const avg = getNotesAvg([6,4,7,3,5,5]);
    expect(avg).toBe(5);
    expect([6,4,7,3,5,5]).toContain(5);  
    expect('Hola Mundo').toContain('Mundo');  
  });

  it('Should throw an error if notes has any string: ', () => {
    const arr = ['', 130, '0'];
    expect(() => getNotesAvg(arr)).toThrow();
  });
});


/**
 * 
 * .not() --> para negar p.e.--> expect(2).not().toBe(1) dará test correcto 
 * toBe() --> el equivalente a '===', 
 * toBeNull() --> que el valor esperado no sea null.
 * toBeThruthy() --> que no sea: 0, false, '', null, undefinded o NaN.
 * toBeDefined() --> Que esté definido, que no sea undefined.
 * toEqual(val) --> Igual al contenido de objetos o arrays.
 * toContain(item) --> Que un array o un objeto tengan el item pasado por parámetro  o sino 
 * toHaveLength(n) --> for arrays para saber cual es su tamaño --> pero esto es igual a expect(arr.length).toBe(n);
 * toMatch() --> No mucho caso 
 * toThrow() --> exceptions pero si no es async se debe hacer expect(() => myFunc()).toThrow() ya que de esta manera expect tiene cierto control del tiempo de ejecución de myFunc() 
 * toBeGreaterThan(X), toBeLessThan(Y) --> numeric comparissions  
 * toHaveBeenCalled(), toHaveBeenCalledWith(arguments...), toHaveBeenCalledTimes(x) --> para funciones que han sido mockeadas
 * resolve, rejects --> para funciones asíncronas.
 * 
 */



/**
 * Dudas: 
 * expect({pasos: 2, distancia: 0})ToContain({pasos: 2});  
 */




/**
 * 
 * .not()  --> negar la acción del matcher
 * .toBe() --> equivalente a '==='
 * .toEqual() --> para comparar el contenido de arrays y objetos
 * .toContain() --> para comprobar que un array tengo un item (NO SUBARRAYS [5,5,5,5].toContrain([5])) O que un string contenga un substring  expect("Me llamo Marcos").toContain("Me")
 * .toBeNull() --> comprobar que el valor esperado sea null
 * .toBeDefined() --> para que un valor esperado no sea undefined 
 * .toMatch('...') --> 
 * 
 * 
 * .toBeGreaterThan() --> 
 * .toBeLessThan()    -->
 * 
 * toHaveBeenCalled(NombreDeLaFuncionAnidada)
 * toHaveBeenCalledWith(argumentos....)
 * toHaveBeenCalledTimes(n)
 * 
 *  
 */


/**
 * 
 * .toHaveLength(n)   --> 
 * .toThrow()         --> Comprobar si se lanza una exepción
 * 
 */