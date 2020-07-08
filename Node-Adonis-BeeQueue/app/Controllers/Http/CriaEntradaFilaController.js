'use strict'

const Queue = use('Bee/Queue');

class CriaEntradaFilaController {
    teste() {
        Queue.get('addition')
            .createJob({ x: 2, y: 3 })
            .save();
        return Queue;
    }
}

module.exports = CriaEntradaFilaController
