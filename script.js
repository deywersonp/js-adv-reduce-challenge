//HOF REDUCE - OBJETIVO: Somar os valores de uma propriedade dentro de um array
//e retornar um único valor com o resultado total da soma

//Função para criar novo estudante com tipo objeto; Recebe como parâmetro
//nome e idade.
let newStudent = (name, age) => {
  return { name, age }
}

//Variável que recebe um array chamando a função para criar novos estudantes
let students = [
  newStudent("Maria", 23),
  newStudent("Pedro", 45),
  newStudent("Joaquina", 29),
  newStudent("João", 35)
];


//Somar idade Alunos - HOF Reduce 

function sumAge() {
  //Atribui o valor inicial a variável allAge
  let allAge = 0;

  //Para cada estudante, dentro do array de estudantes, pega a idade de cada um
  //e soma, e atribui o valor total da soma a variável allAge. Retorna esse valor final. 
  for (let student of students) {

    allAge += student.age;
  }

  return allAge;
}

console.log(sumAge());


//Concatenar nome dos Alunos - HOF Reduce 

function nameOfAllStudents() {
  //Atribui o valor inicial a variável nameOfAllStudents
  let nameOfAllStudents = "";

  //Para cada estudante, dentro do array de estudantes, pega o nome de cada um
  //e concatena, adicionando um espaço entre eles, e atribui o valor total da soma 
  //a variável nameOfAllStudents. Retorna esse valor final. 

  for (let student of students) {

    nameOfAllStudents += student.name + " ";
  }

  return nameOfAllStudents;
}

console.log(nameOfAllStudents());