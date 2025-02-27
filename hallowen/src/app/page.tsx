import NavBar from "@/components/nav";
import Header from "@/components/header";
import Category from "@/components/category";
import About from "@/components/about";
import Candy from "@/components/candy";
import Discount from "@/components/discountsec";
import NewArrival from "@/components/newarrivals";
import NewsLetter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="bg-[linear-gradient(90deg,hsl(104,28%,40%)_0%,hsl(58,28%,40%)_100%)]  md:px-[15%] px-[10%] text-white ">
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <Header></Header>
          <Category></Category>
          <About></About>
          <Candy></Candy>
          <Discount></Discount>
          <NewArrival></NewArrival>
          <NewsLetter></NewsLetter>
          <Footer></Footer>
        </div>
      </main>
    </>
  );
}
