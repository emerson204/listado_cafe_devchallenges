import MainCafes from "@/components/main-cafes";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/bg-cafe.jpg)] bg-no-repeat bg-cover bg-center h-[45vh] w-full" />
      <MainCafes />
    </>
  );
}
