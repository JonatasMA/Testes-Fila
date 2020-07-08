'use strict'

const Queue = use('Bee/Queue');
const { exec } = require("child_process");

class ExecutaJobController {
    Executar() {
        Queue.get('addition').process((job, done) => {
            exec(
                `php /home/jonatas/projetos/crm/api/api_cli.php joe Pessoa cadastro '{"Pessoa::nome": "teste ${job.id}", "Origem": "7", "Token": "1588b0bea5ebad53fd0dd70efdf1f3e6"}'`,
                (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return done(null, job.data.x + job.data.y);
                        // return;
                    }
                    console.log(`stdout: ${stdout}`);
                    return done(null, job.data.x + job.data.y);
                }
            );
        });
        return 'foi sim bro';
    }
}

module.exports = ExecutaJobController
