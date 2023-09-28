import { FC } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { PiTag } from "react-icons/pi"
import { FiUserX, FiUserCheck, FiMail } from 'react-icons/fi'
import { BiUserVoice } from 'react-icons/bi'
import { IoIosArrowDown } from "react-icons/io"
import { IconContext } from "react-icons"


export const Header: FC = () => {
    return (
        <div className="flex justify-between pt-8 w-full">
            <Select>
                <SelectTrigger className="w-[20rem] rounded-full bg-white font-medium text-primary">
                    <SelectValue placeholder="Opportunity Browsing" />
                </SelectTrigger>
                <SelectContent className="rounded-none bg-white last:rounded-bl-lg last:rounded-br-lg">
                    <SelectItem value="light">Applied</SelectItem>
                    <SelectItem value="dark">Shortlisted</SelectItem>
                    <SelectItem value="system">Technical Interview</SelectItem>
                    <SelectItem value="system">Opportunity Browsing</SelectItem>
                    <SelectItem value="system">Video Interview I</SelectItem>
                    <SelectItem value="system">Video Interview II</SelectItem>
                    <SelectItem value="system">Video Interview III</SelectItem>
                    <SelectItem value="system">Offer</SelectItem>
                    <SelectItem value="system">Withdrawn</SelectItem>
                </SelectContent>
            </Select>
            <div className="flex gap-2 items-center">
                <Button variant={"secondary"} className="text-black shadow-md">
                    <PiTag />
                </Button>
                <Button variant={"secondary"} className="text-black shadow-md">
                    <FiUserX />
                </Button>
                <Button variant={"secondary"} className="text-black shadow-md">
                    <FiUserCheck />
                </Button>
                <Button variant={"secondary"} className="text-black shadow-md">
                    <BiUserVoice />
                </Button>
                <Button variant={"secondary"} className="text-black shadow-md">
                    <FiMail />
                </Button>
                <div className="h-3/4 w-[1px] bg-[#EEEEEE]"></div>
                <div className="flex gap-[1px]">
                    <Button className="font-normal rounded-tr-none rounded-br-none">
                        Move To Video Interview I
                    </Button>
                    <IconContext.Provider value={{ color: "white" }}>
                        <Button className="font-normal rounded-tl-none rounded-bl-none">
                            <IoIosArrowDown />
                        </Button>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}
