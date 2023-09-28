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

function App() {

    return (
        <BrowserRouter>
            <IconContext.Provider value={{ className: "text-lg text-primary" }}>
                <Layout>
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
                    <div className="flex w-[35%] flex-col items-start gap-8 py-8">
                        <div >
                            <h1 className="text-xl font-semibold text-primary">
                                London Internship Program
                            </h1>
                            <h2 className="font-light">
                                London
                            </h2>
                        </div>
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
                            <div className="flex justify-between border-b px-4 py-4">
                                <h3 className="text-lg ">
                                    Personal Information
                                </h3>
                            </div>
                            <div className="flex justify-between border-b px-4 py-4">
                                <h3 className="text-lg ">
                                    Education
                                </h3>
                            </div>
                            <div className="flex justify-between border-b px-4 py-4">
                                <h3 className="text-lg ">
                                    Work Experience
                                </h3>
                            </div>
                            <div className="flex justify-between border-b px-4 py-4">
                                <h3 className="text-lg ">
                                    Activity Filter
                                </h3>
                            </div>
                            <div className="flex justify-between border-b px-4 py-4">
                                <h3 className="text-lg ">
                                    Advanced Filter
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-8 pr-8">
                        <Header />
                        <CandidatesTable />
                    </div>
                </Layout>
            </IconContext.Provider>
        </BrowserRouter>
    )
}

export default App
