import MainNavigation from "./MainNavigation";

export default function ErrorPage(): JSX.Element {
  return (
    <>
      <MainNavigation />
      <main className="flex flex-col place-items-center place-content-center h-screen">
        <h1 className="font-black text-5xl py-2">Ooooops!</h1>
        <p className="text-stone-700">
          Error as occured,the page could not be found!
        </p>
      </main>
    </>
  );
}
