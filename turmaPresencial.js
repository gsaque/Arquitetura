const Turma = require('./turma');

class TurmaPresencial extends Turma {
    constructor(codigo, nota, aprovado, frequencia) {
        super(codigo, nota, aprovado);
        this.frequencia = frequencia;
    }
}

module.exports = TurmaPresencial;