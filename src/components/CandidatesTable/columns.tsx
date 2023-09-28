import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../ui/checkbox"
import { Avatar } from "../ui/avatar"
import { Badge } from "../ui/badge"

export type Candadent = {
    id: string
    firstName: string
    lastName: string
    city: string
    country: string
    degree: string
    university: string
    internalTags: string[]
    tags: string[]
}

export const columns: ColumnDef<Candadent>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),

        size: 10,
        enableSorting: false,
        enableHiding: false,
        enableResizing: true,
    },
    {
        accessorFn: (row) => row,
        header: "247 Candidates",
        cell: ({ cell }) => {
            const row = (cell.getValue() as Candadent)
            return (
                <div className="flex gap-2 items-center">
                    <Avatar className="bg-muted text-muted-foreground grid place-items-center w-14 h-14">
                        AS
                    </Avatar>
                    <div className="grid capitalize gap-2">
                        <h2 className="font-semibold ">
                            {row.firstName + " " + row.lastName}
                        </h2>
                        <h3 className="font-medium">
                            {row.city + ", " + row.country}
                        </h3>
                        <h4 className="font-thin">
                            {row.degree + " - " + row.university}
                        </h4>
                        <div className="flex gap-1">
                            {
                                row.internalTags.map(tag => <span className="text-primary lowercase">#{tag}</span>)
                            }
                        </div>
                        <div className="flex gap-1">
                            {
                                row.tags.map(tag => (

                                    <Badge className="w-fit bg-[#F3FAFC] text-[#037092] hover:bg-[#E1F5FC]">
                                        {tag}
                                    </Badge>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )

        },
        enableResizing: true
    },
]
