import { memo } from "react";
import { CameraNav, Categories, Header, SubCategories } from "@/widgets";

export const HomePage = memo(() => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-gray-dark">
      <Header />

      <section className="flex-1 px-6 py-6 sm:px-12 sm:py-8">
        <CameraNav />
      </section>

      <footer className="absolute bottom-8 flex w-full items-center px-6 sm:px-12">
        <Categories />
        <SubCategories />
      </footer>
    </div>
  );
});
