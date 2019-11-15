export default {
  "POST /otherExample" : (req, res) => {
    console.log(req.body)
    res.send({
      status : "OK",
      code : 200,
      data : {
        account : "account"
      }
    })
  }
}