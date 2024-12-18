const userModel = require("../models/userModel"); // Importa o model para interagir com o banco

//função que lista todos os jogos
exports.getJogos = (req, res) => {  //req: requisição e res: resposta
userModel.getAllJogos((err, jogos) => { 
if (err) {
res.status(500).send('Erro ao buscar jogos'); 
} else {
res.json(jogos); //vai retornar os jogos em formato json
}
});
};

//função que lista os jogos por gênero
exports.getJogosByGenero = (req, res) => {
   const { generos } = req.params; //vai fazer uma requisição dos parâmetros - o parâmetro é generos
   userModel.getJogosByGenero (generos, (err, jogos) => {
    if (err) return res.status(500).send ('Erro ao buscar gênero'); //
    res.json(jogos)
   });
};

//função que lista os jogos pela plataforma
exports.getJogosByPlataforma = (req, res) => {
    const { plataforma } = req.params;
    userModel.getJogosByPlataforma (plataforma, (err, jogos) => {
     if (err) return res.status(500).send ('Erro ao buscar plataforma');
     res.json(jogos)
    });
 };

//função onde cria novos jogos
exports.createJogos = (req, res) => {
    const data = req.body; //da requisição vem o corpo
    userModel.createJogos(data, (err) => { //userModel: quando eu estou mandando a minha função para o model
        if (err) {
            return res.status(500).send('Erro ao criar jogo')
        } else {
            res.status(201).send('Jogo criado com sucesso')
        }
    });
};

//Função que atualiza os jogos por ID
exports.updateJogos = (req, res) => {
    const { idJogo } = req.params;
    const data = req.body;
    userModel.updateJogos (idJogo, data, (err) => {
        if (err) {
            res.status (500).send('Erro ao atualizar jogo');
        } else {
            res.send ('Jogo atualizado com sucesso')
        }
    });
};

//Função que deleta os jogos
exports.deleteJogos = (req, res) => {
    const { idJogo } = req.params;
    userModel.deleteJogos (idJogo, (err) => {
        if (err) {
            res.status(500).send('Erro ao deletar jogo');
        } else {
            res.send ('Jogo deletado com sucesso');
        }
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Função que lista os desejos
exports.getListaDesejos = (req, res) => { 
   userModel.getAllListaDesejos((err, ListaDesejos) => {
   if (err) {
   res.status(500).send('Erro ao buscar lista de desejos'); 
   } else {
   res.json(ListaDesejos); //vai retornar os jogos em formato json
   }
 });
};

//Função que cria novos desejos
exports.createDesejos = (req, res) => {
    const data = req.body;
    userModel.createDesejos(data, (err) => {
    if (err) {
    return res.status(500).send('Erro ao adicionar desejo')
    } else {
    res.status(201).send('Desejo criado com sucesso')
    }
  });
};

//Função que atualiza os desejos
exports.updateDesejos = (req, res) => {
    const { idDesejos } = req.params;
    const data = req.body;
    userModel.updateDesejos (idDesejos, data, (err) => {
    if (err) {
    res.status (500).send('Erro ao atualizar desejo');
    } else {
    res.send ('Desejo atualizado com sucesso')
    }
    });
};