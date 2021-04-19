import React from 'react';

export const MoneyBag = ({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) => (
  <svg
    id="Capa_1"
    enableBackground="new 0 0 512 512"
    height={height}
    viewBox="0 0 512 512"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="256"
      x2="256"
      y1="512"
      y2="0"
    >
      <stop offset="0" stopColor="#fd5900" />
      <stop offset="1" stopColor="#ffde00" />
    </linearGradient>
    <linearGradient
      id="SVGID_2_"
      gradientUnits="userSpaceOnUse"
      x1="256.296"
      x2="256.296"
      y1="452"
      y2="182"
    >
      <stop offset="0" stopColor="#ffedad" />
      <stop offset="1" stopColor="#ffffe5" />
    </linearGradient>
    <g>
      <g>
        <g>
          <path
            d="m325.896 152c-7.5-7.2-15.601-14.401-24-21.601.599-2.999 1.199-5.7 2.1-8.399 11.699-32.1 57.9-56.3 77.098-62.901 4.801-1.5 8.701-5.7 9.901-10.8 1.201-4.799-.3-10.201-4.2-13.801-3.3-3.6-35.4-34.499-70.499-34.499-24.3 0-47.1 14.7-60 24.899-12.9-10.198-35.7-24.898-60-24.898-35.1 0-67.2 30.899-70.499 34.499-3.9 3.6-5.402 9.001-4.2 13.801 1.199 5.099 5.099 9.3 9.9 10.8.899.3 63.6 24.2 77.098 62.901.901 2.699 1.8 5.7 2.1 8.399-8.399 7.2-16.5 14.401-24 21.601-141.598 131.099-150.6 218.999-131.399 270.898 23.1 63.001 93.001 89.101 125.099 89.101h151.802c31.8 0 101.1-26.4 124.499-90 19.2-51.901 10.201-139.801-130.8-270z"
            fill="url(#SVGID_1_)"
          />
        </g>
      </g>
      <g id="Money_bag_1_">
        <path
          d="m271.296 303.214v-59.306c17.245 4.235 30 15.335 30 28.092 0 8.291 6.709 15 15 15s15-6.709 15-15c0-28.98-25.809-53.212-60-58.786v-16.214c0-8.291-6.709-15-15-15s-15 6.709-15 15v16.214c-34.191 5.574-60 29.806-60 58.786s25.809 53.212 60 58.786v59.306c-17.245-4.235-30-15.335-30-28.092 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 28.98 25.809 53.212 60 58.786v16.214c0 8.291 6.709 15 15 15s15-6.709 15-15v-16.214c34.191-5.574 60-29.806 60-58.786s-25.809-53.212-60-58.786zm-60-31.214c0-12.757 12.755-23.857 30-28.092v56.184c-17.245-4.235-30-15.335-30-28.092zm60 118.092v-56.184c17.245 4.235 30 15.335 30 28.092s-12.755 23.857-30 28.092z"
          fill="url(#SVGID_2_)"
        />
      </g>
    </g>
  </svg>
);

MoneyBag.defaultProps = {
  width: '512',
  height: '512',
};
