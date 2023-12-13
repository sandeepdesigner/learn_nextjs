function TrendingVideo() {
  return (
    <div className="">
      <div className=" bg-slate-200 h-52">
        <iframe
          width="100%"
          height="208"
          src="https://www.youtube.com/embed/tABlzTH8G9o?si=vEy44hCqOBCfaWyp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="flex mt-4">
        <div className=" w-16 h-12 rounded-full flex bg-slate-600"></div>
        <div className=" ml-4">
          <h3 className="font-bold">
            Vlink Launching New Edge Technology Platform{" "}
          </h3>
          <p className="mt-2 font-normal text-sm">
            {" "}
            Vlink Launching New Edge Technology Platform
          </p>
        </div>

        <div className=" w-20 font-bold">... </div>
      </div>
    </div>
  );
}

export default TrendingVideo;
