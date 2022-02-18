const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000', //http://localhost:3000
    optionsSuccessStatus: 200 // For legacy browser support
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());

const swapDevApi = "https://swapi.dev/api/people/"

const getNumberOfPages = (response) => {
    const pageSize = response["results"].length;
    const totalNumberOfPeople = response["count"];
    const numberOfPages = Math.ceil(totalNumberOfPeople/pageSize)
    return numberOfPages
}

const getPeople = (allPeople) => {
    const people = allPeople["results"].map((person) => {
        const {name, height, mass, gender, homeworld} = person
        return {name, height, mass, gender, homeworld}
    })
    return people
}

app.get('/people/', async (req, res) => {
    const allPeople = await fetch(swapDevApi);
    try {
        const jsonPeople = await allPeople.json()
        const people = getPeople(jsonPeople);
        
        res.send({people, pages: getNumberOfPages(jsonPeople)})
    } catch (error) {
        res.status(500).send("server error");
    }

})

app.get('/people/search/', async (req, res) => {
    const searchQuery = req.query.name
    //validate name
    const nameSearch = await fetch(`${swapDevApi}?search=${searchQuery}`);
    if(nameSearch.count === 0){
        return res.send({results: []})
    } else{
        const jsonPeople = await nameSearch.json()
        const people = getPeople(jsonPeople);
        return res.send({people, pages: getNumberOfPages(jsonPeople)})
    }
})

app.get('/people/:page', async (req, res) => {
    //check page number type
    const pageNumber = req.params.page;
    const allPeople = await fetch(`${swapDevApi}?page=${pageNumber}`);
    try {
        const jsonPeople = await allPeople.json()
        const people = getPeople(jsonPeople);
        res.send({people})
    } catch (error) {
        if(error instanceof TypeError){
            return res.send([])
        } else{
            res.status(500).send("server error");
        }
        
    }

})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  })