const db = require("../config/database");

// Laudo Paciente Table 1 - teste
// ==> Método responsável por criar um novo 'Laudo':
exports.createProduct = async (req, res) => {
    const { nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } = req.body;
    const { rows } = await db.query(
        "INSERT INTO paciente_laudo (nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
        [nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao]
    );
    res.status(201).send({
        message: "Product added successfully!",
        body: {
            product: { nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao }
        },
    });
};

// ==> Método responsável por listar todos os 'Laudo':
exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM paciente_laudo ORDER BY nome ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Paciente' pelo 'Id':
exports.findProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM paciente_laudo WHERE id_paciente = $1', [productId]);
    res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Laudo':
exports.updateProductById = async (req, res) => {
    // const productId = parseInt(req.params.id);
    const {nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } = req.body;
    const response = await db.query(
        "UPDATE paciente_laudo SET idade = $1, registro = $2, unidade = $3, data_coleta = $4, adequabilidade = $5, epitelios = $6, alteracoes_celulares = $7, microbiologia = $8, atipias_celulares = $9, conclusao = $10 WHERE nome = $11",
        [idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao, nome]
    );
    res.status(200).send({ message: "Product Updated Successfully!" });
};

// ==> Método responsável por deletar um 'Laudo':
exports.deleteProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    await db.query('DELETE FROM paciente_laudo WHERE id_paciente = $1', [
        productId
    ]);
    res.status(200).send({ message: 'Product deleted successfully!', productId });
};


// Laudo Paciente Table 2
// ==> Método responsável por criar um novo 'Laudo':
exports.createProduct2 = async (req, res) => {
    const { nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, microbiologia2, atipias2, conclusao2 } = req.body;
    const { rows } = await db.query(
        "INSERT INTO paciente_laudo2 (nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, microbiologia2, atipias2, conclusao2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        [nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, microbiologia2, atipias2, conclusao2]
    );
    res.status(201).send({
        message: "Product added successfully!",
        body: {
            product: { nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, microbiologia2, atipias2, conclusao2 }
        },
    });
};

// ==> Método responsável por listar todos os 'Laudo':
exports.listAllProducts2 = async (req, res) => {
    const response = await db.query('SELECT * FROM paciente_laudo2 ORDER BY nome2 ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Paciente' pelo 'Id':
exports.findProductById2 = async (req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM paciente_laudo2 WHERE id_paciente2 = $1', [productId]);
    res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Laudo':
exports.updateProductById2 = async (req, res) => {
    // const productId = parseInt(req.params.id);
    const {nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, microbiologia2, atipias2, conclusao2 } = req.body;
    const response = await db.query(
        "UPDATE paciente_laudo2 SET idade2 = $1, registro2 = $2, unidade2 = $3, data_coleta2 = $4, adequabilidade2 = $5, epitelios2 = $6, microbiologia2 = $7, atipias2 = $8, conclusao2 = $9 WHERE nome2 = $10",
        [idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, microbiologia2, atipias2, conclusao2, nome2]
    );
    res.status(200).send({ message: "Product Updated Successfully!" });
};

// ==> Método responsável por deletar um 'Laudo':
exports.deleteProductById2 = async (req, res) => {
    const productId = parseInt(req.params.id);
    await db.query('DELETE FROM paciente_laudo2 WHERE id_paciente2 = $1', [
        productId
    ]);
    res.status(200).send({ message: 'Product deleted successfully!', productId });
};


