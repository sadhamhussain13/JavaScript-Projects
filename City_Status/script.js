const button = document.querySelector( 'button' ); 
let resultdiv = document.createElement('div')
resultdiv.id= 'result'
document.getElementById("wrapper").appendChild(resultdiv);

button.addEventListener( "click", displayStats)
function displayStats(){
    console.log('clicked'); // Button object
    const input = document.getElementById('input')
    const city = input.options[input.selectedIndex].value
    let population = 0, literacyrate = 0, language = 0;
    switch(city){
        case 'Bengaluru':
            population=17538649;
            literacyrate=82.7
            language='Kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyrate = 90.20
            language = 'Tamil'
            break
        case  'Delhi':
            population=28500000;
            literacyrate=74.7
            language='Hindi'
            break
        case  'Mumbai':
            population=12835618;
            literacyrate=86.1
            language='Marathi';
            break  
    }

    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language}. and literacy rate is ${literacyrate}%`
    console.log(text)
    document.getElementById('result').innerHTML = text
}


