let stadiums = [
    {
        "name": "Estadio Azteca",
        "country": "Mexico",
        "city": "Mexico City",
        "year_of_built": 1966,
        "capacity": 83000,
        "latitude": 19.3029,
        "longitude": -99.1504,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Soccer_game_at_the_Azteca_Stadium.JPG/1280px-Soccer_game_at_the_Azteca_Stadium.JPG",
        "next_matches": []
    },
    {
        "name": "MetLife Stadium",
        "country": "USA",
        "city": "East Rutherford",
        "year_of_built": 2010,
        "capacity": 82500,
        "latitude": 40.8128,
        "longitude": -74.0742,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/MetLife_Stadium_2022.jpg/1280px-MetLife_Stadium_2022.jpg",
        "next_matches": []
    },
    {
        "name": "AT&T Stadium",
        "country": "USA",
        "city": "Arlington",
        "year_of_built": 2009,
        "capacity": 80000,
        "latitude": 32.7473,
        "longitude": -97.0945,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg/1280px-Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg",
        "next_matches": []
    },
    {
        "name": "Arrowhead Stadium",
        "country": "USA",
        "city": "Missouri",
        "year_of_built": 1972,
        "capacity": 73819,
        "latitude": 39.0489,
        "longitude": -94.4839,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg/1280px-Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg",
        "next_matches": []
    },
    {
        "name": "NRG Stadium",
        "country": "USA",
        "city": "Texas",
        "year_of_built": 2002,
        "capacity": 72000,
        "latitude": 29.6848,
        "longitude": -95.4109,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Reliantstadium.jpg/1920px-Reliantstadium.jpg",
        "next_matches": []
    },
    {
        "name": "Mercedes-Benz Stadium",
        "country": "USA",
        "city": "Georgia",
        "year_of_built": 2017,
        "capacity": 71000,
        "latitude": 33.7554,
        "longitude": -84.4009,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2017_Orlando_City_at_Atlanta_United_MLS_Game.jpg/1280px-Cowboys_stadium_inside_view_4.JPG",
        "next_matches": []
    },
    {
        "name": "SoFi Stadium",
        "country": "USA",
        "city": "Inglewood",
        "year_of_built": 2020,
        "capacity": 70000,
        "latitude": 33.9534,
        "longitude": -118.3386,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cowboys_stadium_inside_view_4.JPG/1280px-Cowboys_stadium_inside_view_4.JPG",
        "next_matches": []
    },
    {
        "name": "Lincoln Financial Field",
        "country": "USA",
        "city": "Philadelphia",
        "year_of_built": 2003,
        "capacity": 69796,
        "latitude": 39.9008,
        "longitude": -75.1675,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lincoln_Financial_Field_%28Aerial_view%29.jpg/1280px-Lincoln_Financial_Field_%28Aerial_view%29.jpg",
        "next_matches": []
    },
    {
        "name": "Lumen Field",
        "country": "USA",
        "city": "Seattle",
        "year_of_built": 2002,
        "capacity": 68740,
        "latitude": 47.5952,
        "longitude": -122.3316,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2022_CONCACAF_Champions_League_Final_-_View_from_southeast_end.jpg/1280px-2022_CONCACAF_Champions_League_Final_-_View_from_southeast_end.jpg",
        "next_matches": []
    },
    {
        "name": "Levi's Stadium",
        "country": "USA",
        "city": "Santa Clara",
        "year_of_built": 2014,
        "capacity": 68500,
        "latitude": 37.403,
        "longitude": -121.9698,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Entering_Levi%27s_Stadium.JPG/1920px-Entering_Levi%27s_Stadium.JPG",
        "next_matches": []
    },
    {
        "name": "Gillette Stadium",
        "country": "USA",
        "city": "Foxborough",
        "year_of_built": 2002,
        "capacity": 65878,
        "latitude": 42.0909,
        "longitude": -71.2644,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gillette_Stadium_%28Top_View%29.jpg/1280px-Gillette_Stadium_%28Top_View%29.jpg",
        "next_matches": []
    },
    {
        "name": "Hard Rock Stadium",
        "country": "USA",
        "city": "Florida",
        "year_of_built": 1987,
        "capacity": 64767,
        "latitude": 25.9579,
        "longitude": -80.2388,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/200127-H-PX819-0092.jpg/1920px-200127-H-PX819-0092.jpg",
        "next_matches": []
    },
    {
        "name": "BC Place",
        "country": "Canada",
        "city": "Vancouver",
        "year_of_built": 1983,
        "capacity": 54000,
        "latitude": 49.2767,
        "longitude": -123.1269,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/1280px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg",
        "next_matches": []
    },
    {
        "name": "Estadio BBVA",
        "country": "Mexico",
        "city": "Guadalupe",
        "year_of_built": 2015,
        "capacity": 53500,
        "latitude": 25.2048,
        "longitude": -100.2707,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Estadio_BBVA_Bancomer_-_Diciembre_2017.jpg",
        "next_matches": []
    },
    {
        "name": "Estadio Akron",
        "country": "Mexico",
        "city": "Zapopan",
        "year_of_built": 2010,
        "capacity": 53500,
        "latitude": 20.7189,
        "longitude": -103.4119,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho.jpg/1920px-Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho.jpg",
        "next_matches": []
    },
    {
        "name": "BMO Field",
        "country": "Canada",
        "city": "Toronto",
        "year_of_built": 2007,
        "capacity": 30991,
        "latitude": 43.6332,
        "longitude": -79.4187,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bmo_Field_2016_East_Stand.jpg/1920px-Bmo_Field_2016_East_Stand.jpg",
        "next_matches": []
    }
];

