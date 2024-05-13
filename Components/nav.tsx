import { Bars3Icon } from "@heroicons/react/16/solid";
interface Props{
    openNav: () => void;
}

const Navigation = ({openNav}:Props) => {
    return (
        <div className="w-full top-0 h-[10vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-full">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">WEB
                <span className="text-yellow-300">Dev</span>
                </h1>
                <div className="nav-link">Home</div>
                <div className="nav-link">Services</div>
                <div className="nav-link">About</div>
                <div className="nav-link">Project</div>
                <div className="nav-link">Blog</div>
                <div className="nav-link">Contact</div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
                </div>
            </div>
        </div>
    )
}

export default Navigation;