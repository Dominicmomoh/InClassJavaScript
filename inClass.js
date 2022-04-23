const teams = ['Lakers', 'Warriors', 'Heat', 'Celtics', 'Nets']
const numbers = [1, 2, 3, 4, 5]
const booleans = [true, false]

function add(a,b,c ){
    var teams = a;
    var numbers = b;
    var booleans = c;
    if(teams === a){
        return teams.push('Lakers')
    } else return('different data types')
    if(numbers === b){
        return numbers.push(3)
    } else return('different data types')
    if(booleans === c){
        return true;
        return false;
    }
} 
console.log(add('Sports',8,true))
console.log(add(Sports,'8',false))