let matches = [
    {
        match_id: 0,
        round: 'Group A',
        home_team: 'Mexico',
        away_team: 'Brazil',
        available_tickets: 500
    },
    {
        match_id: 1,
        round: 'Group A',
        home_team: 'France',
        away_team: 'Australia',
        available_tickets: 500
    },
    {
        match_id: 2,
        round: 'Group A',
        home_team: 'Mexico',
        away_team: 'France',
        available_tickets: 500
    },
    {
        match_id: 3,
        round: 'Group A',
        home_team: 'Brazil',
        away_team: 'Australia',
        available_tickets: 500
    },
    {
        match_id: 4,
        round: 'Group A',
        home_team: 'Brazil',
        away_team: 'France',
        available_tickets: 500
    },
    {
        match_id: 5,
        round: 'Group A',
        home_team: 'Mexico',
        away_team: 'Australia',
        available_tickets: 500
    },
    {
        match_id: 6,
        round: 'Group B',
        home_team: 'Argentina',
        away_team: 'Portugal',
        available_tickets: 500
    },
    {
        match_id: 7,
        round: 'Group B',
        home_team: 'Netherlands',
        away_team: 'Ghana',
        available_tickets: 500
    },
    {
        match_id: 8,
        round: 'Group B',
        home_team: 'Argentina',
        away_team: 'Netherlands',
        available_tickets: 500
    },
    {
        match_id: 9,
        round: 'Group B',
        home_team: 'Portugal',
        away_team: 'Ghana',
        available_tickets: 500
    },
    {
        match_id: 10,
        round: 'Group B',
        home_team: 'Portugal',
        away_team: 'Netherlands',
        available_tickets: 500
    },
    {
        match_id: 11,
        round: 'Group B',
        home_team: 'Argentina',
        away_team: 'Ghana',
        available_tickets: 500
    },
    {
        match_id: 12,
        round: 'Group C',
        home_team: 'Spain',
        away_team: 'Italy',
        available_tickets: 500
    },
    {
        match_id: 13,
        round: 'Group C',
        home_team: 'Germany',
        away_team: 'England',
        available_tickets: 500
    },
    {
        match_id: 14,
        round: 'Group C',
        home_team: 'Spain',
        away_team: 'Germany',
        available_tickets: 500
    },
    {
        match_id: 15,
        round: 'Group C',
        home_team: 'Italy',
        away_team: 'England',
        available_tickets: 500
    },
    {
        match_id: 16,
        round: 'Group C',
        home_team: 'Italy',
        away_team: 'Germany',
        available_tickets: 500
    },
    {
        match_id: 17,
        round: 'Group C',
        home_team: 'Spain',
        away_team: 'England',
        available_tickets: 500
    },
    {
        match_id: 18,
        round: 'Group D',
        home_team: 'Portugal',
        away_team: 'Argentina',
        available_tickets: 500
    },
    {
        match_id: 19,
        round: 'Group D',
        home_team: 'France',
        away_team: 'Netherlands',
        available_tickets: 500
    },
    {
        match_id: 20,
        round: 'Group D',
        home_team: 'Portugal',
        away_team: 'France',
        available_tickets: 500
    },
    {
        match_id: 21,
        round: 'Group D',
        home_team: 'Argentina',
        away_team: 'Netherlands',
        available_tickets: 500
    },
    {
        match_id: 22,
        round: 'Group D',
        home_team: 'Argentina',
        away_team: 'France',
        available_tickets: 500
    },
    {
        match_id: 23,
        round: 'Group D',
        home_team: 'Portugal',
        away_team: 'Netherlands',
        available_tickets: 500
    },
    {
        match_id: 24,
        round: 'Group E',
        home_team: 'Brazil',
        away_team: 'Germany',
        available_tickets: 500
    },
    {
        match_id: 25,
        round: 'Group E',
        home_team: 'Italy',
        away_team: 'Spain',
        available_tickets: 500
    },
    {
        match_id: 26,
        round: 'Group E',
        home_team: 'Brazil',
        away_team: 'Italy',
        available_tickets: 500
    },
    {
        match_id: 27,
        round: 'Group E',
        home_team: 'Germany',
        away_team: 'Spain',
        available_tickets: 500
    },
    {
        match_id: 28,
        round: 'Group E',
        home_team: 'Germany',
        away_team: 'Italy',
        available_tickets: 500
    },
    {
        match_id: 29,
        round: 'Group E',
        home_team: 'Brazil',
        away_team: 'Spain',
        available_tickets: 500
    },
    {
        match_id: 30,
        round: 'Group F',
        home_team: 'Netherlands',
        away_team: 'Portugal',
        available_tickets: 500
    },
    {
        match_id: 31,
        round: 'Group F',
        home_team: 'Argentina',
        away_team: 'France',
        available_tickets: 500
    },
    {
        match_id: 32,
        round: 'Group F',
        home_team: 'Netherlands',
        away_team: 'Argentina',
        available_tickets: 500
    },
    {
        match_id: 33,
        round: 'Group F',
        home_team: 'Portugal',
        away_team: 'France',
        available_tickets: 500
    },
    {
        match_id: 34,
        round: 'Group F',
        home_team: 'Portugal',
        away_team: 'Argentina',
        available_tickets: 500
    },
    {
        match_id: 35,
        round: 'Group F',
        home_team: 'Netherlands',
        away_team: 'France',
        available_tickets: 500
    },
    {
        match_id: 36,
        round: 'Group G',
        home_team: 'England',
        away_team: 'Spain',
        available_tickets: 500
    },
    {
        match_id: 37,
        round: 'Group G',
        home_team: 'Germany',
        away_team: 'Brazil',
        available_tickets: 500
    },
    {
        match_id: 38,
        round: 'Group G',
        home_team: 'England',
        away_team: 'Germany',
        available_tickets: 500
    },
    {
        match_id: 39,
        round: 'Group G',
        home_team: 'Spain',
        away_team: 'Brazil',
        available_tickets: 500
    },
    {
        match_id: 40,
        round: 'Group G',
        home_team: 'Spain',
        away_team: 'Germany',
        available_tickets: 500
    },
    {
        match_id: 41,
        round: 'Group G',
        home_team: 'England',
        away_team: 'Brazil',
        available_tickets: 500
    },
    {
        match_id: 42,
        round: 'Group H',
        home_team: 'Romania',
        away_team: 'Senegal',
        available_tickets: 500
    },
    {
        match_id: 43,
        round: 'Group H',
        home_team: 'Mexico',
        away_team: 'Saudi Arabia',
        available_tickets: 500
    },
    {
        match_id: 44,
        round: 'Group H',
        home_team: 'Romania',
        away_team: 'Mexico',
        available_tickets: 500
    },
    {
        match_id: 45,
        round: 'Group H',
        home_team: 'Senegal',
        away_team: 'Saudi Arabia',
        available_tickets: 500
    },
    {
        match_id: 46,
        round: 'Group H',
        home_team: 'Senegal',
        away_team: 'Mexico',
        available_tickets: 500
    },
    {
        match_id: 47,
        round: 'Group H',
        home_team: 'Romania',
        away_team: 'Saudi Arabia',
        available_tickets: 500
    }
];

stadiums = stadiums.map((stadium, i) => { const newObj = { stadium_id: i, ...stadium }; return newObj });


let numbers = [];
for (let i = 0; i < 48; i++) {
    numbers.push(i + 1);
}

stadiums.map(stadium => {
    for (let j = 0; j < 3; j++) {
        let num = numbers[Math.floor(Math.random() * numbers.length)];
        stadium.next_matches.push(num);
        numbers = numbers.filter(numb => numb != num);
    }
});

matches.map(match => {
    const myStadium = stadiums.find(stadium => stadium.next_matches.includes(match.match_id));
    if (myStadium) {
        match.available_tickets = myStadium.capacity;
    }
    return match;
});

console.log(stadiums);
console.log(matches);