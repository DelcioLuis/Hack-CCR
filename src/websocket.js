const soketio = require("socket.io");
let User = [];
let Tec = [
    {
        id: 12,
        idsocket:"1socket.id1",
        email: "shsj",
        estado:1,
        nivel:"Teste",
    }
];
let io;
exports.setupWebsocket = (server) => {
    io = soketio(server);

    io.on("connection", socket => {
        const { email, id, nivel }  = socket.handshake.query;
        if(nivel =="Tec"){
            Tec.push({
                id: id,
                idsocket:socket.id,
                email: email,
                estado:1,
                nivel:nivel,
            })
        }
        else if (nivel == "User"){
            User.push({
                id: id,
                idsocket:socket.id,
                email: email,
                estado:1,
                nivel:nivel,
            })
        }
            console.log("Usurio conectado com ID: ", socket.id)
           
            socket.emit("TecOn", Tec)

        socket.on("disconnect", () => {
            Tec.map((tec) => {
                if(socket.id == tec.idsocket){
                    Tec.splice(tec);
                }
            })
            User.map((user) => {
                if(socket.id == user.idsocket){
                    User.splice(user);
                }
            })
            socket.emit("Seu ID : ", socket.id)
            console.log("Usurio desconectado com ID: ", socket.id)
        })
        socket.on("UPDATE", () =>{
            socket.emit("UPDATE")
        })
        socket.on("TecUP", () =>{
            setTimeout(() =>{
                socket.emit("TecOn", Tec)
                console.log("TECS",Tec)
            },9000)
        })

    });
}

exports.SendState = (servicos) =>{
    io.emit(servicos.id, servicos)
};

exports.alertTec = (tecemail) =>{
    io.emit(tecemail)
};
exports.alerReq = (idtec) =>{
    io.emit(`novaReq${idtec}`)
    console.log("gggggg")
    console.log(`novaReq${idtec}`)
}
exports.ProdUpdate = () =>{
    io.emit(`produpp`)
}
