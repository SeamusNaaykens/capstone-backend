exports.seed = async function (knex) {
    // // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            id: 'sss0s57b-cee6-5693-b5cd-s7e6cb25f5b7',
            username: 'Seamus Naaykens',
            email: 'seamus@gmail.com',
            location: ' Calgary SW',
            profile_statement: 'I am the creator of this application, I hope you enjoy!',
            favourite_produce: 'Pineapple, Dragonfruit, Cherry Tomatoes and hot peppers!',
            image: 'https://growlocal.herokuapp.com/thumbnail/seamuspic.jpg',
            password: '12345'
        },
        {
            id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
            username: 'Darius Naaykens',
            email: 'dpapn@gmail.com',
            location: ' Calgary SW',
            profile_statement: 'I love my brother, veggies and video games in that order',
            favourite_produce: 'Bok Choy',
            image: 'https://growlocal.herokuapp.com/thumbnail/darius.JPG',
            password: '12345'

        },
        {
            id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
            username: 'Maclayne Simone',
            email: 'mac_rox_sox@me.com',
            location: 'Calgary SW',
            profile_statement: 'I love growing my own organic produce, it is so rewarding watching it grow',
            favourite_produce: 'Mangos',
            image: 'https://growlocal.herokuapp.com/thumbnail/mac-pic.jpg',
            password: '12345'
        },
        {
            id: '150a36cf-f38e-4f59-8e31-39974207372d',
            username: "Grayson O'Brien",
            email: 'realraver@hotmail.com',
            profile_statement: ' I love red things and SENDING',
            favourite_produce: ' Whatever fruit Essential is',
            location: 'West Vancouver',
            image: 'https://growlocal.herokuapp.com/thumbnail/grayson.PNG',
            password: '12345'
        },
        {
            id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
            username: 'Pavle Lozo',
            email: 'drpavle@gmail.com',
            profile_statement: 'Optometrist and big fruit lover, IDEMO SRBIJO!!!',
            favourite_produce: 'Carrots cause they are good for your eyes.',
            location: 'Calgary SE',
            image: 'https://growlocal.herokuapp.com/thumbnail/pavle.JPG',
            password: '12345'
        },
        {
            id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
            username: 'James Wilson',
            email: 'jwilson@zanyworldwide.com',
            profile_statement: "There's a snake in my boot!",
            favourite_produce: 'Papayas, strawberries and mushrooms',
            location: 'Calgary SW',
            image: 'https://growlocal.herokuapp.com/thumbnail/James.jpg',
            password: '12345'
        },
        {
            id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
            username: 'Jack Evans',
            email: 'londonisred@yahoo.ca',
            profile_statement: 'Just a typical English bloke, growing some food at home.',
            favourite_produce: 'Anything English',
            location: 'Calgary NE',
            image: 'https://growlocal.herokuapp.com/thumbnail/jack.jpg',
            password: '12345'
        },
        {
            id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
            username: 'Nick Taylor',
            email: 'babynickbeatboxer@gmail.com',
            profile_statement: 'New to the growing food game!',
            favourite_produce: ' Peaches, Apples and Onions',
            location: 'Calgary NW',
            image: 'https://growlocal.herokuapp.com/thumbnail/nick.jpg',
            password: '12345'
        },
        {
            id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
            username: 'Stefan Djordjevic',
            email: 'djstofwell@hotmail.com',
            profile_statement: ' Hi! My friends call me Stef, and I love growin stuff',
            favourite_produce: ' Raspberries, Grapes, Tomatoes',
            location: 'Calgary SE',
            image: 'https://growlocal.herokuapp.com/thumbnail/stef.jpg',
            password: '12345'
        },
        {
            id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
            username: 'Harley Streten',
            email: 'holdinon@gmail.com',
            profile_statement: 'When I am not making DOPE beats I am growing food',
            favourite_produce: 'Starfruit, Acai, Rhubarb',
            location: 'Byron Bay, Australia',
            image: 'https://growlocal.herokuapp.com/thumbnail/flume-pic.png',
            password: '12345'
        },
        {
            id: '83433026-ca32-4c6d-bd86-a39ee8b7303e',
            username: 'Thierry Henry',
            email: 'vavavoom@me.com',
            profile_statement: 'I am number 1 on the pitch and in the garden',
            favourite_produce: 'Kale, Mushrooms, Grapes',
            location: 'Calgary SW',
            image: 'https://growlocal.herokuapp.com/thumbnail/henry-pic.jpg',
            password: '12345'
        },

    ]);
};