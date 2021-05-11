
exports.seed = async function(knex) {
  await knex("fruits").truncate()
  await knex("fruits").insert([
    {name:"dragon fruit", avgWeightOz: 16.7, delicious: true, color: "red"},
    {name:"durian", avgWeightOz:52.9, delicious:false,color:"yellow",tropical:false},
    {name:"rambutan", avgWeightOz:0.01, delicious:true,color:"red",tropical:true},
  
  ])
  
};
