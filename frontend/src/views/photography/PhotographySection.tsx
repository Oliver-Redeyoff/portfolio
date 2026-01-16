import Tile from "../../components/Tile/Tile";

import Buda from "../../assets/photography/buda.jpg";
import Building from "../../assets/photography/building.jpg";
import CavalairePonton from "../../assets/photography/cavalaire_ponton.jpg";
import CavalaireSea from "../../assets/photography/cavalaire_sea.jpg";
import CavalaireBeach from "../../assets/photography/cavalaire_beach.jpg";
import DealLockdown from "../../assets/photography/deal_lockdown.jpg";
import HawaiiCar from "../../assets/photography/hawaii_car.jpg";
import HawaiiCliff from "../../assets/photography/hawaii_cliff.jpg";
import BluredTilly from "../../assets/photography/blured_tilly.jpg";
import Waves from "../../assets/photography/waves.jpg";
import Surfboard from "../../assets/photography/surfboard.jpg";
import SunRipple from "../../assets/photography/sun_ripples.jpg";

interface Photo {
  name: string;
  image: string;
}

const photos: Photo[] = [
  {
    name: "Buda",
    image: Buda,
  },
  {
    name: "Building",
    image: Building,
  },
  {
    name: "French Pier",
    image: CavalairePonton,
  },
  {
    name: "Cavalaire Sea",
    image: CavalaireSea,
  },
  {
    name: "Cavalaire Beach",
    image: CavalaireBeach,
  },
  {
    name: "Deal Lockdown",
    image: DealLockdown,
  },
  {
    name: "Hawaii Car",
    image: HawaiiCar,
  },
  {
    name: "Hawaii Cliff",
    image: HawaiiCliff,
  },
  {
    name: "Blured Tilly",
    image: BluredTilly,
  },
  {
    name: "Waves",
    image: Waves,
  },
  {
    name: "Surfboard",
    image: Surfboard,
  },
  {
    name: "Sun Ripple",
    image: SunRipple,
  },
];

function PhotographySection() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap w-full items-stretch content-start gap-4">
      <div className="w-96 h-80" />

      {photos.map((photo) => {
        return (
          <Tile
            key={photo.name}
            outerClassName="h-80 flex-grow"
            className="relative h-80 rounded-3xl overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: `url(${photo.image})` }}
          >
            <img className="h-80 opacity-0" src={photo.image} alt={photo.name} />
            <div className="absolute bottom-0.5 left-0.5 px-3 py-1 backdrop-blur-md rounded-md rounded-bl-3xl bg-slate-400 bg-opacity-30 text-slate-50">
              {photo.name}
            </div>
          </Tile>
        );
      })}
    </div>
  );
}

export default PhotographySection;
