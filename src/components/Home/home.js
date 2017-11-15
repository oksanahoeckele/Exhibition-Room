import React, { Component } from 'react';
import Menu from './../../navigation/headerMenu'


class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">

        <Menu/>

        <div className="container section">
        <div className="row">
        <div className="col-sm-12">
        <div className="tabs movies">
        <ul>
        <li><a href="#mon">Mon</a></li>
        <li><a href="#tue">Tue</a></li>
        <li><a href="#wed">Today</a></li>
        <li><a href="#thu">Thu</a></li>
        <li><a href="#fri">Fri</a></li>
        <li><a href="#sat">Sat</a></li>
        <li><a href="#sun">Sun</a></li>
        </ul>
        <div id="mon">
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-6.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Fantasy</span>
        <h3 className="no-underline">It's over</h3>
        <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">14:45</span>
        <span className="time">18:30</span>
        <span className="time">20:30</span>
        <span className="time">24:45</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        105 mins <span className="certificate">15</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-5.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Sci-Fi </span>
        <h3 className="no-underline">Captain America: The First Avenger</h3>
        <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time">16:00</span>
        <span className="time">18:00</span>
        <span className="time">21:00</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        120 mins <span className="certificate">PG</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-8.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Fences</h3>
        <p>A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">10:00</span>
        <span className="time past">12:45</span>
        <span className="time">17:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        135 mins <span className="certificate">18</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="#">
        <img src="images/movie-7.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Daylight</h3>
        <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time past">14:30</span>
        <span className="time">20:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        117 mins <span className="certificate">U</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="tue">
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-7.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Daylight</h3>
        <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time past">14:30</span>
        <span className="time">20:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        117 mins <span className="certificate">U</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-5.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Sci-Fi </span>
        <h3 className="no-underline">Captain America: The First Avenger</h3>
        <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time">16:00</span>
        <span className="time">18:00</span>
        <span className="time">21:00</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        120 mins <span className="certificate">PG</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-6.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Fantasy</span>
        <h3 className="no-underline">It's over</h3>
        <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">14:45</span>
        <span className="time">18:30</span>
        <span className="time">20:30</span>
        <span className="time">24:45</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        105 mins <span className="certificate">15</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-8.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Fences</h3>
        <p>A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">10:00</span>
        <span className="time past">12:45</span>
        <span className="time">17:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        135 mins <span className="certificate">18</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="wed">
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-6.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Fantasy</span>
        <h3 className="no-underline">It's over</h3>
        <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">14:45</span>
        <span className="time">18:30</span>
        <span className="time">20:30</span>
        <span className="time">24:45</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        105 mins <span className="certificate">15</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-5.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Sci-Fi </span>
        <h3 className="no-underline">Captain America: The First Avenger</h3>
        <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time">16:00</span>
        <span className="time">18:00</span>
        <span className="time">21:00</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        120 mins <span className="certificate">PG</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-7.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Daylight</h3>
        <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time past">14:30</span>
        <span className="time">20:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        117 mins <span className="certificate">U</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-8.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Fences</h3>
        <p>A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">10:00</span>
        <span className="time past">12:45</span>
        <span className="time">17:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        135 mins <span className="certificate">18</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="thu">
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-5.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Sci-Fi </span>
        <h3 className="no-underline">Captain America: The First Avenger</h3>
        <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time">16:00</span>
        <span className="time">18:00</span>
        <span className="time">21:00</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        120 mins <span className="certificate">PG</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-7.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Daylight</h3>
        <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time past">14:30</span>
        <span className="time">20:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        117 mins <span className="certificate">U</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-6.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Fantasy</span>
        <h3 className="no-underline">It's over</h3>
        <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">14:45</span>
        <span className="time">18:30</span>
        <span className="time">20:30</span>
        <span className="time">24:45</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        105 mins <span className="certificate">15</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-8.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Fences</h3>
        <p>A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">10:00</span>
        <span className="time past">12:45</span>
        <span className="time">17:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        135 mins <span className="certificate">18</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="fri">
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-5.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Sci-Fi </span>
        <h3 className="no-underline">Captain America: The First Avenger</h3>
        <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time">16:00</span>
        <span className="time">18:00</span>
        <span className="time">21:00</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        120 mins <span className="certificate">PG</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-6.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Fantasy</span>
        <h3 className="no-underline">It's over</h3>
        <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">14:45</span>
        <span className="time">18:30</span>
        <span className="time">20:30</span>
        <span className="time">24:45</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        105 mins <span className="certificate">15</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-7.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Daylight</h3>
        <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time past">14:30</span>
        <span className="time">20:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        117 mins <span className="certificate">U</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-8.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Fences</h3>
        <p>A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">10:00</span>
        <span className="time past">12:45</span>
        <span className="time">17:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        135 mins <span className="certificate">18</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="sat">
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-6.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Fantasy</span>
        <h3 className="no-underline">It's over</h3>
        <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">14:45</span>
        <span className="time">18:30</span>
        <span className="time">20:30</span>
        <span className="time">24:45</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        105 mins <span className="certificate">15</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-7.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Daylight</h3>
        <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time past">14:30</span>
        <span className="time">20:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        117 mins <span className="certificate">U</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-5.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Sci-Fi </span>
        <h3 className="no-underline">Captain America: The First Avenger</h3>
        <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time">16:00</span>
        <span className="time">18:00</span>
        <span className="time">21:00</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        120 mins <span className="certificate">PG</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-8.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Fences</h3>
        <p>A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">10:00</span>
        <span className="time past">12:45</span>
        <span className="time">17:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        135 mins <span className="certificate">18</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="sun">
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-5.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Sci-Fi </span>
        <h3 className="no-underline">Captain America: The First Avenger</h3>
        <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time">16:00</span>
        <span className="time">18:00</span>
        <span className="time">21:00</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        120 mins <span className="certificate">PG</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-6.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Action, Adventure, Fantasy</span>
        <h3 className="no-underline">It's over</h3>
        <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">14:45</span>
        <span className="time">18:30</span>
        <span className="time">20:30</span>
        <span className="time">24:45</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        105 mins <span className="certificate">15</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-7.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Daylight</h3>
        <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">11:00</span>
        <span className="time past">14:30</span>
        <span className="time">20:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        117 mins <span className="certificate">U</span>
        </div>
        </div>
        </div>
        </div>
        <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3">
        <a href="single-movie.html">
        <img src="images/movie-8.jpg" alt="Movie title" />
        </a>
        </div>
        <div className="col-md-10 col-sm-9">
        <span className="title">Drama</span>
        <h3 className="no-underline">Fences</h3>
        <p>A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
        <p><a href="single-movie.html" className="arrow-button">Full synopsis</a></p>
        <div className="row">
        <div className="col-md-8 col-sm-9">
        <hr className="space-10" />
        <span className="viewing-times">
        <i className="material-icons">access_time</i>
        Viewing times
        </span>
        <span className="time past">10:00</span>
        <span className="time past">12:45</span>
        <span className="time">17:00</span>
        <span className="time">21:15</span>
        </div>
        <div className="col-md-4 col-sm-3 running-time">
        <hr className="space-10" />
        135 mins <span className="certificate">18</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <section className="dark">
        <div className="container section remove-bottom-padding">
        <div className="row comingSoon-slides">
        <div className="col-sm-12">
        <h2>Coming soon</h2>
        <div className="row single-slide slideOne">
        <div className="bg"></div>
        <div className="col-sm-5 col-xs-12 slide-content">
        <span className="title">Drama, Thriller</span>
        <h3 className="no-underline">Deepwater Horizon</h3>
        <div className="star-rating">
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        </div>
        <div className="date">
        <i className="material-icons">date_range</i> 30 September, 2017
        </div>
        <p>A dramatization of the April 2010 disaster, when the offshore drilling rig Deepwater Horizon exploded and created the worst oil spill in U.S. history.</p>
        <p><a href="#" className="arrow-button">More info</a></p>
        </div>
        <div className="col-sm-6 col-xs-12 col-sm-push-1 slide-video">
        <a href="https://youtu.be/S-UPJyEHmM0" data-vbtype="video" className="venobox video">
        <i className="material-icons">play_arrow</i>
        <img src="images/slide-1-video.png" alt="" />
        </a>
        </div>
        </div>
        <div className="row single-slide slideTwo">
        <div className="bg" ></div>
        <div className="col-sm-5 slide-content">
        <span className="title">Action, Adventure, Sci-Fi</span>
        <h3 className="no-underline">X-Men: Days of Future Past</h3>
        <div className="star-rating">
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons grey">star_rate</i>
        </div>
        <div className="date">
        <i className="material-icons">date_range</i> 07 September, 2018
        </div>
        <p>The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.</p>
        <p><a href="#" className="arrow-button">More info</a></p>
        </div>
        <div className="col-sm-6 col-sm-push-1 slide-video">
        <a href="https://youtu.be/S-UPJyEHmM0" data-vbtype="video" className="venobox video">
        <i className="material-icons">play_arrow</i>
        <img src="images/slide-2-video.png" alt="" />
        </a>
        </div>
        </div>
        <div className="row single-slide slideThree">
        <div className="bg"  ></div>
        <div className="col-sm-5 slide-content">
        <span className="title">Comedy, Crime</span>
        <h3 className="no-underline">The Hangover Part III</h3>
        <div className="star-rating">
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        </div>
        <div className="date">
        <i className="material-icons">date_range</i> 30 September, 2017
        </div>
        <p>When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the run.</p>
        <p><a href="#" className="arrow-button">More info</a></p>
        </div>
        <div className="col-sm-6 col-sm-push-1 slide-video">
        <a href="https://youtu.be/S-UPJyEHmM0" data-vbtype="video" className="venobox video">
        <i className="material-icons">play_arrow</i>
        <img src="images/slide-3-video.png" alt="" />
        </a>
        </div>
        </div>
        <div className="row single-slide slideFour">
        <div className="bg" ></div>
        <div className="col-sm-5 slide-content">
        <span className="title">Action, Adventure, Sci-Fi</span>
        <h3 className="no-underline">Transformers: Age of Extinction</h3>
        <div className="star-rating">
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        </div>
        <div className="date">
        <i className="material-icons">date_range</i> 15 April, 2018
        </div>
        <p>Autobots must escape sight from a bounty hunter who has taken control of the human serendipity: Unexpectedly, Optimus Prime and his remaining gang turn to a mechanic, his daughter, and her back street racing boyfriend for help.</p>
        <p><a href="#" className="arrow-button">More info</a></p>
        </div>
        <div className="col-sm-6 col-sm-push-1 slide-video">
        <a href="https://youtu.be/S-UPJyEHmM0" data-vbtype="video" className="venobox video">
        <i className="material-icons">play_arrow</i>
        <img src="images/slide-4-video.png" alt="" />
        </a>
        </div>
        </div>
        <div className="row single-slide slideFive">
        <div className="bg" ></div>
        <div className="col-sm-5 slide-content">
        <span className="title">Action, Adventure, Drama</span>
        <h3 className="no-underline">End of an empire</h3>
        <div className="star-rating">
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons grey">star_rate</i>
        </div>
        <div className="date">
        <i className="material-icons">date_range</i> 15 April, 2018
        </div>
        <p>A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.</p>
        <p><a href="#" className="arrow-button">More info</a></p>
        </div>
        <div className="col-sm-6 col-sm-push-1 slide-video">
        <a href="https://youtu.be/S-UPJyEHmM0" data-vbtype="video" className="venobox video">
        <i className="material-icons">play_arrow</i>
        <img src="images/slide-5-video.png" alt="" />
        </a>
        </div>
        </div>
        <div className="row single-slide slideSix">
        <div className="bg" ></div>
        <div className="col-sm-5 slide-content">
        <span className="title">Crime, Thriller, Drama</span>
        <h3 className="no-underline">Hannibal Rising</h3>
        <div className="star-rating">
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        </div>
        <div className="date">
        <i className="material-icons">date_range</i> 15 April, 2018
        </div>
        <p>After the death of his parents during World War II, young Hannibal Lecter moves in with his beautiful aunt and begins plotting revenge on the barbarians responsible for his sister's death.</p>
        <p><a href="#" className="arrow-button">More info</a></p>
        </div>
        <div className="col-sm-6 col-sm-push-1 slide-video">
        <a href="https://youtu.be/S-UPJyEHmM0" data-vbtype="video" className="venobox video">
        <i className="material-icons">play_arrow</i>
        <img src="images/slide-6-video.png" alt="" />
        </a>
        </div>
        </div>
        <div className="row single-slide slideSeven">
        <div className="bg" ></div>
        <div className="col-sm-5 slide-content">
        <span className="title">Adventure, Drama, Sci-Fi </span>
        <h3 className="no-underline">Locked out</h3>
        <div className="star-rating">
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        <i className="material-icons">star_rate</i>
        </div>
        <div className="date">
        <i className="material-icons">date_range</i> 15 April, 2018
        </div>
        <p>An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.</p>
        <p><a href="#" className="arrow-button">More info</a></p>
        </div>
        <div className="col-sm-6 col-sm-push-1 slide-video">
        <a href="http://www.google.com" className="video">
        <i className="material-icons">play_arrow</i>
        <img src="images/slide-7-video.png" alt="" />
        </a>
        </div>
        </div>
        <div className="slick-carousel" id="comingSoon">
        <div  >
        <a href="#">
        <img src="images/movie-10.jpg" alt=""/>
        </a>
        <h5 className="left no-underline">Deepwater horizon</h5>
        <span className="release-date">07 September, 2017</span>
        </div>
        <div  >
        <a href="#">
        <img src="images/movie-9.jpg" alt=""/>
        </a>
        <h5 className="left no-underline">Too fast</h5>
        <span className="release-date">15 April, 2017</span>
        </div>
        <div >
        <a href="#">
        <img src="images/movie-11.jpg" alt=""/>
        </a>
        <h5 className="left no-underline">The Hangover: Part III</h5>
        <span className="release-date">30 September, 2017</span>
        </div>
        <div >
        <a href="#">
        <img src="images/movie-12.jpg" alt=""/>
        </a>
        <h5 className="left no-underline">Transformers: Age of Extinction</h5>
        <span className="release-date">15 April, 2018</span>
        </div>
        <div  >
        <a href="#">
        <img src="images/movie-13.jpg" alt=""/>
        </a>
        <h5 className="left no-underline">End of an empire</h5>
        <span className="release-date">19 October, 2018</span>
        </div>
        <div  >
        <a href="#">
        <img src="images/movie-14.jpg" alt=""/>
        </a>
        <h5 className="left no-underline">The comedian</h5>
        <span className="release-date">21 November, 2018</span>
        </div>
        <div >
        <a href="#">
        <img src="images/movie-15.jpg" alt=""/>
        </a>
        <h5 className="left no-underline">Locked out</h5>
        <span className="release-date">01 December, 2018</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>

        <div className="container section small-padding">
        <div className="row">
        <div className="col-sm-12 cta">
        <p>Need help? Contact our support team on</p>
        <p className="gradient-text">0330 123 4567</p>
        </div>
        </div>
        </div>

        <footer>
        <div className="container">
        <div className="row">
        <div className="col-sm-3">
        <h6>Get in touch</h6>
        <ul>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Give us feedback</a></li>
        <li><a href="#">Contact us</a></li>
        </ul>
        </div>
        <div className="col-sm-3">
        <h6>About Movie star</h6>
        <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Find us</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">News</a></li>
        </ul>
        </div>
        <div className="col-sm-3">
        <h6>Legal stuff</h6>
        <ul>
        <li><a href="#">Terms &amp; Conditions</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Cookie policy</a></li>
        </ul>
        </div>
        <div className="col-sm-3">
        <h6>Connect with us</h6>
        <ul>
        <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
        <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
        <li><a href="#"><i className="fa fa-google-plus"></i> Google +</a></li>
        </ul>
        </div>
        </div>
        <div className="copyright">
        <p>2017 &copy; Movie Star / <a href="http://www.klevermedia.co.uk">Web design by Klever media</a></p>
        </div>
        </div>
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
