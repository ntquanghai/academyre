const express = require("express");
const router = express.Router();

const mockData = [{
  title: "a",
  number: 1,
  content: "abcdddd"
},
{
  title: "a",
  number: 1,
  content: "abcdddd"
},
{
  title: "a",
  number: 1,
  content: "abcdddd"
},
{
  title: "a",
  number: 1,
  content: "abcdddd"
}]

router.get('/datas', (req,res) => {
  return res.json({
    data: mockData 
  })
})

module.exports = router;