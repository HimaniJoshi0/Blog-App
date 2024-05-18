export const AnimatedText = ({title}) => {
  let text = title;
  console.log("title",title)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1021 100"
      class="text-[6rem] w-[100%] h-full"
    >
      <text
        id={text}
        data-name={text}
        transform="translate(500.5 120.5)"
        fill="none"
        stroke="#fff"
        stroke-width="2.5"
        font-family="Montserrat-Bold, Montserrat"
        font-weight="700"
        letter-spacing="0.15em"
        style={{ textAnchor: "middle" }}
      >
        <tspan x="0" y="0">
          {text}
        </tspan>
      </text>
    </svg>
  );
};
