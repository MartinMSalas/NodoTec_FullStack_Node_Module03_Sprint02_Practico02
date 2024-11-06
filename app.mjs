import express from 'express';

const app  = express();
const PORT = 3000;

app.get('/user/:id', (req, res) => {
    const userId= req.params.id;
    console.log(req.params);
    res.send(`Perfil con usuarios ID: ${userId}`);

})

app.listen(PORT, ()=>{
    console.log(`Server corriendo`);
})