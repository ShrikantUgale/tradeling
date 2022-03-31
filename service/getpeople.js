import fetch from 'node-fetch';

const mapData = async (data) => {
    
    let mappedData = data.map((data) => data.name);
    return mappedData;

}

export default async function getPeople() {
    try {
        const response = await fetch('http://swapi.dev/api/people');
        const data = await response.json();

        const mappedData = mapData(data.results);

        return mappedData;



    } catch(err) {

        console.log(err.message);
    }

}