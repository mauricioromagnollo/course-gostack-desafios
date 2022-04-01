try {
    throw n; // lança uma exceção com um valor numérico
 } catch (e) {
    if (e <= 50) {
       // instruções para tratar exceções 1-50
    } else {
       // não pode tratar esta exceção então relança
       throw e;
    }
 }

try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e) {
    if (e instanceof TypeError) {
        // declarações para manipular exceções TypeError
    } else if (e instanceof RangeError) {
        // declarações para manipular exceções RangeError
    } else if (e instanceof EvalError) {
        // declarações para manipular exceções EvalError
    } else {
       // declarações para manipular quaisquer exceções não especificadas
       logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
    }
}

openMyFile()
try {
   // vincula o recurso
   writeMyFile(theData);
}
finally {
   closeMyFile(); // sempre fecha o recurso
}