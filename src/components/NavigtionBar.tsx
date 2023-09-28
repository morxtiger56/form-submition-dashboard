import { FC } from "react"
import { GrHomeRounded } from 'react-icons/gr'
import { PiUsersThree, PiCalendarCheck, PiShareNetwork, PiFileText, PiNotebook, PiHeart } from 'react-icons/pi'
import { IoIosArrowBack } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { Avatar } from "./ui/avatar"
import { Toggle } from "./ui/toggle"

const MENU = [
    {
        icon: <Avatar>
        T</Avatar>,
        path: "/"
    },
    {
        icon: <GrHomeRounded />,
        path: "/"
    },
    {
        icon: <PiUsersThree />,
        path: "/"
    },
    {
        icon: <PiCalendarCheck />,
        path: "/"
    },
    {
        icon: <PiShareNetwork />,
        path: "/"
    },
    {
        icon: <PiFileText />,
        path: "/"
    },
    {
        icon: <PiNotebook />,
        path: "/"
    },
    {
        icon: <PiHeart />,
        path: "/"
    },
    {
        icon: <IoIosArrowBack />,
        path: "/"
    },
]

export const NavigtionBar: FC = () => {
    return (
        <div className="grid justify-items-center gap-8">
                {MENU.map(item => <Toggle>
                    {item.icon}
                </Toggle>)}
        </div>
    )
}
