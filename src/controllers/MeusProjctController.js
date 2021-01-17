const crypto  = require("crypto");
const  connection = require("../database/connections");



module.exports = {

  async index(request, response){

    try{
      const meuprojecto = await connection("meuprojecto").select("*")

      return response.json(meuprojecto)
    }catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }

  },

  async create(request, response){

    const {
      nome,
      edital,
      abertura,
      encerramento,
      progresso,
      pendecias,
      id,
      modicacao
    } = request.body;

    //try{
      const verficar = await connection("meuprojecto").where({nome}).select("*")
      
      if(verficar.length >=1){

        return response.status(401).json({ error: 'Operacao Recusada.'})

      }
      const conta = await connection("meuprojecto").insert({
        id,
        nome,
        edital,
        abertura,
        modicacao,
        encerramento,
        progresso,
        pendecias,
        modicacao
      })
      return response.json(id)
      
    //}catch{
    //  return response.status(401).json({ error: 'Operacao Recusada.' })
    //}
  },


  async delete(request, response) {

    const { id } = request.params
    try{}catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }
  },
    
  async atualiza(request, response) {

    const { id } = request.params
    try{}catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }
  },

  
};