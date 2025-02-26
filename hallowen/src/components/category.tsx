const category = () => {
  return (
    <section className="min-h-screen w-full md:pt-[5vw] pt-[100px]" >
      <div>
        <h1 className="text-center text-[48px] capitalize font-[900] leading-[45px]">
          favourite scare <br /> category
        </h1>
        <div className="flex justify-center flex-wrap md:flex-nowrap">
          <div className="text-center py-[20px] px-[30px]">
            <img src="/category1-img.png" alt="" />
            <h1 className="font-[900] text-[20px] ">Ghosts</h1>
            <p>Choose the ghosts, the scariest there are</p>
          </div>

          <div className="text-center py-[20px]  px-[30px]">
            <img src="/category2-img.png" alt="" />
            <h1 className="font-[900] text-[20px]">Pumpkins</h1>
            <p>You look at the Pumpkins, the scariest there are</p>
          </div>

          <div className="text-center py[20px]  px-[30px]">
            <img src="/category3-img.png" alt="" />
            <h1 className="font-[900] text-[20px]">Wish Hat</h1>
            <p>Pich the most stylish Wish hat that you want out there</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default category;
