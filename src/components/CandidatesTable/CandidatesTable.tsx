import { columns, Candadent } from "./columns"
import { DataTable } from "./data-table"

export const CandidatesTable = () => {
    const data: Candadent[] = [
        {
            id: "1",
            firstName: "Aaliyah",
            lastName: "Sanderson",
            country: "Saudi Arabia",
            city:"Riyadh",
            degree: "Bachlor",
            university: "Cambridge University (2023 - 2023)",
            internalTags: ["top_candidate", "top_candidate"],
            tags: ["New York", "Marketing", "London"]
       },
        {
            id: "2",
            firstName: "John",
            lastName: "Doe",
            country: "USA",
            city:"Bostom",
            degree: "Bachlor",
            university: "MIT (2023 - 2023)",
            internalTags: ["top_candidate", "top_candidate"],
            tags: ["New York", "Marketing", "London"]
        }

    ]
    return (
        <DataTable columns={columns} data={data} />
    )
}
