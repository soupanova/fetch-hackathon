// fetching data

async function trivia(){
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    console.log(data)
}
