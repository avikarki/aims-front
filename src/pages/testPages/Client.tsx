import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import ClientModal from "./ClientModal";
import { useAppSelector } from "../../app/hooks";
import { useForm } from "react-hook-form";
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from "@mui/icons-material";
import { Form } from "react-bootstrap";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../shortcutKeys";
import StyledShortcutKeyTitle from "../../components/StyledShortcutKeyTitle";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  );
}

interface FormData {
  name: string;
  contact: string;
  isActive: boolean;
}

const Client = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { control, handleSubmit, setValue, reset } = useForm<FormData>({
    defaultValues: {
      name: "",
      contact: "",
      isActive: true,
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEditId, setUserEditId] = useState("");
  const users = useAppSelector((state) => state.user);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    event && setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setUserEditId("");
    reset();
  };
  const [isChecked, setIsChecked] = useState<any>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUserEditId("");
    setIsChecked(false);
    reset();
  };

  const editUser = (user: any) => {
    setIsModalOpen(true);
    setUserEditId(user?.id);
    setValue("name", user?.name);
    setValue("contact", user?.contact);
    setValue("isActive", user?.isActive);
  };

  const handleClientCheck = (e: any, user: any) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setUserEditId(user?.id);
      setValue("name", user?.name);
      setValue("contact", user?.contact);
      setValue("isActive", user?.isActive);
    }
  };

  const shortcutHandlers = {
    client_add: () => {
      setIsModalOpen(true);
      setUserEditId("");
      setIsChecked(false);
    },
    client_edit: () => {
      if (userEditId) {
        setIsModalOpen(true);
      }
    },
    // ... other handlers
  };

  const clientKeys: any = shortcutKeys?.find(
    (key) => key?.id === "client"
  )?.subKeys;

  // Activate shortcuts
  useShortcuts(clientKeys, shortcutHandlers);

  // useShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     if (event.altKey && event.code === "KeyA") {
  //       setIsModalOpen(true);
  //       setUserEditId("");
  //       setIsChecked(false);
  //       reset();
  //     } else if (event.altKey && event.code === "KeyU" && userEditId) {
  //       setIsModalOpen(true);
  //     }
  //   },
  //   [userEditId, isModalOpen]
  // );

  return (
    <Container>
      <Stack
        my={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">Clients</Typography>
        <Button
          id="client_add"
          variant="contained"
          color="success"
          onClick={openModal}
        >
          {/* Add Client */}
          <StyledShortcutKeyTitle
            title="Add Client"
            id="client_add"
            shortcutKeys={shortcutKeys}
          />
        </Button>
      </Stack>
      {users?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Select</strong>
                </TableCell>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Contact</strong>
                </TableCell>
                <TableCell>
                  <strong>Active?</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? users.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : users
              ).map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Form.Check
                      disabled={isChecked && userEditId !== user?.id}
                      type="checkbox"
                      checked={isChecked && userEditId === user?.id}
                      onChange={(e) => handleClientCheck(e, user)}
                      // checked={field.value}
                    />
                  </TableCell>
                  <TableCell>{user?.name}</TableCell>
                  <TableCell>{user.contact}</TableCell>
                  <TableCell>{user.isActive ? "Yes" : "No"}</TableCell>
                  <TableCell align="right">
                    <Button
                      id="client_edit"
                      size="small"
                      variant="contained"
                      color="info"
                      onClick={() => editUser(user)}
                    >
                      <StyledShortcutKeyTitle
                        title="Edit"
                        id="client_edit"
                        shortcutKeys={shortcutKeys}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
              {/* {users?.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user?.name}</TableCell>
                  <TableCell>{user?.contact}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() => editUser(user)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))} */}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={5}
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <Box
          component={Paper}
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={5}
        >
          No Clients Added!
        </Box>
      )}

      <ClientModal
        userEditId={userEditId}
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        control={control}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Client;
