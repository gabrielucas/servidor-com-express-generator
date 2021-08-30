const ProductController = {
    index: (req, res) => {
        res.render('produtos', {
            titulo: "PRODUTOS",
            subtitulo: "PRODUTOS DO LUCAS"
        })
    },

    exibirProduto: (req, res) => {
        const { nomeProduto } = req.params

        res.render('produtos',
            {
                titulo: "PRODUTO",
                subtitulo: nomeProduto,
                preco: 2500.00
            })
    },


}

module.exports = ProductController;