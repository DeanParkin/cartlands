import React from "react";
import Image from "next/image";

import event1 from "../public/imgs/Events/FREE_POOL_WEB.jpg";
import event2 from "../public/imgs/Events/2for1_COCKTAILS_WEB.jpg";
import event3 from "../public/imgs/Events/QUIZ_WEB.jpg";
import event4 from "../public/imgs/Events/FIZZ_FRIDAY_WEB.jpg";
import event5 from "../public/imgs/Events/LIVE_MUSIC_WEB.jpg";
import event6 from "../public/imgs/Events/TRADE_WEB.jpg";

const Events = () => {
  const eventsList = [
    {
      name: "German Conversation",
      image: event1,
      day: "Monday",
      time: "11:30 - 12:30",
    },
    {
      name: "Moo Music",
      image: event2,
      day: "Tuesday",
      time: "9:30 am",
    },
    {
      name: "Baby Spanish",
      image: event3,
      day: "Wednesday",
      time: "10 am",
    },
    {
      name: "Italian Conversation",
      image: event3,
      day: "Thursday",
      time: "all day",
    },
    {
      name: "Art with Robert",
      image: event3,
      day: "Mondays, Wednesdays & Thursdays",
      time: "all day",
    },
  ];
  return (
    <>
      <div className="container text-center pt-3">
        <h2 className="h2 text-primary playfair-font">Events</h2>
        <div className="d-flex justify-content-center">
          <p className="text-dark">Check out some of our events</p>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          {eventsList.map((event, key) => {
            return (
              <div className="col-md-6" key={key}>
                <div className="card border-primary mb-2">
                  {/* <img src="#" className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">{`${event.day} ${event.time}`}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
