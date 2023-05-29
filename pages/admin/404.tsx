import { INotfound } from '@components/Icons';
import LayoutAdmin from '@components/Shared/LayoutAdmin';

export default function PageNotFound() {
  return (
    <>
      <section className="container mx-auto text-center">
        <div className="relative text-center flex justify-center">
          <INotfound />
          <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-2xl text-blue-1">
            ooPs! The page you requested was not found ooPs!
          </p>
        </div>
        <button
          type="submit"
          className="mb-16 mt-8 rounded-sm bg-pink-1 flex-none px-10 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Back To Home
        </button>
      </section>
    </>
  );
}
PageNotFound.layout = LayoutAdmin;
