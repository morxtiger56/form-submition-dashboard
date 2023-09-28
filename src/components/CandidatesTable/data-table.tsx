import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        defaultColumn: {
            minSize: 0,
            size: Number.MAX_SAFE_INTEGER,
            maxSize: Number.MAX_SAFE_INTEGER,
        }
    })

    return (
        <div className="rounded-md border bg-white">
            <Table>
                <TableHeader className="items-center">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} >
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="max-w-fit text-primary" style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }} >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )

                            })}

                            <th>
                                <div className="flex gap-4 px-1 items-center">
                                    <Button className="border-none text-primary bg-transparent" variant={"outline"}>
                                        Qualified
                                    </Button>
                                    <div className="h-[20px] w-[1px] bg-[#EEEEEE] ">
                                    </div>

                                    <Button className="border-none bg-transparent" variant={"outline"}>
                                        Task <span className="ml-1 bg-[#F7F8FD] flex items-center justify-center py-1 px-2 text-xs rounded-full ">25</span>
                                    </Button>
                                    <div className="h-[20px] w-[1px] bg-[#EEEEEE] ">
                                    </div>
                                    <Button className="border-none bg-transparent" variant={"outline"}>
                                        Disqualified <span className="ml-1 bg-[#F7F8FD] flex items-center justify-center py-1 px-2 text-xs rounded-full ">78</span>
                                    </Button>
                                </div>
                            </th>
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="w-fit">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
