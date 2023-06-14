import React from 'react'
import qualifiPhoto from '../../../../assests/images/qualification.png'

const EducationDetails = () => {
  const educationsDetails1 = [
    {
      id: 1,
      name: "H.S.",
      duration: "2017-2019",
      destination: "S P P College, Namti Chariali",
      native: "Namti Dol-785684",
    },
    {
      id: 2,
      name: "The Complete Web Development Bootcamp",
      duration: "6 months",
      destination: "Online(FrontEnd Masters)",
    },
    {
      id: 3,
      name: "React Bootcamp",
      duration: "6 months",
      destination: "Online(udemy)",
    },
  ];
  const educationsDetails2 = [
    {
      id: 4,
      name: "B.C.A",
      duration: "2019-2022",
      destination: "Sibsagar Commerce College",
      native: "Sivasagar,Chennai",
    },
    {
      id: 5,
      name: "Internship - NullClass",
      duration: "1 Month",
      destination: "NullClass",
    }
  ];
  return (
    <div className={"edu"}>
      <h1 style={{
        textAlign: "center"
      }}>Education</h1>
      <div className={"edu__qualification"}>
        <div className={"edu__qualification__list"} data-aos="fade-right">
          <div>
            {educationsDetails1.map((item) => (
              <div className={"edu__qualification__list__item"} key={item.id}>
                <h3>{item.name}</h3>
                <div>{item.duration}</div>
                <p>
                  {item.destination} <br />
                  {item.native && item.native}
                </p>
              </div>
            ))}
          </div>
          <div>
            {educationsDetails2.map((item) => (
              <div className={"edu__qualification__list__item"} key={item.id}>
                <h3>{item.name}</h3>
                <div>{item.duration}</div>
                <p>
                  {item.destination} <br />
                  {item.native && item.native}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left">
          <img src={qualifiPhoto} alt="qualification" />
        </div>
      </div>
    </div>
  )
}

export default EducationDetails