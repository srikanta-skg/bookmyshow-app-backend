      city table :

city_ID     city_Name
  1         Bangalore 
  2         Chennai
  3         Hyderabad 
======================================================================

      user table : 

    user_id                        user_name    password 
srikantagowda07@gmail.com           srikanta    12345678

========================================================================


     Movies Table :

id             Title           Director             Runtime    Genre                 Rating  Metascore  Votes  releasDate      movie_img_url 
1    inception    Christopher Nolan  148 minutes  "science fiction"      "9.9"   info       1k     16 July 2010    https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/inception-et00004883-24-03-2017-20-09-10.jpg


2  Only upon a time in hollyhood quentin tarantino    150min action "9"      2k   20 may 2019   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToswZe6sYekUbOf0TpjhYo64Z8P7x2x3zjT9XO2R_-2oXeX06Y


3    The Wolf of Wall Street  Martin Scorsese     160min biopic    "9.8"   4k  3 January 2014   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_HuoCogDkrQSwH6hS71G84IcpBqPYwCMGTYY_3R8GKraea-


4   Tenet   150min  "10"  action    5k "23 July 2020"  https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwQZ2s5TKxJm8pAGaRDt0VehyvikwU3zgd1I1iR-KD7QsNHmcN 
 


5 Nodi Swamy Navirodu Hige 175min drama 9.9  1983 Shankar Nag 10k https://i.ytimg.com/vi/T4xKZfoUb4Y/maxresdefault.jpg


=================================================================================================================================


  theater table : 

  theatre_id  theatre_Name  theatre_Location   city_Id 

    1           PVR             Kormangala       1
    2          INOX           mantri Square      1
    3     Urvashi Theater        lalbagh         1

================================================================================================================================


cityMovieJunction table :

 movieID   City_ID
   1         1
   2         1
   3         1
   4         1
   5         1

=================================================================================================================

booking table: 

bookingID  userID theaterID time movieID paymentStatus seatNumber

 
=================================================================================================================



//////////////////////////////////////////////////////////DATA//////////////////////////////////////////////////////


CITY:

[
    {
        "city_ID": 1,
        "city_Name": "Bengaluru",
        "createdAt": "2020-09-30T01:20:33.000Z",
        "updatedAt": "2020-09-30T01:20:33.000Z"
    },
    {
        "city_ID": 2,
        "city_Name": "Chennai",
        "createdAt": "2020-09-30T01:21:08.000Z",
        "updatedAt": "2020-09-30T01:21:08.000Z"
    },
    {
        "city_ID": 3,
        "city_Name": "Hyderabad",
        "createdAt": "2020-09-30T01:21:21.000Z",
        "updatedAt": "2020-09-30T01:21:21.000Z"
    }
]


----------------------------------------------------------------------------------------------------------------------------

user table : 

[
    {
        "user_id": "gowda",
        "user_name": "delhi",
        "password": "8777",
        "createdAt": "2020-09-30T01:38:14.000Z",
        "updatedAt": "2020-09-30T01:42:38.000Z"
    },
    {
        "user_id": "srikantagowda",
        "user_name": "Hyderabad",
        "password": "123456",
        "createdAt": "2020-09-30T01:26:28.000Z",
        "updatedAt": "2020-09-30T01:26:28.000Z"
    }
]

------------------------------------------------------------------------------------------------------------------------

movie table : 

