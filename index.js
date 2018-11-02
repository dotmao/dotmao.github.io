const express = require('express')
const path = require("path")
const sendgrid = require('@sendgrid/mail')
const bodyParser = require('body-parser')


//app is referrring to express object from node, this object includes props such as GET, post, delete, update
const app = express()


// convert java into javascript
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

sendgrid.setApiKey('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')

// express assume an existing domain
// 1st param = the route or end point default communicating to resquest object from Express
// 2nd param = function that fires off that gives your off the request made and respond made.
//__dirname communicates the root directory of the project folder.
app.get('/',function(req, res){
    //we are going to send the resources that will redener the web page
    //the resource is the client folder
    app.use(express.static("client"))

    //below we are sending the static index.html
    res.sendFile(path.join(__dirname, "client/index.html"))
})

app.post('/postemail',function(req, res){
  const message = {
    to:'dorothy.hongqian@gmail.com',
    from:req.body.user.email,
    subject:'New message from ' + req.body.user.firstName + ' ' + req.body.user.lastName,
    text:req.body.user.message
  }
  JSON.stringify(message)
  sendgrid.send(message)
  res.redirect('/')
})



app.listen(4000)
console.log('We are now listening on port 4000')
