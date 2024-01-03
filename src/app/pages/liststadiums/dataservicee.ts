// services/data.service.ts
import { Injectable } from '@angular/core';
import { IStadium } from '../../models/stadium'; 
import { IMatch } from '../../models/match'; 

export const matches = [
    {
        "match_id": 1,
        "round": "Group A",
        "home_team": "Mexico",
        "away_team": "Brazil",
        "available_tickets": 83000
      },
      {
        "match_id": 2,
        "round": "Group A",
        "home_team": "France",
        "away_team": "Australia",
        "available_tickets": 65878
      },
      {
        "match_id": 3,
        "round": "Group A",
        "home_team": "Mexico",
        "away_team": "France",
        "available_tickets": 73819
      },
      {
        "match_id": 4,
        "round": "Group A",
        "home_team": "Brazil",
        "away_team": "Australia",
        "available_tickets": 53500
      },
      {
        "match_id": 5,
        "round": "Group A",
        "home_team": "Brazil",
        "away_team": "France",
        "available_tickets": 53500
      },
      {
        "match_id": 6,
        "round": "Group A",
        "home_team": "Mexico",
        "away_team": "Australia",
        "available_tickets": 54000
      },
      {
        "match_id": 7,
        "round": "Group B",
        "home_team": "Argentina",
        "away_team": "Portugal",
        "available_tickets": 70000
      },
      {
        "match_id": 8,
        "round": "Group B",
        "home_team": "Netherlands",
        "away_team": "Ghana",
        "available_tickets": 53500
      },
      {
        "match_id": 9,
        "round": "Group B",
        "home_team": "Argentina",
        "away_team": "Netherlands",
        "available_tickets": 80000
      },
      {
        "match_id": 10,
        "round": "Group B",
        "home_team": "Portugal",
        "away_team": "Ghana",
        "available_tickets": 70000
      },
      {
        "match_id": 11,
        "round": "Group B",
        "home_team": "Portugal",
        "away_team": "Netherlands",
        "available_tickets": 68740
      },
      {
        "match_id": 12,
        "round": "Group B",
        "home_team": "Argentina",
        "away_team": "Ghana",
        "available_tickets": 71000
      },
      {
        "match_id": 13,
        "round": "Group C",
        "home_team": "Spain",
        "away_team": "Italy",
        "available_tickets": 68500
      },
      {
        "match_id": 14,
        "round": "Group C",
        "home_team": "Germany",
        "away_team": "England",
        "available_tickets": 71000
      },
      {
        "match_id": 15,
        "round": "Group C",
        "home_team": "Spain",
        "away_team": "Germany",
        "available_tickets": 71000
      },
      {
        "match_id": 16,
        "round": "Group C",
        "home_team": "Italy",
        "away_team": "England",
        "available_tickets": 82500
      },
      {
        "match_id": 17,
        "round": "Group C",
        "home_team": "Italy",
        "away_team": "Germany",
        "available_tickets": 83000
      },
      {
        "match_id": 18,
        "round": "Group C",
        "home_team": "Spain",
        "away_team": "England",
        "available_tickets": 64767
      },
      {
        "match_id": 19,
        "round": "Group D",
        "home_team": "Portugal",
        "away_team": "Argentina",
        "available_tickets": 64767
      },
      {
        "match_id": 20,
        "round": "Group D",
        "home_team": "France",
        "away_team": "Netherlands",
        "available_tickets": 54000
      },
      {
        "match_id": 21,
        "round": "Group D",
        "home_team": "Portugal",
        "away_team": "France",
        "available_tickets": 30991
      },
      {
        "match_id": 22,
        "round": "Group D",
        "home_team": "Argentina",
        "away_team": "Netherlands",
        "available_tickets": 65878
      },
      {
        "match_id": 23,
        "round": "Group D",
        "home_team": "Argentina",
        "away_team": "France",
        "available_tickets": 53500
      },
      {
        "match_id": 24,
        "round": "Group D",
        "home_team": "Portugal",
        "away_team": "Netherlands",
        "available_tickets": 73819
      },
      {
        "match_id": 25,
        "round": "Group E",
        "home_team": "Brazil",
        "away_team": "Germany",
        "available_tickets": 68500
      },
      {
        "match_id": 26,
        "round": "Group E",
        "home_team": "Italy",
        "away_team": "Spain",
        "available_tickets": 65878
      },
      {
        "match_id": 27,
        "round": "Group E",
        "home_team": "Brazil",
        "away_team": "Italy",
        "available_tickets": 73819
      },
      {
        "match_id": 28,
        "round": "Group E",
        "home_team": "Germany",
        "away_team": "Spain",
        "available_tickets": 30991
      },
      {
        "match_id": 29,
        "round": "Group E",
        "home_team": "Germany",
        "away_team": "Italy",
        "available_tickets": 82500
      },
      {
        "match_id": 30,
        "round": "Group E",
        "home_team": "Brazil",
        "away_team": "Spain",
        "available_tickets": 53500
      },
      {
        "match_id": 31,
        "round": "Group F",
        "home_team": "Netherlands",
        "away_team": "Portugal",
        "available_tickets": 53500
      },
      {
        "match_id": 32,
        "round": "Group F",
        "home_team": "Argentina",
        "away_team": "France",
        "available_tickets": 64767
      },
      {
        "match_id": 33,
        "round": "Group F",
        "home_team": "Netherlands",
        "away_team": "Argentina",
        "available_tickets": 68740
      },
      {
        "match_id": 34,
        "round": "Group F",
        "home_team": "Portugal",
        "away_team": "France",
        "available_tickets": 69796
      },
      {
        "match_id": 35,
        "round": "Group F",
        "home_team": "Portugal",
        "away_team": "Argentina",
        "available_tickets": 69796
      },
      {
        "match_id": 36,
        "round": "Group F",
        "home_team": "Netherlands",
        "away_team": "France",
        "available_tickets": 80000
      },
      {
        "match_id": 37,
        "round": "Group G",
        "home_team": "England",
        "away_team": "Spain",
        "available_tickets": 72000
      },
      {
        "match_id": 38,
        "round": "Group G",
        "home_team": "Germany",
        "away_team": "Brazil",
        "available_tickets": 72000
      },
      {
        "match_id": 39,
        "round": "Group G",
        "home_team": "England",
        "away_team": "Germany",
        "available_tickets": 30991
      },
      {
        "match_id": 40,
        "round": "Group G",
        "home_team": "Spain",
        "away_team": "Brazil",
        "available_tickets": 68500
      },
      {
        "match_id": 41,
        "round": "Group G",
        "home_team": "Spain",
        "away_team": "Germany",
        "available_tickets": 69796
      },
      {
        "match_id": 42,
        "round": "Group G",
        "home_team": "England",
        "away_team": "Brazil",
        "available_tickets": 72000
      },
      {
        "match_id": 43,
        "round": "Group H",
        "home_team": "Romania",
        "away_team": "Senegal",
        "available_tickets": 70000
      },
      {
        "match_id": 44,
        "round": "Group H",
        "home_team": "Mexico",
        "away_team": "Saudi Arabia",
        "available_tickets": 80000
      },
      {
        "match_id": 45,
        "round": "Group H",
        "home_team": "Romania",
        "away_team": "Mexico",
        "available_tickets": 83000
      },
      {
        "match_id": 46,
        "round": "Group H",
        "home_team": "Senegal",
        "away_team": "Saudi Arabia",
        "available_tickets": 68740
      },
      {
        "match_id": 47,
        "round": "Group H",
        "home_team": "Senegal",
        "away_team": "Mexico",
        "available_tickets": 82500
      },
      {
        "match_id": 48,
        "round": "Group H",
        "home_team": "Romania",
        "away_team": "Saudi Arabia",
        "available_tickets": 54000
      }
  ];
  
  export const stadiums = [
    {
        "stadium_id": 0,
        "name": "Estadio Azteca",
        "country": "Mexico",
        "city": "Mexico City",
        "year_of_built": 1966,
        "capacity": 83000,
        "latitude": 19.3029,
        "longitude": -99.1504,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Soccer_game_at_the_Azteca_Stadium.JPG/1280px-Soccer_game_at_the_Azteca_Stadium.JPG",
        "next_matches": [17, 45, 1]
      },
      {
        "stadium_id": 1,
        "name": "MetLife Stadium",
        "country": "USA",
        "city": "East Rutherford",
        "year_of_built": 2010,
        "capacity": 82500,
        "latitude": 40.8128,
        "longitude": -74.0742,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/MetLife_Stadium_2022.jpg/1280px-MetLife_Stadium_2022.jpg",
        "next_matches": [47, 16, 29]
      },
      {
        "stadium_id": 2,
        "name": "AT&T Stadium",
        "country": "USA",
        "city": "Arlington",
        "year_of_built": 2009,
        "capacity": 80000,
        "latitude": 32.7473,
        "longitude": -97.0945,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg/1280px-Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg",
        "next_matches": [36, 44, 9]
      },
      {
        "stadium_id": 3,
        "name": "Arrowhead Stadium",
        "country": "USA",
        "city": "Missouri",
        "year_of_built": 1972,
        "capacity": 73819,
        "latitude": 39.0489,
        "longitude": -94.4839,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg/1280px-Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg",
        "next_matches": [3, 27, 24]
      },
      {
        "stadium_id": 4,
        "name": "NRG Stadium",
        "country": "USA",
        "city": "Texas",
        "year_of_built": 2002,
        "capacity": 72000,
        "latitude": 29.6848,
        "longitude": -95.4109,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Reliantstadium.jpg/1920px-Reliantstadium.jpg",
        "next_matches": [38, 42, 37]
      },
      {
        "stadium_id": 5,
        "name": "Mercedes-Benz Stadium",
        "country": "USA",
        "city": "Georgia",
        "year_of_built": 2017,
        "capacity": 71000,
        "latitude": 33.7554,
        "longitude": -84.4009,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2017_Orlando_City_at_Atlanta_United_MLS_Game.jpg/1280px-Cowboys_stadium_inside_view_4.JPG",
        "next_matches": [15, 12, 14]
      },
      {
        "stadium_id": 6,
        "name": "SoFi Stadium",
        "country": "USA",
        "city": "Inglewood",
        "year_of_built": 2020,
        "capacity": 70000,
        "latitude": 33.9534,
        "longitude": -118.3386,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cowboys_stadium_inside_view_4.JPG/1280px-Cowboys_stadium_inside_view_4.JPG",
        "next_matches": [10, 7, 43]
      },
      {
        "stadium_id": 7,
        "name": "Lincoln Financial Field",
        "country": "USA",
        "city": "Philadelphia",
        "year_of_built": 2003,
        "capacity": 69796,
        "latitude": 39.9008,
        "longitude": -75.1675,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lincoln_Financial_Field_%28Aerial_view%29.jpg/1280px-Lincoln_Financial_Field_%28Aerial_view%29.jpg",
        "next_matches": [35, 41, 34]
      },
      {
        "stadium_id": 8,
        "name": "Lumen Field",
        "country": "USA",
        "city": "Seattle",
        "year_of_built": 2002,
        "capacity": 68740,
        "latitude": 47.5952,
        "longitude": -122.3316,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2022_CONCACAF_Champions_League_Final_-_View_from_southeast_end.jpg/1280px-2022_CONCACAF_Champions_League_Final_-_View_from_southeast_end.jpg",
        "next_matches": [33, 46, 11]
      },
      {
        "stadium_id": 9,
        "name": "Levi's Stadium",
        "country": "USA",
        "city": "Santa Clara",
        "year_of_built": 2014,
        "capacity": 68500,
        "latitude": 37.403,
        "longitude": -121.9698,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Entering_Levi%27s_Stadium.JPG/1920px-Entering_Levi%27s_Stadium.JPG",
        "next_matches": [13, 25, 40]
      },
      {
        "stadium_id": 10,
        "name": "Gillette Stadium",
        "country": "USA",
        "city": "Foxborough",
        "year_of_built": 2002,
        "capacity": 65878,
        "latitude": 42.0909,
        "longitude": -71.2644,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gillette_Stadium_%28Top_View%29.jpg/1280px-Gillette_Stadium_%28Top_View%29.jpg",
        "next_matches": [26, 22, 2]
      },
      {
        "stadium_id": 11,
        "name": "Hard Rock Stadium",
        "country": "USA",
        "city": "Florida",
        "year_of_built": 1987,
        "capacity": 64767,
        "latitude": 25.9579,
        "longitude": -80.2388,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/200127-H-PX819-0092.jpg/1920px-200127-H-PX819-0092.jpg",
        "next_matches": [18, 19, 32]
      },
      {
        "stadium_id": 12,
        "name": "BC Place",
        "country": "Canada",
        "city": "Vancouver",
        "year_of_built": 1983,
        "capacity": 54000,
        "latitude": 49.2767,
        "longitude": -123.1269,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/1280px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg",
        "next_matches": [20, 48, 6]
      },
      {
        "stadium_id": 13,
        "name": "Estadio BBVA",
        "country": "Mexico",
        "city": "Guadalupe",
        "year_of_built": 2015,
        "capacity": 53500,
        "latitude": 25.2048,
        "longitude": -100.2707,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Estadio_BBVA_Bancomer_-_Diciembre_2017.jpg",
        "next_matches": [8, 5, 31]
      },
      {
        "stadium_id": 14,
        "name": "Estadio Akron",
        "country": "Mexico",
        "city": "Zapopan",
        "year_of_built": 2010,
        "capacity": 53500,
        "latitude": 20.7189,
        "longitude": -103.4119,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho.jpg/1920px-Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho.jpg",
        "next_matches": [30, 23, 4]
      },
      {
        "stadium_id": 15,
        "name": "BMO Field",
        "country": "Canada",
        "city": "Toronto",
        "year_of_built": 2007,
        "capacity": 30991,
        "latitude": 43.6332,
        "longitude": -79.4187,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bmo_Field_2016_East_Stand.jpg/1920px-Bmo_Field_2016_East_Stand.jpg",
        "next_matches": [28, 21, 39]
      }
  ];

@Injectable({
  providedIn: 'root',
})
export class DataServicee {
  getStadiums(): IStadium[] {
    return stadiums;
  }

  getMatchesByIds(matchIds: number[]): IMatch[] {
    const allMatches = matches;
    return allMatches.filter((match) => matchIds.includes(match.match_id));
  }
}