[
    {
        "id": 1,
        "Title": "inception",
        "Director": "Christopher Nolan",
        "Runtime": "148 minutes",
        "Genre": "science fiction",
        "Rating": "9.9",
        "Metascore": "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
        "Votes": "4.5M",
        "releasDate": " 16 July 2010",
        "movie_img_url": "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/inception-et00004883-24-03-2017-20-09-10.jpg",
        "createdAt": "2020-09-30T01:57:54.000Z",
        "updatedAt": "2020-09-30T01:57:54.000Z"
    },
    {
        "id": 2,
        "Title": "Once Upon a Time in Hollywood",
        "Director": "quentin tarantino",
        "Runtime": "128 minutes",
        "Genre": "Drama/Action",
        "Rating": "9.1",
        "Metascore": "Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.",
        "Votes": "2.5M",
        "releasDate": " 24 July 2019 ",
        "movie_img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToswZe6sYekUbOf0TpjhYo64Z8P7x2x3zjT9XO2R_-2oXeX06Y",
        "createdAt": "2020-09-30T02:09:05.000Z",
        "updatedAt": "2020-09-30T02:09:05.000Z"
    },
    {
        "id": 3,
        "Title": "The Wolf of Wall Street",
        "Director": "Martin Scorsese",
        "Runtime": "160 minutes",
        "Genre": "biopic",
        "Rating": "9.8",
        "Metascore": "Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
        "Votes": "3M",
        "releasDate": " 3 January 2014 ",
        "movie_img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_HuoCogDkrQSwH6hS71G84IcpBqPYwCMGTYY_3R8GKraea-",
        "createdAt": "2020-09-30T02:11:22.000Z",
        "updatedAt": "2020-09-30T02:11:22.000Z"
    },
    {
        "id": 4,
        "Title": "Tenet",
        "Director": "Christopher Nolan",
        "Runtime": "124 minutes",
        "Genre": "sci-fi",
        "Rating": "9.8",
        "Metascore": "A secret agent embarks on a dangerous, time-bending mission to prevent the start of World War III.",
        "Votes": "8M",
        "releasDate": "23 July 2020",
        "movie_img_url": " https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwQZ2s5TKxJm8pAGaRDt0VehyvikwU3zgd1I1iR-KD7QsNHmcN",
        "createdAt": "2020-09-30T02:13:47.000Z",
        "updatedAt": "2020-09-30T02:13:47.000Z"
    },
    {
        "id": 5,
        "Title": "Nodi Swamy Navirodu Hige",
        "Director": "Christopher Nolan",
        "Runtime": "174 minutes",
        "Genre": "Drama/Comedy",
        "Rating": "9.9",
        "Metascore": "Lnaguage Kannada: ShanakarNag, Mysore facilitates the marriage between two lovers, Kallesh and Jaya. When differences between them threaten their relationship, he has to intervene yet again and bring them to their senses.",
        "Votes": "8M",
        "releasDate": "23 July 1983",
        "movie_img_url": "https://i.ytimg.com/vi/T4xKZfoUb4Y/maxresdefault.jpg",
        "createdAt": "2020-09-30T02:16:18.000Z",
        "updatedAt": "2020-09-30T02:16:18.000Z"
    }
]

---------------------------------------------------------------------------------------------------------------------------------



theater table : 

[
    {
        "theatre_id": 1,
        "theatre_Name": "PVR",
        "theatre_Location": "Kormangala Bengaluru Karnataka",
        "city_Id": "1",
        "createdAt": "2020-09-30T02:43:12.000Z",
        "updatedAt": "2020-09-30T02:43:12.000Z"
    },
    {
        "theatre_id": 2,
        "theatre_Name": "INOX",
        "theatre_Location": "Mantri Square Bengaluru Karnataka",
        "city_Id": "1",
        "createdAt": "2020-09-30T02:43:32.000Z",
        "updatedAt": "2020-09-30T02:43:32.000Z"
    },
    {
        "theatre_id": 3,
        "theatre_Name": "Urvashi Theater",
        "theatre_Location": "lalbagh Road Bengaluru Karnataka",
        "city_Id": "1",
        "createdAt": "2020-09-30T02:43:58.000Z",
        "updatedAt": "2020-09-30T02:43:58.000Z"
    }
]

--------------------------------------------------------------------------------------------------------------------------

City-movie-junction : 

[
    {
        "movieID": 1,
        "City_ID": "1",
        "createdAt": "2020-09-30T03:14:09.000Z",
        "updatedAt": "2020-09-30T03:14:09.000Z"
    },
    {
        "movieID": 2,
        "City_ID": "1",
        "createdAt": "2020-09-30T03:15:46.000Z",
        "updatedAt": "2020-09-30T03:15:46.000Z"
    },
    {
        "movieID": 3,
        "City_ID": "1",
        "createdAt": "2020-09-30T03:15:52.000Z",
        "updatedAt": "2020-09-30T03:15:52.000Z"
    },
    {
        "movieID": 4,
        "City_ID": "1",
        "createdAt": "2020-09-30T03:15:57.000Z",
        "updatedAt": "2020-09-30T03:15:57.000Z"
    },
    {
        "movieID": 5,
        "City_ID": "1",
        "createdAt": "2020-09-30T03:16:00.000Z",
        "updatedAt": "2020-09-30T03:16:00.000Z"
    }
]

-------------------------------------------------------------------------------------------------------------------------












