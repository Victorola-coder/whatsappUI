import { NavLink } from "react-router-dom";

export default function OutlinedButton({
  text = "",
  action = () => {},
  paddingY = "py-1",
  paddingX = "px-6",
  borderColor = "border-mp-indigo",
  backgroundColor = "",
  buttonDuration = "duration-300",
  buttonTextColor = "text-mp-indigo",
  buttonTextHoverColor = "hover:text-white",
  borderRadius = "rounded-full",
  slide = true,
  slideDuration = "duration-300",
  slideBackground = "bg-mp-indigo",
  slideBorderRadius = "rounded-r-full",
  className = "",
  textSize = "text-sm",
  slideFull = false,
}) {
  return (
    <button
      onClick={action}
      className={`${paddingY} ${paddingX} ${borderColor} ${backgroundColor} ${buttonDuration} ${borderRadius} ${buttonTextHoverColor} ${textSize} transition-all hover:shadow-md active:scale-90 ${buttonTextColor} border shadow-indigo-900/20 relative overflow-hidden group transform-gpu will-change-transform ${className}`}
    >
      {slide && (
        <div
          className={`${slideBackground} ${slideDuration} absolute top-0 left-0 group-hover:w-full transition-all h-full ${slideBorderRadius} ${
            slideFull ? "w-full" : "w-0"
          }`}
        />
      )}
      <div className="relative z-10 ">{text}</div>
    </button>
  );
}


const sapa =()=>{
    return( <NavLink>
            {({ isActive }) => (
              <OutlinedButton
                text="Login"
                buttonTextColor={`${
                  isActive ? "text-mp-indigo" : "text-mp-stone"
                }`}
                borderColor="border-white/0"
                backgroundColor="bg-transparent"
                borderRadius="rounded-md"
                slideBorderRadius="rounded-md"
                slideBackground="bg-mp-indigo/10"
                buttonTextHoverColor="hover:text-mp-indigo"
                className="hover:shadow-none"
                paddingY="py-1.5"
                paddingX="px-5"
                slideFull={isActive}
              />
            )}
          </NavLink>)
}
