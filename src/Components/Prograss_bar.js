import React from "react";

const Progress_bar = ({ bgcolor, progress, height , skill }) => {
//   const Parentdiv = {
//     height: height,
//     width: "100%",
//     backgroundColor: "#e0e0e0",
 
//   };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "red",
    height: "10px",
    transition: "0.9s",
    

  };

//   const progresstext = {
//     padding: 10,
//     color: "black",
//     fontWeight: 900
//   };
const [value, setValue] = React.useState(0)


React.useEffect(() => {
    setValue(progress * height);
  });
  return (
    <div className="progress">
      <span className="skill">{skill}<i className="val">{`${progress}%`}</i></span>
      <div className="progress-bar-wrap" style={{ height: progress }}>
        <div style={Childdiv} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} />
      </div>
    </div>
  );
};

export default Progress_bar;
