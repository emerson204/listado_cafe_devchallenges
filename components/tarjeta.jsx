"use client";
import getCafes from "@/api/getCafes";
import Image from "next/image";
import React from "react";

export default function Tarjeta() {
  const { result, loading } = getCafes();
  console.log(result);

  return (
    <>
      {loading === true && <p>Cargando...</p>}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:justify-items-center mt-5">
        {result !== null &&
          result.map((cafe) => (
            <div className="m-9 " key={cafe.id}>
              <div className="relative">
                <img
                  src={cafe.image}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                {cafe.popular === true && (
                  <p className="absolute bg-[#F6C768] text-black px-3  rounded-xl text-xs py-[.2rem] top-2 left-2">
                    Popular
                  </p>
                )}
              </div>
              <div className="flex justify-between py-3 items-start">
                <div>
                  <h3 className="mb-2 font-semibold">{cafe.name}</h3>
                  <div className="flex gap-1 text-sm">
                    {cafe.votes > 0 && cafe.rating !== null ? (
                      <>
                        <Image src="/Star_fill.svg" width={20} height={20} />
                        <p className="font-semibold">{cafe.rating}</p>
                        <p className="text-[#6F757C] font-semibold">
                          ({cafe.votes} votes)
                        </p>
                      </>
                    ) : (
                      <>
                        <Image src="/Star.svg" width={20} height={20} />
                        <p className="text-[#6F757C] font-semibold">
                          No rating
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <p className="mb-3 px-2 bg-[#BEE3CC] text-xs font-semibold text-center py-[.2rem] rounded text-black ">
                    {cafe.price}
                  </p>
                  {cafe.available === false && (
                    <p className="text-sm text-[#ED735D] font-semibold">
                      Solt out
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
