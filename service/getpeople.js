import fetch from 'node-fetch';

let arrPeople = [];

const mapData = (data) => { 

    return data.map((data) => data.name);
    
}

export default async function getPeople(link = 'http://swapi.dev/api/people') {
    try {
        const response = await fetch(link);
        const data = await response.json();
        arrPeople.push(...mapData(data.results));

        if(data.next) {
           await getPeople(data.next)
        }

        return arrPeople;



    } catch(err) {

        console.log(err.message);
    }

}