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
import { useGetPostsQuery } from "../../features/post/postsApi";
import PostModal from "./PostModal";

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
  title: string;
  body: string;
  // isActive: boolean;
}

const Post = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { control, handleSubmit, setValue, reset } = useForm<FormData>({
    defaultValues: {
      title: "",
      body: "",
      // isActive: true,
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postEditId, setPostEditId] = useState<number | null>(null);

  const { data: posts = [] } = useGetPostsQuery();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - posts.length) : 0;

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
    setPostEditId(null);
    reset();
  };
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPostEditId(null);
    // setIsChecked(false);
    reset();
  };

  const editPost = (post: any) => {
    setIsModalOpen(true);
    setPostEditId(post?.id);
    setValue("title", post?.title);
    setValue("body", post?.body);
    // setValue("isActive", post?.isActive);
  };

  //   const handleClientCheck = (e: any, post: any) => {
  //   setIsChecked(e.target.checked);
  //   if (e.target.checked) {
  //     setPostEditId(post?.id);
  //     setValue("title", post?.title);
  //     setValue("body", post?.body);
  //     // setValue("isActive", post?.isActive);
  //   }
  // };

  const handleRowCheck = (post: any) => {
    if (postEditId === post.id) {
      setPostEditId(null);
      reset();
    } else {
      setPostEditId(post.id);
      setValue("title", post.title);
      setValue("body", post.body);
    }
  };

  const shortcutHandlers = {
    post_add: () => {
      setIsModalOpen(true);
      setPostEditId(null);
      // setIsChecked(false);
    },
    post_edit: () => {
      if (postEditId) {
        setIsModalOpen(true);
      }
    },
    // ... other handlers
  };

  const postKeys: any = shortcutKeys?.find(
    (key) => key?.id === "post"
  )?.subKeys;

  // Activate shortcuts
  useShortcuts(postKeys, shortcutHandlers);

  // useShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     if (event.altKey && event.code === "KeyA") {
  //       setIsModalOpen(true);
  //       setPostEditId(null);
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
        <Typography variant="h4">Posts</Typography>
        <Button
          id="post_add"
          variant="contained"
          color="success"
          onClick={openModal}
        >
          {/* Add Client */}
          <StyledShortcutKeyTitle
            title="Add Post"
            id="post_add"
            shortcutKeys={shortcutKeys}
          />
        </Button>
      </Stack>
      {posts?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Select</strong>
                </TableCell>
                <TableCell>
                  <strong>Title</strong>
                </TableCell>
                <TableCell>
                  <strong>Body</strong>
                </TableCell>
                <TableCell>
                  <strong>UserID</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? posts.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : posts
              ).map((post, index) => (
                <TableRow
                  aria-selected={postEditId === post.id}
                  key={index}
                  sx={{
                    backgroundColor:
                      postEditId === post.id ? `rgba(0, 0, 0, 0.1)` : "inherit",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                    transition: "background-color 0.25s ease",
                  }}
                  onClick={() => handleRowCheck(post)}
                >
                  <TableCell>
                    <Form.Check
                      type="checkbox"
                      // checked={field.value}
                      checked={postEditId === post.id}
                      onChange={() => handleRowCheck(post)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    {/* <Form.Check
                      disabled={isChecked && postEditId !== post?.id}
                      type="checkbox"
                      checked={isChecked && postEditId === post?.id}
                      onChange={(e) => handleClientCheck(e, post)}
                      // checked={field.value}
                    /> */}
                  </TableCell>
                  <TableCell>{post?.title}</TableCell>
                  <TableCell>{post?.body}</TableCell>
                  <TableCell>{post?.userId}</TableCell>
                  {/* <TableCell>{post.isActive ? "Yes" : "No"}</TableCell> */}
                  <TableCell align="right">
                    <Button
                      id="post_edit"
                      size="small"
                      variant="contained"
                      color="info"
                      onClick={(e) => {
                        e.stopPropagation();
                        editPost(post);
                      }}
                    >
                      <StyledShortcutKeyTitle
                        title="Edit"
                        id="post_edit"
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
                  count={posts?.length}
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
          No Posts Added!
        </Box>
      )}

      <PostModal
        postEditId={postEditId}
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        control={control}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Post;
