O desafio proposto pelo time Alest foi a criação de im CRUD.

Primeiramente foi feito todo o backend do projeto usando node e firebase:
1°: Foi feita toda a conexão com o banco de dados nos documentos config.js e db.js. No mesmo plano desses documentos foi criado um documento ".env" para passar os dados do banco de maneira segura. Os dados de tal documentos estão dispostos abaixo.

#expres server config

PORT=8080
HOST=localhost
HOST_URL=http://localhost:8080



#firebase database config

API_KEY=AIzaSyAZ2-aJy2ZoVHGy8eEhRhzvBJmE6Bg1P9Q
AUTH_DOMAIN=desafio-alest-6ca20.firebaseapp.com
PROJECT_ID=desafio-alest-6ca20
STORAGE_BUCKET=desafio-alest-6ca20.appspot.com
MESSAGING_SENDERID=1042326808847
APP_ID=1:1042326808847:web:b43b169ec46bc0fc94b67a

2°: Foi criado um modelo no documento produto.js para a respectiva inserção de produtos no banco de dados.
3°: Foi feito o documento "produtoController.js" com as funções CRUD.
4°: A ultima parte do backend foi a criação das rotas especificadas no documento "produto-routes.js".



