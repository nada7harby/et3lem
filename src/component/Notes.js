import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../css/Notes.css";

// import required modules
import { EffectCards } from "swiper/modules";

function Notes() {
  const Notes = [
    {
      id: 1,
      title: " Software Development",
      note1:
        "Definition: Software development is the process of designing, coding, testing, and maintaining software applications.",
      note2:
        "Key concepts: Requirements gathering, design patterns, programming languages, and development methodologies.",
    },
   
    {
      id: 2,
      title: "Programming Languages",
      note1:
        "Types: Compiled (e.g., C, C++), interpreted (e.g., Python, JavaScript), and hybrid (e.g., Java).",
      note2:
        "Characteristics: Syntax, semantics, performance, and paradigms (e.g., procedural, object-oriented, functional).",
    },
    {
               id: 3,
               title: " Software Development Life Cycle",
               note1:
                 "Phases: Planning, analysis, design, implementation, testing, deployment, and maintenance.",
               note2: "Models: Waterfall, Agile, Scrum, Kanban, etc",
             },
    {
      id: 4,
      title: "Software Design Principles",
      note1:
        "SOLID principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
      note2:
        "Design patterns: Creational, structural, and behavioral patterns (e.g., Singleton, Factory, Observer).",
    },
    {
      id: 5,
      title: " Version Control Systems (VCS):",
      note1:
        "Definition: Tools like Git, Subversion, and Mercurial that track changes to source code.",
      note2:
        "Benefits: Collaboration, version history, rollback capabilities, and code review facilitation.",
    },
    {
      id: 1,
      title: "Distributed Systems",
      note1:
        "Definition: Systems composed of multiple autonomous computers communicating through a network.",
      note2:
        "Concepts: Scalability, fault tolerance, consistency, and distributed algorithms (e.g., Paxos, Raft).",
    },
  ];
  return (
    <>
      <div className="Notes">
        <div className="container ">
          <div className="row justify-content-around">
            <div className="col-lg-4 col-sm-4 note-word ">
              <h1>Notes useful in Many fields </h1>
            </div>
            <div className="col-lg-6 col-sm-6 ">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {/* <SwiperSlide>
                  <h4> Software Development</h4>
                  <ul>
                    <li>
                      Definition: Software development is the process of
                      designing, coding, testing, and maintaining software
                      applications.
                    </li>
                    <li>
                      Key concepts: Requirements gathering, design patterns,
                      programming languages, and development methodologies.
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <h4> Software Development</h4>
                  <ul>
                    <li>
                      Definition: Software development is the process of
                      designing, coding, testing, and maintaining software
                      applications.
                    </li>
                    <li>
                      Key concepts: Requirements gathering, design patterns,
                      programming languages, and development methodologies.
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <h4> Software Development</h4>
                  <ul>
                    <li>
                      Definition: Software development is the process of
                      designing, coding, testing, and maintaining software
                      applications.
                    </li>
                    <li>
                      Key concepts: Requirements gathering, design patterns,
                      programming languages, and development methodologies.
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <h4> Software Development</h4>
                  <ul>
                    <li>
                      Definition: Software development is the process of
                      designing, coding, testing, and maintaining software
                      applications.
                    </li>
                    <li>
                      Key concepts: Requirements gathering, design patterns,
                      programming languages, and development methodologies.
                    </li>
                  </ul>
                </SwiperSlide> */}
                {Notes.map((ele) => {
                  return (
                    <SwiperSlide key={ele.id}>
                      <h4>{ele.title}</h4>
                      <ul>
                        <li>{ele.note1}</li>
                        <li>{ele.note2}</li>
                      </ul>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notes;
