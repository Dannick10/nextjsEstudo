
export default function handle(req: Request,res: any) {
    res.status(200).json([
        {id:1, nome: 'caneta', preco: 2.20},
        {id:2, nome: 'lapis', preco: 1.90},
        {id:3, nome: 'borracha', preco: 1.25},
        {id:4, nome: 'piloto', preco: 5.60},
    ])
}
