import React from "react";

export default function EncabezadoMain({
  title,
  descripcion,
  allProducts,
  availableNow,
}) {
  return (
    <div className="relative z-10 ">
      <h1 className="text-center text-[2rem] font-bold mb-2 text-white">
        {title}
      </h1>
      <p className="max-w-[30rem] text-center mx-auto text-[#6F757C] mb-5">
        {descripcion}
      </p>
      <div className="flex justify-center gap-4 text-sm font-semibold text-white">
        <button className="bg-[#6F757C] px-3 py-[.4rem] rounded-md">
          {allProducts}
        </button>
        <button>{availableNow}</button>
      </div>
    </div>
  );
}
