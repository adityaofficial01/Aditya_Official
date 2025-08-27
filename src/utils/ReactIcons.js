import { FaArrowCircleRight, FaCode, FaTelegramPlane } from "react-icons/fa";
import { FaCircleArrowLeft, FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { IoCheckmarkSharp, IoCloseCircle, IoMenuSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { HiOutlineCircleStack, HiUsers } from "react-icons/hi2";
import { FiShield } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";






export const ReactIcons = {
    MenuBar: () => <IoMenuSharp className={`size-10`} />,
    ArrowRightCircleIcon: ({ style, className }) => <FaCircleArrowLeft style={style} className={`${className} bg-white text-red-900 rounded-full size-10`} />,
    Plane: ({ style, className }) => <FaTelegramPlane style={style} className={`${className} bg-transparent text-[#9ecaf7] rounded-full size-7`} />,
    Users: ({ style, className }) => <HiUsers style={style} className={`${className} bg-transparent text-[#9ecaf7] rounded-full size-7`} />,
    Code: ({ style, className }) => <FaCode style={style} className={`${className} bg-transparent text-[#9ecaf7] rounded-full size-7`} />,
    DataBase: ({ style, className }) => <HiOutlineCircleStack style={style} className={`${className} bg-transparent text-[#9ecaf7] rounded-full size-7`} />,
    Security: ({ style, className }) => <FiShield style={style} className={`${className} bg-transparent text-[#9ecaf7] rounded-full size-7`} />,
    Stars: ({ style, className }) => <BsStars style={style} className={`${className} bg-transparent text-[#9ecaf7] rounded-full size-7`} />,
    Hamburger: ({ style, className }) => <GiHamburgerMenu style={style} className={`${className} bg-transparent text-[#9ecaf7]  size-7`} />,
    ArrowLeftCircleIcon: ({ style, className }) => <FaArrowCircleRight style={style} className={`${className} bg-white rounded-full text-red-900 size-10`} />,
    ArrowUpIcon: ({ style, className }) => <MdOutlineKeyboardArrowUp style={style} className={`${className} text-red-900 size-10`} />,
    ArrowDownIcon: ({ style, className }) => <MdOutlineKeyboardArrowDown style={style} className={`${className}  text-red-900 size-10`} />,
    CloseIcon: ({ style, className }) => <IoCloseCircle style={style} className={`${className}  text-red-900 size-16 -mt-5 sm:-mt-4`} />,
    PauseIcon: ({ style, className }) => <FaCirclePause style={style} className={`${className} text-white size-14`} />,
    PlayIcon: ({ style, className }) => <FaCirclePlay style={style} className={`${className} text-white size-14`} />,
    Tickicon: ({ style, className }) => <IoCheckmarkSharp style={style} className={`${className} `} />,
}