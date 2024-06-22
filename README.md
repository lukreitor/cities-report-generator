# design-pattern
# Cities Report Generator

## Descrição

O projeto Cities Report Generator é uma aplicação Node.js que gera relatórios de cidades em diferentes formatos (HTML e TXT) a partir de arquivos JSON ou CSV. O objetivo deste projeto é demonstrar a aplicação de padrões de design e princípios SOLID para criar um código mais modular, reutilizável e fácil de manter.


## Estrutura de Pastas
root
│── data
│ ├── cidades-1.json
│ ├── cidades-2.json
│ └── cidades.csv
│── requirements
│ ├── 01.txt
│ ├── 02.txt
│ └── 03.txt
│── src
│ ├── AbstractFormater.js
│ ├── CitiesReporter.js
│ ├── FormaterHTML.js
│ ├── FormaterTXT.js
│ ├── FormaterFactory.js
│ ├── DataReader.js
│ └── adapters
│ ├── JSONDataAdapter.js
│ ├── CSVDataAdapter.js
│── index.js
│── test.js
└── package.json

## Padrões de Projeto Utilizados

### 1. Factory Method
- **Justificativa:** Permite a criação de objetos sem especificar a classe exata do objeto que será criado, facilitando a extensão do sistema para suportar novos tipos de formatação.

### 2. Adapter
- **Justificativa:** Permite que classes com interfaces incompatíveis trabalhem juntas. Utilizamos o Adapter para ler dados em diferentes formatos, como JSON e CSV.

### 3. Strategy
- **Justificativa:** Permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Aplicamos a estratégia de formatação de relatórios para diferentes formatos de saída (HTML e TXT).

## Princípios SOLID Aplicados

### 1. Single Responsibility Principle (SRP)
- Cada classe tem uma única responsabilidade. As classes de formatação e leitura de dados foram separadas para cumprir esse princípio.

### 2. Open/Closed Principle (OCP)
- As classes estão abertas para extensão, mas fechadas para modificação. A introdução do Factory Method facilita a adição de novos formatos de saída sem alterar o código existente.

### 3. Dependency Inversion Principle (DIP)
- Dependemos de abstrações em vez de implementações concretas. As estratégias de formatação e leitura de dados são injetadas nas classes de alto nível.

## Como Executar

### Pré-requisitos
- Node.js instalado.

### Instalação

Clone o repositório atual:
```bash
git clone [URL_DO_REPOSITORIO_ATUAL]

Navegue até o diretório do projeto:

bash
Copy code
cd cities-report-generator
Instale as dependências:

bash
Copy code
npm install
Uso
Para gerar um relatório, execute o seguinte comando:

bash
Copy code
node index.js [formato] [arquivo]
[formato]: Formato de saída do relatório (html ou txt).
[arquivo]: Nome do arquivo de entrada localizado no diretório data.
Exemplo:
bash
Copy code
node index.js html cidades-1.json
Testes
Para executar os testes e garantir a consistência das saídas esperadas após as alterações, execute:

bash
Copy code
node test.js
Links dos Repositórios
Repositório Antigo
Repositório Atual