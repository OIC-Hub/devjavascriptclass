

//  const  getdata = async (url) =>{

//     let fetchData = await fetch(url);
//     let jsonData = await fetchData.json()
//     console.log(jsonData)

// }

// getdata(url)

// fetch(url).then(results => {
//     return results.json()
// }).then(data =>{
    
//     console.log(data)
    
// }).catch(err => comsole.log(err))

async function getEx(){
    try{
        let results = await fetch(`https://v6.exchangerate-api.com/v6/cc02bc7972a0c8b71e9ac68b/pair/EUR/GBP`);
        let data = await results.json()
        console.log(data)
    }catch(err){
         console.log(err)
    }
 
}
getEx()