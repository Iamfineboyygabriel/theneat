import map from "../../assets/images/map.png";
const Location = () => {
  return (
    <main className="max-w-[80%] container mx-auto py-20">
      <section>
        <div className="flex bg-[#EEECE2] border-[2px] border-[#C1BBA4] p-12 rounded-xl justify-between md:flex-row gap-10">
          <div></div>
          <div>
            <img src={map} alt="map" />
          </div>
        </div>
        <div className="flex bg-[#EEECE2] mt-18 border-[2px] border-[#C1BBA4] p-12 rounded-xl justify-between md:flex-row gap-10">
          <div></div>
          <div>
            <img src={map} alt="map" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;
