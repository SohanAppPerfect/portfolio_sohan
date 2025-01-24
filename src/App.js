import { useState } from "react";
import { education, profileDetails, projectsData } from "./data";

export default function App(){
  return(
    <div>
      <Profile
        personName={profileDetails.name}
        imageURL={profileDetails.image}>
      </Profile><br/>
      <Qualifications
          education={education}>
        </Qualifications><br/>
      <Projects></Projects><br/>
    </div>
  );
}

function Profile({personName,imageURL}){
  return(
    <section>
      <h1>{personName}</h1>
      <img
        src={imageURL}
        height={150}
        width={150}/>
    </section>
  );
}
function Qualifications({ education }) {
  const educationItems = education.map((item, index) => (
    <li key={index}>
      <>
        <h3>{item.school}</h3>
        <ul>
          <li>{"Degree : "}{item.degree}</li>
          <li>{"Marks : "}{item.marks}{"%"}</li>
        </ul>
      </>
    </li>
  ));
  return (
    <div>
      <h2><u>Educational Qualifications</u></h2>
      <ol>{educationItems}</ol>
    </div>
  );
}

function Projects(){
  const [index,setIndex] = useState(0);
  const [visible,setVisible] = useState(false);

  function handleNext(){
    let len = projectsData.length;
    let ind = (index+1)%len;
    setIndex(ind)
  }
  function handlePrev(){
    if(index==0) setIndex(projectsData.length-1);
    else setIndex(index-1)
  }  
  function showDescription(){
    setVisible(!visible)
  }
  let project = projectsData[index]
  return(
    <section>
      <h2><u>Projects</u></h2>
      <h4>{project.name}</h4>
      <Image imageURL={project.image}></Image>
      <br/>
      <button onClick={showDescription}>{(visible) ? "Hide Description" :"Show Description"}</button>
      <br/>
      {visible && <p>{project.description}</p>}
      <button onClick={handleNext}>Prev</button>
      &nbsp;
      <button onClick={handlePrev}>Next</button>
    </section>
  );
}
function Image({imageURL}){
  return(
    <img src={imageURL}
        height={250}
        width={250}>
    </img>
  );
}
