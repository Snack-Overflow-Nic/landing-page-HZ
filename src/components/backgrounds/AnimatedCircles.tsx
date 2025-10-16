export function AnimatedCircles() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <ul className="relative w-full h-full">
        <li className="absolute block list-none w-20 h-20 bg-white bg-opacity-20 animate-float-1 bottom-[-150px] left-[25%]" />
        <li className="absolute block list-none w-5 h-5 bg-white bg-opacity-20 animate-float-2 bottom-[-150px] left-[10%]" />
        <li className="absolute block list-none w-5 h-5 bg-white bg-opacity-20 animate-float-3 bottom-[-150px] left-[70%]" />
        <li className="absolute block list-none w-16 h-16 bg-white bg-opacity-20 animate-float-4 bottom-[-150px] left-[40%]" />
        <li className="absolute block list-none w-5 h-5 bg-white bg-opacity-20 animate-float-5 bottom-[-150px] left-[65%]" />
        <li className="absolute block list-none w-28 h-28 bg-white bg-opacity-20 animate-float-6 bottom-[-150px] left-[75%]" />
        <li className="absolute block list-none w-36 h-36 bg-white bg-opacity-20 animate-float-7 bottom-[-150px] left-[35%]" />
        <li className="absolute block list-none w-6 h-6 bg-white bg-opacity-20 animate-float-8 bottom-[-150px] left-[50%]" />
        <li className="absolute block list-none w-4 h-4 bg-white bg-opacity-20 animate-float-9 bottom-[-150px] left-[20%]" />
        <li className="absolute block list-none w-36 h-36 bg-white bg-opacity-20 animate-float-10 bottom-[-150px] left-[85%]" />
      </ul>
    </div>
  );
}