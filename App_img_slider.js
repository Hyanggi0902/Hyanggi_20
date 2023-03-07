import imgUrls from "./7dvpgw.json";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "img/0.jpg" },
  { url: "img/1.jpg" },
  { url: "img/2.jpg" },
  { url: "img/3.jpg" },
  { url: "img/4.jpg" },
  { url: "img/5.jpg" },
  { url: "img/6.jpg" },
];

const App = () => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);
 
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <div>
        <fieldset>
          <legend>Q1. What type of colour is used?</legend>
          <div>
            <input type="radio" id="huey" name="drone" value="huey"/>
              <label>Black and White</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey"/>
              <label>GrayScale</label>
          </div>

          <div>
            <input type="radio" id="louie" name="drone" value="louie"/>
              <label>Colour</label>
          </div>
        </fieldset>

      </div>
    </div>
  );
}


export default App;