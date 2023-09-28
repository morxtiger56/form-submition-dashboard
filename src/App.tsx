import { Layout } from "./components/Layout"
import { IconContext } from "react-icons"
import { AiOutlineSearch } from 'react-icons/ai'
import { SideMenu, SideMenuFooter } from "./components/SideMenu"
import { NavigtionBar } from "./components/NavigtionBar"
import { BrowserRouter } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"
import { Toggle } from "./components/ui/toggle"
import { Avatar } from "./components/ui/avatar"
import { Input } from "./components/ui/input"
import { Header } from "./components/Header"
import { CandidatesTable } from "./components/CandidatesTable/CandidatesTable"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
import { PiFileText } from "react-icons/pi"


const accordionItems = [
    "Personal Information",
    "Education",
    "Work Experience",
    "Activity Filter",
    "Advanced Filter"
]


function App() {
    return (
        <BrowserRouter>
            <IconContext.Provider value={{ className: "text-lg text-primary" }}>
                <Layout className="font-poppins">
                    <SideMenu>
                        <NavigtionBar />
                        <SideMenuFooter>
                            <Toggle>
                                <IoSettingsOutline />
                            </Toggle>
                            <Avatar className="items-center justify-center bg-muted text-muted-foreground">
                                As
                            </Avatar>
                        </SideMenuFooter>
                    </SideMenu>
                    <div className="py-8 pr-8 grid gap-8 grid-cols-3 w-full items-start content-start">
                            <div>
                                <h1 className="text-xl font-semibold text-primary">
                                    London Internship Program
                                </h1>
                                <h2 className="font-light">
                                    London
                                </h2>
                            </div>
                            <Header className="col-span-2" />
                        <div className="flex flex-col items-start gap-8">
                            <div className="flex w-full items-center gap-4 rounded-lg border bg-white px-4 py-2">
                                <AiOutlineSearch />
                                <Input className="border-none bg-transparent" />
                            </div>
                            <div className="grid w-full rounded-lg border bg-white first:rounded-tl-lg first:rounded-tr-lg">
                                <div className="flex justify-between border-b px-4 py-4">
                                    <h3 className="text-lg font-medium">
                                        Filters
                                    </h3>
                                    <span>
                                        0 Selected
                                    </span>
                                </div>
                                <IconContext.Provider value={{ className: "text-black text-lg" }}>
                                    <Accordion type="single" collapsible>
                                        {
                                            accordionItems.map(item =>
                                                <AccordionItem value={item}>
                                                    <AccordionTrigger className="px-4 font-normal text-sm">
                                                        <span className="flex items-center gap-2">
                                                            <PiFileText /> {item}
                                                        </span>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-4">
                                                        Yes. It adheres to the WAI-ARIA design pattern.
                                                    </AccordionContent>
                                                </AccordionItem>
                                            )
                                        }
                                    </Accordion>
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <CandidatesTable />
                        </div>
                    </div>
                </Layout>
            </IconContext.Provider>
        </BrowserRouter>
    )
}

export default App
