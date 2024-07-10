export default function(req,res) {
    res.status(202).json({
        id: req.query.id,
        name: 'Daniel #01'
    })
}