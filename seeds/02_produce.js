exports.seed = async function (knex) {
    await knex('produce').del();
    await knex('produce').insert([
        {
            id:'a193a6a7-42ab-4182-97dc-555ee85e7486',
            user_id:'bb1491eb-30e6-4728-a5fa-72f89feaf622',
            produce_name:'Yukon Gold Potatoes',
            produce_type:'Root vedgetable',
            location:' Calgary SW',
            quantity: '6',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/yukon-gold.jpg',

        },
        {
            id:'8f16bd30-bab5-40af-aca2-b63d5fdd1acc',
            user_id:'bb1491eb-30e6-4728-a5fa-72f89feaf622',
            produce_name:'Green Beans',
            produce_type:'Legume',
            location:'Calgary SW',
            quantity: '2lbs',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/green-beans.jpg',

        },
        {
            id:'bdc6bb69-e09c-498d-8abd-be2792504d00',
            user_id:'bb1491eb-30e6-4728-a5fa-72f89feaf622',
            produce_name:'Figs',
            produce_type:'Fruit',
            location:'Calgary SW',
            quantity: '15',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/figs.jpg',

        },
        {
            id:'3ce124a4-78b0-4d80-91b9-11f9ced631a7',
            user_id:'bb1491eb-30e6-4728-a5fa-72f89feaf622',
            produce_name:'Raspberries',
            produce_type:'Fruit',
            location:'Calgary SW',
            quantity: '4lbs' ,
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/raspberries.jpg',

        },
        {
            id:'4dd464d6-90b8-4330-91e0-bd1217811bd9',
            user_id:'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
            produce_name:'Bok choy ',
            produce_type:'Cabbage',
            location:'Calgary SW',
            quantity: '3lbs',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/bok-choy.jpg',

        },
        {
            id:'c0ba64a8-0ecb-4a7d-ab7f-2dbbd1d437b1',
            user_id:'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
            produce_name:'Sweet Potatoes',
            produce_type:'Root vegetable',
            location:'Calgary SW',
            quantity: '5',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/sweet-potatoes-yams.jpg',

        },
        {
            id:'b70067d1-49c9-4925-b830-67b3e98005d',
            user_id:'150a36cf-f38e-4f59-8e31-39974207372d',
            produce_name:'Gala Apples',
            produce_type:'Fruit',
            location:'Calgary NW',
            quantity: '24',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/Gala-apples.jpg',

        },
        {
            id:'d9ef9352-2367-4272-8884-70cf80cb7a38',
            user_id:'150a36cf-f38e-4f59-8e31-39974207372d',
            produce_name:'Oyster mushrooms',
            produce_type:'Fungi',
            location:'Calgary NW',
            quantity: '3lbs',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/oyster-mushrooms.jpg',

        },
        {
            id:'7c79d334-6b90-4052-9def-aa9b8519c9fb',
            user_id:'150a36cf-f38e-4f59-8e31-39974207372d',
            produce_name:'Basil',
            produce_type:'Herb',
            location:'Calgary NW',
            quantity: '37 leaves',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/basil.jpg',

        },
        {
            id:'eafcb711-a726-4b3c-adec-704e3265c47d',
            user_id:'89898957-04ba-4bd0-9f5c-a7aea7447963',
            produce_name:' Ghost Peppers',
            produce_type:'Pepper',
            location:'Calgary SE',
            quantity: '32',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/ghost-peppers.jpg',

        },
        {
            id:'72c826ba-fde0-4aae-9aaf-95c6072946cd',
            user_id:'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
            produce_name:'Red Onion',
            produce_type:'Onion',
            location:' Calgary SW',
            quantity: '3lbs',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/red-onion.jpg',

        },
        {
            id:'019da03d-1162-48a4-ad48-ed655e3d7301',
            user_id:'90ac3319-70d1-4a51-b91d-ba6c2464408c',
            produce_name:' Carrots',
            produce_type:' Root vegetable',
            location:'Calgary NE',
            quantity: '4lbs',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/carrot.jpg',

        },
        {
            id:'705b808f-d8a0-4713-a796-8653c5c5952b',
            user_id:'90ac3319-70d1-4a51-b91d-ba6c2464408c',
            produce_name:' Snap Peas',
            produce_type:'Pea',
            location:' Calgary NE',
            quantity: '34',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/snap-peas.jpg',

        },
        {
            id:'f19b0b8a-9cca-4567-9af7-4016a15e038a',
            user_id:'5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
            produce_name:'English Long Cucumber',
            produce_type:'Cucumber',
            location:'Calgary NW',
            quantity: '8',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/english-cucumber.jpg',

        },
        {
            id:'2cba0296-c77d-4758-9115-bd98ac18f2c0',
            user_id:'5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
            produce_name:'Cherry Tomatoes',
            produce_type:'Tomato',
            location:' Calgary NW',
            quantity: '43',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/Cherry-Tomatoes.jpg',

        },
        {
            id:'e202e167-d242-4d7f-b8fc-68caffef9e01',
            user_id:'2922c286-16cd-4d43-ab98-c79f698aeab0',
            produce_name:'Mint',
            produce_type:'Herb',
            location:'Calgary SE',
            quantity: '24 leaves',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/mint.jpg',

        },
        {
            id:'079c88df-ed32-4d88-a9b7-eaebc85c4ce2',
            user_id:'2922c286-16cd-4d43-ab98-c79f698aeab0',
            produce_name:'Rosemary',
            produce_type:'Herb',
            location:' Calgary SE',
            quantity: '18 sprigs',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/Rosemary.jpg',

        },
        {
            id:'56c8e94c-777d-4176-b7fd-02f0806f614a',
            user_id:'9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
            produce_name:'Rhubard',
            produce_type:'Stalk vegetable',
            location:' Calgary NE',
            quantity: '25 stalks',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/Rhubarb-Taste.jpg',

        },
        {
            id:'2c0185c7-89ef-48ad-a22f-9fc022a5c90c',
            user_id:'9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
            produce_name:'Kale',
            produce_type:'Cabbage',
            location:'Calgary NE',
            quantity: '16 stalks',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/kale.png',

        },
        {
            id:'f3e13429-b5e9-4a50-b01c-75fb07cefded',
            user_id:'83433026-ca32-4c6d-bd86-a39ee8b7303e',
            produce_name:' Butter Lettuce',
            produce_type:'Leaf vegetable',
            location:'Calgary SW',
            quantity: '4 heads',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/butter-lettuce.jpg',

        },
        {
            id:'3b042051-f18c-4a16-a393-68ceba87277a',
            user_id:'83433026-ca32-4c6d-bd86-a39ee8b7303e',
            produce_name:'Crab apples',
            produce_type:'Fruit',
            location:'Calgary SW',
            quantity: '102',
            harvest_date: '2022-12-05 17:21:54',
            image:'https://growlocal.herokuapp.com/thumbnail/Crab-Apples.jpg',

        },
        
    ]);
};