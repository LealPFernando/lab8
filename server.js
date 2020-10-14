const { table } = require("console")
var express = require("express")
var path = require("path")

var app = express()
var port = 3000

app.use(express.urlencoded({extended : true}))
app.use(express.json())

var tables = [
    {
        customerName: "Fernando",
        customerEmail: "A01566224@itesm.mx",
        customerID: "224",
        phoneNumber: "6111111"
    },
    {
        customerName: "Alejandro",
        customerEmail: "A01566200@itesm.mx",
        customerID: "200",
        phoneNumber: "6121111"
    }
]

var waiting = [
    {
        customerName: "Max",
        customerEmail: "A01566000@itesm.mx",
        customerID: "000",
        phoneNumber: "6111112"
    }
]

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "home.html"))
})

app.get("/reserve", function(request, response){
    response.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function(request, response){
    response.sendFile(path.join(__dirname, "tables.html"))
})

app.listen(port, function(){
    console.log("Server on port " + port)
})


app.get("/api/tables", function(request, response){
    response.json(tables)
})

app.get("/api/waitlist", function(request, response){
    response.json(waiting)
})

app.post("/api/tables", function(request, response){
    var tableTemp = request.body
    
    if(tables.length < 5){
        tables.push(tableTemp)
    }else{
        waiting.push(tableTemp)
    }
})