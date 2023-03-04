import { useState } from "react";
import introM from "../video/intro.mp4";
import ReactPlayer from "react-player";

const Home = () => {
    const [intro, setIntro] = useState(true);

    window.setTimeout(function() {
        setIntro(false);
    }, 35800);

 

    return (
		<div>
		  {intro && (
			<div className="landingpage">
			  <ReactPlayer
			 	muted
				playing={true}
				url={introM}
				width={1366}
				height={768}
				controls={false}
				autoPlay={true}
			  />
			</div>
		  )}
		  
		</div>
	  );
	};
	
	export default Home;