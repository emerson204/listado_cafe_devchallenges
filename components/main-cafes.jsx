import React from "react";
import EncabezadoMain from "./encabezado-main";
import Tarjeta from "./tarjeta";
import Image from "next/image";

export default function MainCafes() {
  return (
    <section className="mb-16">
      <div className="lg:max-w-[70rem] md:max-w-[45rem] max-w-[27rem] mx-auto bg-[#1B1D1F] -mt-[10rem] px-5 lg:px-14 lg:py-16 md:px-10 md:py-12 py-10 rounded-2xl relative overflow-hidden">
        <Image
          src="/vector.svg"
          alt="vector"
          width={250}
          height={250}
          className="absolute lg:right-[27%] md:right-[17%] -right-14 top-3 "
        />
        <EncabezadoMain
          title="Our Collection"
          descripcion="  Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly."
          allProducts="All Products"
          availableNow="Available Now"
        />

        <Tarjeta />
      </div>
    </section>
  );
}
