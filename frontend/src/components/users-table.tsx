import { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useUserStore } from '../store/usersStore';
import { User } from '../types/user';

interface HeadCell {
  id: keyof User | 'fullName';
  label: string;
  disableSorting?: boolean;
}

const headCells: HeadCell[] = [
  { id: 'email', label: 'Email' },
  { id: 'username', label: 'Username' },
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'fullName', label: 'Full Name', disableSorting: true },
  { id: 'createdTs', label: 'Created' },
  { id: 'updatedTs', label: 'Updated' },
  { id: 'deletedTs', label: 'Deleted' },
  { id: 'active', label: 'Active' },
];

const UsersTable = () => {
  const {
    users,
    totalElements,
    page,
    pageSize,
    sortField,
    sortOrder,
    fetchUsers,
    setPagination,
    setSorting,
  } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [page, pageSize, sortField, sortOrder]);

  const handlePageChange = (event: unknown, newPage: number) => {
    setPagination(newPage, pageSize);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPagination(0, parseInt(event.target.value, 10));
  };

  const handleSort = (field: string) => {
    console.log(field)
    if (sortField === field) {
      setSorting(field, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSorting(field, 'asc');
    }
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id}>
                  {headCell.disableSorting ? (
                    headCell.label
                  ) : (

                    <>
                      <TableSortLabel
                        active={sortField === headCell.id}
                        direction={
                          sortField === headCell.id
                            ? (sortOrder as 'asc' | 'desc')
                            : 'asc'
                        }
                        onClick={() => handleSort(headCell.id)}
                      >
                        {headCell.label}
                      </TableSortLabel>
                      {headCell.id === 'active' && (
                        <Select className='h-10 w-30'>
                          <MenuItem value={10} selected={true}>select</MenuItem>
                          <MenuItem value={10}>Active</MenuItem>
                          <MenuItem value={20}>Inactive</MenuItem>
                        </Select>

                      )}
                    </>


                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{`${row.firstName || ''} ${row.lastName || ''}`}</TableCell>
                <TableCell>{row.createdTs}</TableCell>
                <TableCell>{row.updatedTs}</TableCell>
                <TableCell>{row.deletedTs}</TableCell>
                <TableCell>{row.active ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalElements}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Paper>
  );
};

export default UsersTable;
