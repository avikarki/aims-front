import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetAllPostsQuery } from "../../features/api/apiSlice";
import { shortcutKeys } from "../../assets/shortcutKeys";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import StyledShortcutKeyTitle from "../../components/common/StyledShortcutKeyTitle";
import DataTable from "../../components/ui/DataTable";
import PostModal from "./PostModal";
import ReusableButton from "../../components/common/ReusableButton";

interface FormData {
  title: string;
  body: string;
}

const Post = () => {
  const { control, handleSubmit, setValue, reset } = useForm<FormData>({
    defaultValues: {
      title: "",
      body: "",
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postEditId, setPostEditId] = useState<number | null>(null);

  const columns = [
    {
      key: "check",
      label: "Select",
      render: (row: any) => {
        return (
          <input
            type="checkbox"
            checked={postEditId === row.id}
            onChange={() => handleRowCheck(row)}
            onClick={(e) => e.stopPropagation()}
            className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
          />
        );
      },
    },
    { key: "userId", label: "UserID" },
    { key: "title", label: "Title" },
    {
      key: "views",
      label: "Views",
    },
    {
      key: "action",
      label: "Action",
      render: (row: any) => (
        <ReusableButton
          id="post_edit"
          size="small"
          variant="outline"
          onClick={() => {
            // e.stopPropagation();
            editPost(row);
          }}
        >
          <StyledShortcutKeyTitle
            title="Edit"
            id="post_edit"
            shortcutKeys={shortcutKeys}
          />
        </ReusableButton>
      ),
    },
  ];

  const { data: posts, isLoading } = useGetAllPostsQuery("");

  const openModal = () => {
    setIsModalOpen(true);
    setPostEditId(null);
    reset();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPostEditId(null);
    reset();
  };

  const editPost = (post: any) => {
    setIsModalOpen(true);
    setPostEditId(post?.id);
    setValue("title", post?.title);
    setValue("body", post?.body);
  };

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
      reset();
    },
    post_edit: () => {
      if (postEditId) {
        setIsModalOpen(true);
      }
    },
  };

  const postKeys: any = shortcutKeys?.find(
    (key) => key?.id === "post"
  )?.subKeys;

  // Activate shortcuts
  useShortcuts(postKeys, shortcutHandlers);

  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        <ReusableButton id="post_add" onClick={openModal}>
          <StyledShortcutKeyTitle
            title="Add Post"
            id="post_add"
            shortcutKeys={shortcutKeys}
          />
        </ReusableButton>
      </div>

      <div>
        <DataTable
          columns={columns}
          data={posts?.posts}
          isLoading={isLoading}
        />
      </div>

      <PostModal
        postEditId={postEditId}
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        control={control}
        handleSubmit={handleSubmit}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Post;
