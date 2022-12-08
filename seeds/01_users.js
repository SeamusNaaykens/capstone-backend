exports.seed = async function (knex) {
    // // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
            username:'Darius Naaykens',
            email:'dpapn@gmail.com',
            location:'SW',
            profile_statement: 'Growing veggies and sharing them with family and friends is my favourite pass time!',
            favourite_produce: 'Bok Choy',   
            credentials:'123456',

        },
        {
            id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
            username: 'Maclayne Simone',
            email: 'mac_rox_sox@me.com',
            location: 'SW',
            profile_statement: 'I love growing my own organic produce, it is so rewarding watching it grow',
            favourite_produce: 'Mangos',
            credentials:'123456',

        },
    //     {
    //         id: '150a36cf-f38e-4f59-8e31-39974207372d',
    //         username: 'Grayson Obrien',
    //         email: 'realraver@hotmail.com',
    //         location: 'NW',
    //         credentials:'123456',

    //     },
    //     {
    //         id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
    //         username: 'Pavle Lozo',
    //         email: 'drpavle@gmail.com',
    //         location: 'SE',
    //         credentials:'123456',

    //     },
    //     {
    //         id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
    //         username: 'James Wilson',
    //         email: 'jwilson@zanyworldwide.com',
    //         location: 'SW',
    //         credentials:'123456',

    //     },
    //     {
    //         id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
    //         username: 'Jack Evans',
    //         email: 'londonisred@yahoo.ca',
    //         location: 'NE',
    //         credentials:'123456',

    //     },
    //     {
    //         id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
    //         username: 'Nick Taylor',
    //         email: 'babynickbeatboxer@gmail.com',
    //         location: 'NW',
    //         credentials:'123456',

    //     },
    //     {
    //         id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
    //         username: 'Stefan Djordjevic',
    //         email: 'djstofwell@hotmail.com',
    //         location: 'SE',
    //         credentials:'123456',

    //     },
    //     {
    //         id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
    //         username: 'Harley Streten',
    //         email: 'holdinon@gmail.com',
    //         location: 'NE',
    //         credentials:'123456',

    //     },
    //     {
    //         id: '83433026-ca32-4c6d-bd86-a39ee8b7303e',
    //         username: 'Thierry Henry',
    //         email: 'vavavoom@me.com',
    //         location: 'SW',
    //         credentials:'123456',

    //     },
       
    ]);
};