import fetch from 'node-fetch';

const mapData = (data) => { 
      
    return data.map((data) => data.name);
    
}

export default async function getPeople() {
    try {
        const response = await fetch('http://swapi.dev/api/people');

        const data = await response.json();

        return mapData(data.results);



    } catch(err) {

        console.log(err.message);
    }

}