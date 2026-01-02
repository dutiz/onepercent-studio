import ContactNumberCard from "../ContactNumberCard";

export default function ContactNumberSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mt-50">
        <div className="w-4/6">
          <h2 className="font-extrabold text-5xl text-gray-100 text-center">
            We help small businesses with big hearts make meaningful hires
          </h2>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 mt-18 mb-50">
        <ContactNumberCard
          className="bg-purple-100 text-purple-300"
          svg="location-purple"
          number="(415) 870 - 3204"
          city="Hamburg"
        >
          19 Maypole Crescent Ilford,L62UJ
        </ContactNumberCard>
        <ContactNumberCard
          svg="location-gold"
          className="bg-brown-100 text-brown-300"
          number="(415) 870 - 3204"
          city="Paris"
        >
          19 Maypole Crescent Ilford,L62UJ
        </ContactNumberCard>
        <ContactNumberCard
          svg="location-blue"
          className="bg-blue-100 text-blue-300"
          number="(415) 870 - 3204"
          city="London"
        >
          19 Maypole Crescent Ilford,L62UJ
        </ContactNumberCard>
      </div>
    </div>
  );
}
