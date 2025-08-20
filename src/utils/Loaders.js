import { Bars } from "react-loader-spinner"
const getCSSVariable = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

export const BarLoader = ({redColor}) => {
    return (
        <Bars
            height="30"
            color={getCSSVariable('--primaryBlue')}
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}