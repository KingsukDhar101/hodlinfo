const client = require('../db');

module.exports.getAllProducts = async function(){
  try{
    let result = await client.query("select * from hodlinfo1");
    // console.log(result.rows);
    return result.rows;
  }catch(err){
    console.log(err)
  }
}