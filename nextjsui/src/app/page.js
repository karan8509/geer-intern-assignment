"use client";

// import HomePages from "@/Pages/HomePages";
import { useEffect } from "react";
import Page from "./home/page";

export default function Home() {
  useEffect(() => {
    const width = document.documentElement.clientWidth;
    console.log("Screen width:", width);
  }, []);

  return (
    // <div className="bg-white h-screen text-black text-2xl">
    //   10% OFF on Diamonds + 50% OFF on Making Charges.
    // </div>
    <>
    {/* <Page /> */}
 
 <Page />
    </>
  );
}
