## API de Gerenciamento de Estacionamentos

#### NestJS / TypeOrm / Mysql / Swagger

#### Endpoints

#### Estabelecimentos
- GET /estabelecimentos - Retorna todos os estabelecimentos cadastrados.
- GET /estabelecimentos/:id - Retorna um estabelecimento pelo seu ID.
- POST /estabelecimentos - Cria um novo estabelecimento.
- PUT /estabelecimentos/:id - Atualiza um estabelecimento existente.
- DELETE /estabelecimentos/:id - Remove um estabelecimento pelo seu ID.

#### Veículos
- GET /veiculos - Retorna todos os veículos cadastrados.
- GET /veiculos/:id - Retorna um veículo pelo seu ID.
- POST /veiculos - Cria um novo veículo.
- PUT /veiculos/:id - Atualiza um veículo existente.
- DELETE /veiculos/:id - Remove um veículo pelo seu ID.

#### Controle de Acesso
- POST /acessos - Registra a entrada ou saída de um veículo.
- GET /acessos/soma-entradas-saidas - Retorna a soma total de entradas e saídas de veículos.
- GET /acessos/soma-entradas-saidas-por-hora - Retorna a soma de entradas e saídas de veículos por hora.

####Documentação (Swagger)
A documentação completa da API está disponível no Swagger.
http://localhost:3333/api
