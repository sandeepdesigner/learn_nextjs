import TrendingVideo from "./TrendingVideo";

function CardLayout() {
  return (
    <div>
      {/* Video Card Section Start Here  */}
      <div className="mt-10 container px-10">
        <h2 className=" text-lg font-bold"> Trending Videos </h2>
        <div className=" mt-4 grid grid-cols-3 gap-4">
          <TrendingVideo />
        </div>
      </div>
      {/* Video Card Section End Here  */}
    </div>
  );
}

export default CardLayout;
