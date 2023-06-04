import { useRouter } from 'next/router';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { filterRating } from './Filter.props';

export interface FilterByRatingProps {}

export function FilterByRating(props: FilterByRatingProps) {
  const router = useRouter();

  const handleFilterByPrice = (rating) => {
    router.push({
      path: router.pathname,
      query: {
        ...router.query,
        rating,
      },
    });
  };
  return (
    <div className="my-2">
      <p className="text-blue-1 text-xl px-3 py-2">Rating</p>
      <div className="p-3 pt-0">
        {filterRating.map((rating) => (
          <div
            key={rating.id}
            className="flex items-center py-1 cursor-pointer"
            onClick={() => handleFilterByPrice(rating.value)}
          >
            {new Array(5).fill('').map((_, index) =>
              rating.value <= index ? (
                <span key={`${rating.id}- ${index}`}>
                  <AiOutlineStar size={20} color={'#b8b8b8'} />
                </span>
              ) : (
                <AiFillStar key={`${rating.id}- ${index}`} size={20} color={'#FDDA43'} />
              )
            )}
          </div>
        ))}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FDDA43"
          className="mr-1 h-5 w-5 text-warning"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#b8b8b8"
          className="mr-1 h-5 w-5 text-warning"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg> */}
        {/* {filterRating.map((item) => (
          <div className="my-2" key={item.id}>
            <CheckBox
              value={item.value}
              label={item.label}
              name={item.value}
              className={classCheckBox}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}
