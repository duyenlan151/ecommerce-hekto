// components

// layout for page

import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import MapExample from '@components/Shared/MapExample';

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      </div>
    </>
  );
}

Maps.layout = LayoutAdmin;
