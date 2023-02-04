import React from "react";
import IconSystem from "./IconSystem";

type Props = {
    props?:any;
    mode_icon_system?:any;
    globals_?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}


const IconSVG1 : React.FC<Props> = (props) => {

const size='big'
const color = "#A41FAF", gradientColor = "#A41FAF"

return (
    <div>

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
             preserveAspectRatio="xMidYMid meet">


            <defs>
                <linearGradient
                    id="linearGradient-1"
                    x1={1} y1={0} x2={1} y2={1}>
                    <stop offset="0%" style={{stopColor:'rgb(244,0,255)', stopOpacity:'1' }} />
                    <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity:'1' }} />
                </linearGradient>

            </defs>

            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none">
                <path
                    fill="url(#linearGradient-1)"
                    d="M314 922 c-93 -33 -166 -100 -207 -189 -34 -74 -31 -199 6 -275 35
-72 93 -130 165 -165 49 -24 69 -28 142 -28 73 0 93 4 144 29 l58 29 129 -129
129 -129 27 28 28 27 -128 128 -129 129 30 47 c106 167 39 393 -145 482 -72
36 -176 42 -249 16z m240 -56 c105 -51 161 -144 161 -266 0 -85 -21 -142 -74
-203 -82 -92 -237 -121 -353 -64 -160 79 -215 278 -118 430 80 126 246 170
384 103z"/>
            </g>
        </svg>


        <svg
            xmlns="http://www.w3.org/2000/svg"
            // Add default size
            width={size === "big" ? 96 : 48}
            height={size === "big" ? 62 : 31}
            viewBox="0 0 48 31"
        >
            <defs>
                <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                    <stop offset="0%" style={{stopColor:'rgb(244,0,255)', stopOpacity:'1' }} />
                    <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity:'1' }} />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(-736 -358)">
                    <g transform="translate(120 176)">
                        <g transform="translate(595 148)">
                            <g transform="translate(22.83 35.64)">
                                <path
                                    fill="url(#linearGradient-1)"
                                    d="M.102 14.765c.334-3.111 2.907-4.224 7.72-3.338l.741.142.897.184 1.673.362.61.123.278.05.261.04.246.032.232.021.22.01.206-.002c.368-.016.681-.096.969-.262l.154-.1c.127-.09.25-.198.37-.328l.145-.165.145-.186a5.28 5.28 0 00.073-.101l.146-.219.149-.241.075-.13.155-.276.16-.301.251-.5.46-.967 1.407-3.072.259-.55.128-.264.255-.502c.084-.162.168-.319.252-.47l.25-.44C20.862.13 22.603-.498 24.913.332l.312.12c.052.02.105.043.158.065l.322.145.33.16.338.175.347.19.355.203.364.218.374.23.778.497 1.033.685 2.287 1.542c4.894 3.28 9.092 2.506 12.594-2.325v26.507H0l.102-13.98z"
                                    opacity="0.2"
                                ></path>
                                {/* Set color */}
                                <path
                                    stroke={color}
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M.102 14.765c.334-3.111 2.907-4.224 7.72-3.338 7.218 1.33 6.117 2.614 10.023-5.886C21.75-2.96 24.57-.36 31.91 4.56c4.894 3.282 9.092 2.507 12.594-2.324"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </div>
);

}
export default IconSVG1

