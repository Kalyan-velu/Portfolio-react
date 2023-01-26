import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Intro.module.css";
import { Link } from "../../../action/link/Link";



const Intro = () => {
  return (
    <>
      <div className={classes.intro} id="about">
        <div className={classes.photoAndBio}>
          <div data-aos="fade-left">
            <h2>Bio</h2>
            <p>
              Web developer professional with year of experience writing,
              reviewing and fixing code aiming for a position , where I
              contribute to a dynamic and growing IT team.
            </p>
            <IconContext.Provider value={{ color: "#00a6eb", size: "1rem" }}>
              <div className={classes.bio}>
                <ul>
                  <li>
                    <FaAngleRight />
                    <span>Degree:</span> BCA
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>Age:</span> 22
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>City:</span> Sivasagar, Assam.
                  </li>
                </ul>

                <ul>
                  <li>
                    <FaAngleRight />
                    <span>Birthday:</span> 13 Sept 2001
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>Phone:</span> +91 9101725446
                  </li>


                </ul>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div data-aos="fade-left" className={classes.playlist}>
          <h2 style={{ textAlign: "center" }}>My Playlists</h2>
          <h3>
            <Link link={"https://open.spotify.com/user/31klyonozioc7r26lj2nk4xyorte?si=e7a780f977734614"} title={"my spotify a/c"}>
              1.Spotify
            </Link>
          </h3>
          <div data-aos="fade-left">
            <iframe title="playlist1" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/1H97oJHMZvfdPFQW0IRUhi?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div data-aos="fade-left">
            <iframe title="playlist2" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/61APPD75B5JcdD7CbOdsDk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <h3>
            <Link link={""} title={"my spotify a/c"}>
              2.Amazon Music
            </Link>
          </h3>
          <div data-aos="fade-left">
            <iframe title="amazon1" id='AmazonMusicEmbededbbb05b2873495fb5fbca9377a71964i8n0' src='https://music.amazon.in/embed/edbbb05b2873495fb5fbca9377a71964i8n0/?id=Eeruiyyava&marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN' width='100%' height='552' style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }} loading="lazy"></iframe>
          </div>
          <div data-aos="fade-left">
            <iframe title="amazon2" id='AmazonMusicEmbed1b11a82513604678826160ffbac48675i8n0' src='https://music.amazon.in/embed/1b11a82513604678826160ffbac48675i8n0/?id=PNSKzp0Ixc&marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN' width='100%' height='550' style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }} loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;