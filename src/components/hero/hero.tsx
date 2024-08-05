import HeroCard from "../hero-card/hero-card";

const Hero = () => {
  return (
    <section className="mt-10">
      <HeroCard
        title="Mobile & Computing"
        list={[
          "Galaxy Z Flip6",
          "Galaxy Z Fold6",
          "Galaxy Watch Ultra",
          "Galaxy Buds3 Pro",
          "Galaxy Experience",
        ]}
        img="/hero-01.avif"
        name="Galaxy Z Flip6"
        desc="Get up to $650 instant trade-in creditθ and double the storage on us with select colors.√"
        color="black"
        btnTxt="Buy now"
      />
      <HeroCard
        title="TV & Audio"
        list={["Samsung Neo QLED 8k", "TV + Soundbar bundles", "Q990D"]}
        img="/hero-02.avif"
        name="Discover new depths of detail"
        desc="Buy an 85” Class Samsung Neo QLED QN800D and take in hyper-realistic picture with Neo Quantum HDR 8K+.

"
        color="white"
        btnTxt="Buy now"
      />
      <HeroCard
        title="Home Appliances"
        list={[
          "Bespoke Appliances",
          "Bespoke Refrigerators",
          "Bespoke Laundry",
        ]}
        img="/hero-03.avif"
        name="Save on Bespoke all summer"
        desc="Get up to $1,300 off select Bespoke models from America's #1 appliance brand.3."
        color="black"
        btnTxt="Shop now"
      />
    </section>
  );
};

export default Hero;
