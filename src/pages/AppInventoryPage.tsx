import * as React from "react";
import {useEffect} from "react";
import {Filter} from "../types/utils.ts";
import {Apps} from "../types/app.ts";
import * as app_service from '../api/app-sevice.ts'
import {defaultPagination} from "../utils/filters.ts";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Alert} from "@mui/material";

export const AppInventoryPage: React.FC = () => {
    const [apps, setApps] = React.useState<Apps[]>([]);
    const [totalItems, setTotalItems] = React.useState<number>(0);
    const [error, setError] = React.useState<string>();
    const [filters, setFilters] = React.useState<Filter>({
        pageNumber: defaultPagination.pageNumber,
        pageSize: defaultPagination.pageSize,
    });

    useEffect(() => {
        setError(undefined);
        app_service.getApps(filters).then(({data}) => {
            setApps(data.appRows);
            setTotalItems(data.totalCount || 0);
        }).catch(({response}) => {
            setError(response.error?.message!);
        });
    }, [filters])

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setFilters({...filters, pageNumber: newPage});
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFilters({...filters, pageNumber: 0, pageSize: parseInt(event.target.value, 10)});
    };


    return <div>
        {error && <Alert icon={<CheckIcon fontSize="inherit"/>} severity="error">
            {error}
        </Alert>}
        <div>
            <h1>App Inventory</h1>
        </div>
        <div>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Connector</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apps.map((row) => (
                            <TableRow
                                key={row.appId}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.appName}
                                </TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination rowsPerPageOptions={[25, 50]}
                                 count={totalItems}
                                 rowsPerPage={filters.pageSize}
                                 page={filters.pageNumber}
                                 onPageChange={handleChangePage}
                                 onRowsPerPageChange={handleChangeRowsPerPage}/>
            </TableContainer>
        </div>
    </div>
}