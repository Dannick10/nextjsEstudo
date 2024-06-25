export default function questionario(req, res) {
    if(req.method === 'GET') {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'qual sua cor favorita',
            resposta: [
                'branco','preto','amarelo','laranja'
            ]
        })} else {
        res.status(405).json()
    }
}

