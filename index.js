const Aluno = require('./aluno');
const Turma = require('./turma');
const TurmaPresencial = require('./turmaPresencial');

// Criando uma instância de Aluno
const aluno1 = new Aluno('João', 'joao123', '123456');

// Criando uma instância de Turma
const turma1 = new Turma('A001', 8.5, true);

// Criando uma instância de TurmaPresencial
const turmaPresencial1 = new TurmaPresencial('B002', 7.0, false, 90);

// Exibindo informações dos objetos criados
console.log('Aluno:', aluno1);
console.log('Turma:', turma1);
console.log('Turma Presencial:', turmaPresencial1);