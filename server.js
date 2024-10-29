const express = require('express') // Express package
const app = express() // app variable is hold your use of Express (so you don't have to use the method names). App is like HTTP from before
const cors = require('cors') // Paackage that's installed so you don't have cors errors
const PORT = 8000 // Variable to hold port number

app.use(cors())

/*
1. User clicks the button OR enters the url to trigger GET request to the server
2. Make a GET request to the page to the 8000 server on the root route
*/

// object that holds the information for the rappers
const characters = { 
    'spongebob': {
        'name': 'Spongebob',
        'species': 'sponge',
        'description': 'A square yellow sponge named SpongeBob SquarePants lives in a pineapple with his pet snail, Gary, in the city of Bikini Bottom on the floor of the Pacific Ocean. He works as a fry cook at the Krusty Krab. During his time off, SpongeBob has a knack for attracting trouble with his starfish best friend, Patrick. Arrogant octopus Squidward Tentacles, SpongeBob’s neighbor, dislikes SpongeBob because of his childlike behavior.',
        'likes': 'everything.',
        'dislikes': 'nothing.',
    },
    'patrick':{
        'name': 'Patrick',
        'species': 'starfish',
        'description': 'Have you been living under a rock? Well, Patrick Star has! Which is probably why he calls pencils “writing sticks” and doesn’t know if mayonnaise is an instrument or not. Even though his attention span is approximately .02 seconds long, Patrick is still the sweetest starfish around!',
        'likes': 'Jellyfishing, donuts, sleeping.',
        'dislikes': 'Spiders, thinking, bullies.',
    },
    'squidward':{
        'name': 'Squidward',
        'species': 'squid',
        'description': 'Squidward Tentacles is SpongeBob’s not-so-happy neighbor who would do anything to get away from him. Unfortunately for Squidward, he and SpongeBob are also coworkers at the Krusty Krab. This clarinet-playing cashier just wants some peace and quiet. Too bad, Squidward, you live in the rowdiest neighborhood under the sea!',
        'likes': 'Art, bubble baths, reading.',
        'dislikes': 'SpongeBob, waking up, life in general.'
    }
}

// This is the root route. It's similar to an even listener
app.get('/', (request, response)=>{ // function that fires as a result of it being called. You always need request and response parameters
    response.sendFile(__dirname + '/index.html')
    // Function will responnd with the HTML file
    // __dirname means it'll find it no matter where it is in the directory. Dir name is short for directory name. If you don't know what folder you're in. Eventually we won't use __dirname
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
// GET request on this route. Look at the parameter 'name' annd make it lowercase
app.get('/api/:input',(request,response)=>{
    const characterName = request.params.input.toLowerCase()

    // If name exists in rapper object. We don't need the reequire url to get things
    if( characters[characterName] ){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
    
})

// We'll get deeper into the code piece below later on in the week
// process.env.PORT is more flexible to pull for the other persons files first. Don't hard code your own port into this
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

