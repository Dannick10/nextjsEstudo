export default function handle(req: Request, res: any) {
    const id = req.query.id
    res.status(200).json({
        id: id,
        nome: 'Daniel Rocha',
        email: 'limblamblumb@imaui.com'
    })
}