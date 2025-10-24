import "./About.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
export default function About() {
  return (
    <>
      <div className="about-top">
        <img src={image1} alt="image" />
        <div className="top-text">
          <h1>Dr bio 7 votre bien-être, naturellement puissant.</h1>
          <div className="about-text">
            <h4>D'une vision à la réalité</h4>
            <p>
              apporter les propriétés naturelles offertes par la nature dans une
              gamme de compléments alimentaires essentielles au bien être
              physique, physiologique et cognitif.
            </p>
            <br />
            <h4>Notre engagement</h4>
            <p>
              garantir une satisfaction à nos clients dans leurs recherches de
              bien être, performance cognitive, physique, métabolique tout en
              prévenant les carences alimentaires et nutritionnelles.
            </p>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <div className="bottom-text">
          <h1>Discovering Design & print Mastery evolution</h1>
          <p>
            Exploring the intersection of vision, innovation, craftmanship,
            provision and performing design & print solutions
          </p>
        
        <div className="number">
            <p>+11 <br />Ready to use products</p>
            <p>99% <br />Customer satisfaction</p>
        </div>
        <div className="buttom-btn">
            <button>Contact us</button>
            <button>Book a call</button>
        </div>
        </div>
        <img src={image2} alt="image" />
      </div>
    </>
  );
}
