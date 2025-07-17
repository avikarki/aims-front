import { useRef, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { clearCredentials } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { useGetCurrentAuthUserQuery } from "../../features/api/apiSlice";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../assets/shortcutKeys";
import ReusableButton from "../../components/common/ReusableButton";
import StyledShortcutKeyTitle from "../../components/common/StyledShortcutKeyTitle";
import DialogBox from "../../components/utility/DialogBox";
import Navbar from "../../components/ui/navbar/Navbar";

type MenuProps = {
  id: string;
  title: string;
  path: string;
};

const menus: MenuProps[] = [
  {
    id: "post",
    title: "Posts",
    path: "/demo/post",
  },
  {
    id: "toggleModal",
    title: "Toggle Modal",
    path: "/demo/toggleModal",
  },
  {
    id: "calculator",
    title: "Calculator page",
    path: "/demo/calculator",
  },
  {
    id: "datePicker",
    title: "Nepali English DatePicker Page",
    path: "/demo/datepicker",
  },
  {
    id: "emiCalculator",
    title: "EMI Calculator Page",
    path: "/demo/emicalculator",
  },
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openModal3, setOpenModal3] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
    // setOpenPopupKey(key);
  };

  const handleModal3 = () => {
    setOpenModal3(true);
  };

  const handleLogout = () => {
    dispatch(clearCredentials());
    toast.success("You logged out successfully!");
    navigate("/login");
  };

  const shortcutHandlers = {
    search: () =>
      (document.getElementById("search") as HTMLInputElement).focus(),
    post: () => (document.getElementById("post") as HTMLElement).click(),
    toggleModal: () =>
      (document.getElementById("toggleModal") as HTMLElement).click(),
    calculator: () =>
      (document.getElementById("calculator") as HTMLElement).click(),
    datePicker: () =>
      (document.getElementById("datePicker") as HTMLElement).click(),
    emiCalculator: () =>
      (document.getElementById("emiCalculator") as HTMLElement).click(),
    modal1: () => (document.getElementById("modal1") as HTMLElement).click(),
    modal3: () => (document.getElementById("modal3") as HTMLElement).click(),
    // ... other handlers
  };

  // Activate shortcuts
  useShortcuts(shortcutKeys, shortcutHandlers);

  const { data: user } = useGetCurrentAuthUserQuery();

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-30">
        <div className="container mx-auto mb-5">
          <div className="flex justify-end">
            <input
              ref={searchRef}
              id="search"
              type="text"
              placeholder="Search..."
              className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 outline-gray-300 focus:outline-indigo-600"
            />
          </div>
          <div className="flex items-center justify-between mt-5">
            <h3>
              Hello, {user?.firstName} {user?.lastName}
            </h3>
            <ReusableButton variant="primary" onClick={handleLogout}>
              Logout
            </ReusableButton>
          </div>
          <div className="mt-5">
            <ul className="list-none p-0">
              {menus.map(({ id, title, path }) => (
                <li key={id} className="mb-2">
                  <ReusableButton
                    variant="secondary"
                    id={id}
                    onClick={() => navigate(path)}
                  >
                    <StyledShortcutKeyTitle
                      title={title}
                      id={id}
                      shortcutKeys={shortcutKeys}
                    />
                  </ReusableButton>
                </li>
              ))}
            </ul>

            <p className="mt-3">
              Please use the mentioned keys for the respective pages navigation
              above.
            </p>

            <ReusableButton id="modal1" variant="secondary" onClick={openModal}>
              <StyledShortcutKeyTitle
                title="Modal 1"
                id="modal1"
                shortcutKeys={shortcutKeys}
              />
            </ReusableButton>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              eius deleniti sequi non soluta beatae expedita molestiae doloribus
              accusamus? Illum eligendi officiis nesciunt aspernatur cupiditate
              numquam, molestias suscipit labore doloremque sapiente? Nulla
              suscipit natus doloremque officiis quis eos. Assumenda fuga cum ad
              officia laboriosam. A ullam unde sunt nisi molestias maiores?
              Temporibus, consequatur veniam molestiae fugit recusandae aliquam
              magni ex assumenda nobis, ullam, saepe inventore dolores
              necessitatibus eaque explicabo. Explicabo veritatis nihil
              voluptatum nisi architecto commodi in, fugit consectetur expedita
              aut et tempora deleniti non totam ratione delectus quis
              cupiditate, animi soluta ullam nam ipsum molestiae? Molestiae
              placeat facere alias eos! Ullam amet magni, quibusdam vero
              assumenda iure facere quis dolores laudantium et. Magni, autem
              distinctio. Totam enim veritatis facere quo quidem esse qui
              distinctio maiores accusamus tempore molestias officiis fuga
              tempora voluptas tenetur repudiandae, earum magnam. Consequuntur
              sunt quas itaque porro cupiditate, distinctio maxime fugiat quasi
              odio facere quos blanditiis cum asperiores dolores modi
              repudiandae dicta voluptate magni similique corporis id quam
              delectus. Officiis rerum nobis facere perferendis id, aliquid esse
              accusamus minima, quibusdam corporis eligendi eum sint eveniet
              reiciendis voluptas a? Reprehenderit, molestiae voluptatem dolorum
              provident laudantium illum asperiores et ducimus autem
              necessitatibus temporibus nihil tenetur qui libero.
            </p>
            <ReusableButton
              id="modal3"
              variant="secondary"
              onClick={handleModal3}
            >
              <StyledShortcutKeyTitle
                title="Modal 3"
                id="modal3"
                shortcutKeys={shortcutKeys}
              />
            </ReusableButton>
            <DialogBox
              title="Modal 1"
              message="Are you sure you want to delete this item? This action cannot be undone."
              confirmText="Delete"
              onConfirm={() => console.log("Item deleted")}
              onCancel={() => console.log("Deletion cancelled")}
              open={isModalOpen}
              setOpen={setIsModalOpen}
            >
              <p className="text-sm text-gray-500">
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </DialogBox>
            <DialogBox
              title="Modal 3"
              message="Are you sure you want to delete this item? This action cannot be undone."
              confirmText="Delete"
              onConfirm={() => console.log("Item deleted")}
              onCancel={() => console.log("Deletion cancelled")}
              open={openModal3}
              setOpen={setOpenModal3}
            >
              <p className="text-sm text-gray-500">
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </DialogBox>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              pariatur iusto quisquam incidunt possimus error provident quod
              odit culpa veritatis beatae, cum exercitationem unde ab
              reprehenderit doloremque nisi dicta magnam non, delectus tenetur
              asperiores aperiam? Dolorum nesciunt quos modi molestias,
              doloremque dicta cum, corporis facere id amet autem dolore atque
              animi eos fugit labore eveniet minus dolorem temporibus odio
              illum! Dicta maiores, aut distinctio perspiciatis itaque
              voluptatibus iste est atque magnam voluptate? Sed mollitia dolorem
              fuga perspiciatis soluta at eum, temporibus, accusantium
              laudantium sunt error ullam neque dolorum vero, dicta doloribus
              quo possimus repellat dolore deleniti sequi atque non. Deserunt
              modi natus nostrum. Magnam labore laudantium ipsam explicabo
              sequi, minus libero aspernatur ipsum quam blanditiis nostrum
              maxime eligendi aperiam distinctio consequuntur aliquam impedit
              voluptatem a, quia alias aliquid? Qui nemo cumque reprehenderit
              iure eligendi, vero quisquam quia aliquid? Ex totam eum fugit,
              deserunt sit veritatis labore sunt sint asperiores aliquam odio
              vero odit expedita repudiandae nobis dolor autem voluptas vitae
              maxime natus deleniti explicabo adipisci blanditiis? Soluta iste
              iusto velit, repudiandae necessitatibus modi quisquam similique
              perferendis suscipit quis, ab impedit temporibus pariatur
              asperiores recusandae praesentium culpa fugit totam obcaecati.
              Explicabo neque facilis ipsum adipisci est earum doloremque id
              ullam dolor nostrum, vitae enim incidunt laudantium perferendis
              ducimus aliquid officia esse, corrupti ad reiciendis libero quis.
              In dolores nostrum eius quis eos laboriosam rerum nam. Blanditiis
              dignissimos ratione sapiente error earum, aperiam at repudiandae
              iste consequatur delectus, totam ullam perferendis asperiores
              aliquam itaque architecto. Repudiandae, odit tempore! Officia
              placeat officiis a quae recusandae dignissimos eos et assumenda
              exercitationem fugit soluta praesentium earum possimus id, itaque
              numquam nemo delectus libero quas voluptatum expedita aliquid.
              Corporis ullam quae sunt nostrum sint architecto, adipisci aperiam
              ex ut earum temporibus quidem corrupti totam natus commodi
              voluptatibus illum? Ratione eveniet corrupti perferendis
              consequatur dolore illum incidunt facere doloremque fuga
              architecto! Nostrum sit molestias optio, fuga laboriosam autem
              corporis ipsum a aliquam aspernatur itaque vitae consequuntur eos
              laudantium consectetur fugit nam accusamus fugiat dolore. Odio
              amet unde explicabo nemo reprehenderit. Harum vitae earum ab
              dolorem impedit ad magni voluptatibus ea quo debitis sed, sint at
              non voluptates, officiis aperiam et excepturi quasi. Ea veniam
              iure accusantium unde eaque totam illo modi inventore est
              distinctio incidunt cum nihil eos maxime, libero similique?
              Facilis quaerat mollitia accusantium aliquam! Eaque dolores autem
              animi ipsum debitis, a alias sit unde? Autem dolores rem est
              omnis, sint eaque optio fuga, libero hic quia qui voluptatum
              consequatur suscipit non odio cumque voluptates! Eos, ipsam
              reprehenderit aliquid dicta voluptatibus velit nam explicabo
              aliquam totam itaque culpa aspernatur! Repellat, perferendis
              beatae temporibus reprehenderit porro quidem voluptatum cum modi
              obcaecati. Sapiente, aspernatur in! Necessitatibus ducimus,
              voluptas quos illum mollitia dolorum minus impedit temporibus
              perspiciatis minima quas quam dolor nemo magni reprehenderit autem
              optio natus similique ipsum sequi inventore voluptate. Optio minus
              quam ullam reiciendis reprehenderit, quaerat dolores animi
              eligendi cum voluptatibus molestiae quisquam voluptate. Numquam
              quam impedit porro repellat? Error quia ratione tenetur tempora
              illum facere vitae, cumque voluptas voluptate totam, illo quidem
              eveniet. Et, nam?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
