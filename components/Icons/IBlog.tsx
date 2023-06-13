import * as React from 'react';

export interface IBlogProps {}

export function IBlog(props: IBlogProps) {
  return (
    <svg
      width={100}
      height={55}
      viewBox="0 0 164 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_937_3093)">
        <path
          d="M15.48 78.352C11.96 78.352 9.304 77.744 7.512 76.528C5.72 75.376 4.824 73.424 4.824 70.672C4.824 70.48 4.984 70.384 5.304 70.384C5.752 70.384 6.552 70.544 7.704 70.864C8.856 71.184 11.064 71.344 14.328 71.344C19.832 71.344 24.92 70.736 29.592 69.52C34.264 68.24 38.296 66.512 41.688 64.336C45.144 62.16 47.8 59.728 49.656 57.04C51.576 54.288 52.536 51.472 52.536 48.592C52.536 45.968 51.8 43.856 50.328 42.256C48.856 40.656 46.904 39.44 44.472 38.608C42.104 37.776 39.512 37.232 36.696 36.976C33.88 36.656 31.096 36.496 28.344 36.496C27.128 36.496 25.88 36.528 24.6 36.592C23.384 36.592 22.232 36.592 21.144 36.592C19.672 41.776 18.232 46.992 16.824 52.24C15.416 57.488 13.976 62.576 12.504 67.504C10.904 67.504 9.56 67.056 8.472 66.16C7.384 65.264 6.84 64.176 6.84 62.896C6.84 62.128 7 61.232 7.32 60.208C7.64 59.184 7.928 58.256 8.184 57.424C8.568 56.144 9.24 54 10.2 50.992C11.16 47.984 12.312 44.464 13.656 40.432C15.064 36.4 16.6 32.176 18.264 27.76C19.928 23.344 21.624 19.024 23.352 14.8C25.144 10.576 26.872 6.832 28.536 3.568C25.848 4.016 23.576 4.65599 21.72 5.488C19.928 6.32 18.52 7.088 17.496 7.792C16.472 8.432 15.736 8.752 15.288 8.752C14.968 8.752 14.552 8.624 14.04 8.368C13.592 8.048 13.176 7.696 12.792 7.31199C12.408 6.864 12.216 6.48 12.216 6.16C15.416 4.816 18.744 3.6 22.2 2.512C25.72 1.424 29.976 0.879997 34.968 0.879997C37.08 0.879997 39.416 1.072 41.976 1.456C44.536 1.776 46.968 2.48 49.272 3.568C51.576 4.592 53.464 6.12799 54.936 8.17599C56.408 10.16 57.144 12.816 57.144 16.144C57.144 19.28 56.472 21.968 55.128 24.208C53.784 26.384 52.024 28.208 49.848 29.68C47.672 31.088 45.304 32.208 42.744 33.04C40.184 33.872 37.656 34.48 35.16 34.864C39.896 35.12 43.704 35.792 46.584 36.88C49.528 37.968 51.736 39.28 53.208 40.816C54.744 42.288 55.768 43.856 56.28 45.52C56.792 47.184 57.048 48.784 57.048 50.32C57.048 54.032 56.088 57.392 54.168 60.4C52.248 63.408 49.72 66.032 46.584 68.272C43.448 70.512 40.024 72.368 36.312 73.84C32.6 75.376 28.92 76.496 25.272 77.2C21.624 77.968 18.36 78.352 15.48 78.352ZM21.72 34.384C25.24 34.256 28.728 33.872 32.184 33.232C35.704 32.528 38.904 31.44 41.784 29.968C44.664 28.496 46.968 26.576 48.696 24.208C50.488 21.84 51.384 18.896 51.384 15.376C51.384 12.048 50.584 9.488 48.984 7.696C47.448 5.904 45.432 4.656 42.936 3.952C40.504 3.248 37.912 2.89599 35.16 2.89599C34.84 2.89599 34.52 2.89599 34.2 2.89599C33.944 2.89599 33.656 2.928 33.336 2.992C31.032 7.472 28.92 12.4 27 17.776C25.144 23.152 23.384 28.688 21.72 34.384ZM69.3743 72.88C66.6223 72.88 64.6383 71.92 63.4223 70C62.2703 68.144 61.6943 65.808 61.6943 62.992C61.6943 59.92 62.2703 56.272 63.4223 52.048C64.5743 47.824 66.0783 43.376 67.9343 38.704C69.8543 34.032 71.9343 29.488 74.1743 25.072C76.4143 20.592 78.6543 16.528 80.8943 12.88C83.1343 9.232 85.1823 6.32 87.0383 4.144C88.9583 1.968 90.4623 0.879997 91.5503 0.879997C92.2543 0.879997 92.8303 1.296 93.2783 2.128C93.7263 2.896 94.0783 3.856 94.3343 5.008C94.5903 6.096 94.7183 7.088 94.7183 7.984C94.7183 9.712 94.2703 11.984 93.3743 14.8C92.5423 17.552 91.3263 20.656 89.7263 24.112C88.1903 27.504 86.3343 30.96 84.1583 34.48C82.0463 37.936 79.7103 41.264 77.1503 44.464C74.6543 47.664 71.9983 50.416 69.1823 52.72C68.7983 54.448 68.4783 56.144 68.2223 57.808C68.0303 59.408 67.9343 60.944 67.9343 62.416C67.9343 64.912 68.2863 66.768 68.9903 67.984C69.6943 69.2 70.7503 69.808 72.1583 69.808C73.8863 69.808 75.5823 69.04 77.2463 67.504C78.9743 65.968 80.5743 64.048 82.0463 61.744C83.5823 59.376 84.8943 56.944 85.9823 54.448L87.4223 55.216C84.8623 60.656 82.0783 64.976 79.0703 68.176C76.0623 71.312 72.8303 72.88 69.3743 72.88ZM70.0463 49.456C72.2863 47.216 74.4623 44.656 76.5743 41.776C78.6863 38.832 80.6383 35.792 82.4303 32.656C84.2863 29.52 85.9183 26.48 87.3263 23.536C88.7343 20.592 89.8223 17.968 90.5903 15.664C91.3583 13.296 91.7423 11.472 91.7423 10.192C91.7423 9.552 91.6463 9.136 91.4543 8.944C91.3263 8.752 91.1983 8.65599 91.0703 8.65599C90.5583 8.65599 89.6623 9.488 88.3823 11.152C87.1663 12.752 85.7263 14.928 84.0623 17.68C82.3983 20.432 80.7023 23.568 78.9743 27.088C77.2463 30.608 75.5823 34.288 73.9823 38.128C72.4463 41.968 71.1343 45.744 70.0463 49.456ZM90.7178 73.072C87.9658 73.072 86.0138 72.208 84.8618 70.48C83.7097 68.816 83.1337 66.768 83.1337 64.336C83.1337 62.352 83.4537 60.304 84.0938 58.192C84.7338 56.08 85.5658 54.096 86.5898 52.24C87.6778 50.384 88.8618 48.88 90.1418 47.728C91.4858 46.576 92.8298 46 94.1738 46C94.4938 46 94.8138 46.064 95.1338 46.192C95.5178 46.256 95.8698 46.352 96.1898 46.48C95.6138 46.992 94.9098 47.952 94.0778 49.36C93.3098 50.704 92.5738 52.272 91.8698 54.064C91.1658 55.792 90.5578 57.52 90.0458 59.248C89.5978 60.976 89.3738 62.448 89.3738 63.664C89.3738 65.584 89.6938 66.992 90.3338 67.888C90.9738 68.72 91.8058 69.136 92.8298 69.136C94.1738 69.136 95.7738 68.432 97.6298 67.024C99.4858 65.552 101.31 63.696 103.102 61.456C101.31 59.984 99.9018 58.064 98.8778 55.696C97.9178 53.264 97.4378 50.8 97.4378 48.304C97.4378 46.192 97.7898 44.208 98.4938 42.352C99.2618 40.496 100.35 39.024 101.758 37.936C103.166 36.784 104.862 36.208 106.846 36.208C109.47 36.208 111.23 36.912 112.126 38.32C113.022 39.728 113.47 41.488 113.47 43.6C113.47 46.096 112.862 48.88 111.646 51.952C110.43 54.96 108.894 57.872 107.038 60.688C108.19 61.328 109.406 61.648 110.686 61.648C111.71 61.648 112.862 61.456 114.142 61.072C115.422 60.624 116.67 59.888 117.886 58.864C119.166 57.84 120.19 56.464 120.958 54.736L122.11 55.696C120.83 58.704 119.006 60.848 116.638 62.128C114.334 63.344 112.126 63.952 110.014 63.952C109.182 63.952 108.382 63.888 107.614 63.76C106.846 63.568 106.11 63.312 105.406 62.992C103.23 65.872 100.83 68.272 98.2057 70.192C95.6458 72.112 93.1498 73.072 90.7178 73.072ZM104.83 58.96C106.43 56.592 107.742 54.128 108.766 51.568C109.854 48.944 110.398 46.48 110.398 44.176C110.398 42.32 110.11 40.976 109.534 40.144C109.022 39.248 108.35 38.8 107.518 38.8C106.238 38.8 104.926 39.728 103.582 41.584C102.238 43.44 101.566 45.776 101.566 48.592C101.566 50.448 101.822 52.336 102.334 54.256C102.91 56.112 103.742 57.68 104.83 58.96ZM122.804 96.88C121.396 96.88 120.116 96.432 118.964 95.536C117.812 94.704 117.236 93.296 117.236 91.312C117.236 89.392 117.844 87.6 119.06 85.936C120.212 84.336 121.716 82.832 123.572 81.424C125.428 80.08 127.444 78.832 129.62 77.68C131.86 76.528 133.972 75.44 135.956 74.416C136.852 72.176 137.684 69.776 138.452 67.216C139.284 64.592 140.084 61.712 140.852 58.576C138.42 62.096 135.86 65.04 133.172 67.408C130.548 69.712 127.892 70.864 125.204 70.864C122.9 70.864 121.108 70 119.828 68.272C118.612 66.544 118.004 64.304 118.004 61.552C118.004 58.224 118.804 55.056 120.404 52.048C122.068 49.04 124.212 46.384 126.836 44.08C129.46 41.776 132.244 39.984 135.188 38.704C138.132 37.36 140.884 36.688 143.444 36.688C145.3 36.688 146.612 37.008 147.38 37.648C148.212 38.224 148.628 38.928 148.628 39.76C148.628 40.336 148.468 40.784 148.148 41.104C147.828 41.424 147.604 41.616 147.476 41.68C147.156 41.168 146.676 40.816 146.036 40.624C145.396 40.368 144.596 40.24 143.636 40.24C141.14 40.24 138.708 40.976 136.34 42.448C134.036 43.92 131.988 45.808 130.196 48.112C128.404 50.416 126.964 52.816 125.876 55.312C124.852 57.744 124.34 59.984 124.34 62.032C124.34 63.568 124.628 64.752 125.204 65.584C125.844 66.352 126.676 66.736 127.7 66.736C129.556 66.736 131.764 65.52 134.324 63.088C136.948 60.592 139.476 57.584 141.908 54.064C142.1 53.168 142.26 52.368 142.388 51.664C142.58 50.96 142.804 50.064 143.06 48.976C143.252 48.08 143.7 47.056 144.404 45.904C145.172 44.688 146.356 44.08 147.956 44.08C148.276 44.08 148.596 44.112 148.916 44.176C149.236 44.176 149.588 44.24 149.972 44.368C149.972 45.392 149.652 47.28 149.012 50.032C148.436 52.72 147.572 55.888 146.42 59.536C145.332 63.12 144.052 66.832 142.58 70.672C144.692 69.648 146.74 68.336 148.724 66.736C150.772 65.136 152.628 63.312 154.292 61.264C155.956 59.152 157.268 56.88 158.228 54.448L159.476 55.408C158.516 58.288 156.98 60.912 154.868 63.28C152.756 65.648 150.484 67.696 148.052 69.424C145.684 71.152 143.508 72.496 141.524 73.456C139.732 77.744 137.844 81.648 135.86 85.168C133.876 88.752 131.796 91.6 129.62 93.712C127.508 95.824 125.236 96.88 122.804 96.88ZM122.516 93.808C123.796 93.808 125.524 92.528 127.7 89.968C129.94 87.472 132.34 83.152 134.9 77.008C132.34 78.288 129.94 79.6 127.7 80.944C125.524 82.352 123.732 83.824 122.324 85.36C120.916 86.896 120.212 88.592 120.212 90.448C120.212 91.472 120.436 92.272 120.884 92.848C121.332 93.488 121.876 93.808 122.516 93.808Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_937_3093"
          x="0.824219"
          y="0.880005"
          width="162.652"
          height={104}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.45 0 0 0 0 0.45 0 0 0 0 0.45 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_937_3093" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_937_3093"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}