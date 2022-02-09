import React from "react";

export default function Background() {
  const baseColour = "white";
  const mainColour = "#E5DCFF";
  const analogous1 = "#DBFDFF";
  const analogous2 = "#FFDBEF";

  return (
    <svg
      className="absolute w-full top-0 bottom-0 flex flex-col justify-between -z-10"
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_53_663)">
        <rect width="390" height="844" fill={baseColour} />
        <rect width="390" height="844" fill={mainColour} fill-opacity="0.4" />
        <path
          d="M78 844C319.735 843.846 389.459 699.114 390 169V844H78Z"
          fill={analogous2}
          fill-opacity="0.25"
        />
        <path
          d="M312 0C70.2653 0.154236 0.540741 145.101 0 676L0 0H312Z"
          fill={analogous1}
          fill-opacity="0.25"
        />
        <path
          d="M234 0C52.699 0.115448 0.405563 108.611 -1.52588e-05 506L-1.52588e-05 0L234 0Z"
          fill={analogous1}
          fill-opacity="0.25"
        />
        <path
          d="M156 0C35.1326 0.0771179 0.27037 72.5506 0 338L0 0H156Z"
          fill={analogous1}
          fill-opacity="0.25"
        />
        <path
          d="M78 0C17.5663 0.038559 0.135185 36.2753 0 169L0 0H78Z"
          fill={analogous1}
          fill-opacity="0.25"
        />
        <path
          d="M156 844C337.301 843.885 389.594 735.389 390 338V844H156Z"
          fill={analogous2}
          fill-opacity="0.25"
        />
        <path
          d="M234 844C354.867 843.923 389.73 771.449 390 506V844H234Z"
          fill={analogous2}
          fill-opacity="0.25"
        />
        <path
          d="M312 844C372.434 843.961 389.865 807.725 390 675V844H312Z"
          fill={analogous2}
          fill-opacity="0.25"
        />
      </g>
      <defs>
        <clipPath id="clip0_53_663">
          <rect width="390" height="844" fill={baseColour} />
        </clipPath>
      </defs>
    </svg>
  );
}
