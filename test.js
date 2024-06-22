// test.js
import { exec } from 'child_process';
import assert from 'assert';

const tests = [
  { format: 'html', file: 'cidades-1.json', expected: '<!DOCTYPE HTML>' },
  { format: 'txt', file: 'cidades-2.json', expected: 'Relatório de Nomes de Cidades' },
  // Adicione mais testes conforme necessário
];

tests.forEach(test => {
  exec(`node index.js ${test.format} ${test.file}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro: ${stderr}`);
      return;
    }
    assert(stdout.includes(test.expected), `Erro no teste com formato ${test.format} e arquivo ${test.file}`);
    console.log(`Teste com formato ${test.format} e arquivo ${test.file} passou.`);
  });
});
