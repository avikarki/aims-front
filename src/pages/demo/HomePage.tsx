import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, Container, Row, Col, Form } from "react-bootstrap";
import TestModal1 from "./TestModal1";
import TestModal3 from "./TestModal3";
import { shortcutKeys } from "../../shortcutKeys";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import StyledShortcutKeyTitle from "../../components/StyledShortcutKeyTitle";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  // const usableMenuKeys: string[] = shortcutKeys?.homepage?.menus?.map(
  //   (menu: MenuProps) => menu?.key
  // );
  // const usablePopupOpenKeys = shortcutKeys?.homepage?.popupKeys?.map(
  //   (popup: PopupKeysProps) => popup?.openKey
  // );

  // Get the modal component based on the pressed key
  // const getModalComponent = () => {
  //   const popup = shortcutKeys?.homepage?.popupKeys?.find(
  //     (p) => p.openKey === openPopupKey
  //   );
  //   return popup?.component || null;
  // };

  // const ModalComponent = getModalComponent();

  const openModal = () => {
    setIsModalOpen(true);
    // setOpenPopupKey(key);
  };

  const handleModal3 = () => {
    setOpenModal3(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOpenModal3(false);
  };

  // Performs the functions when pressing keyboard keys
  // useShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     const altKey = event.altKey;
  //     const ctrlKey = event.ctrlKey;
  //     const pressedKey = event.code;
  //     const shortcutObj: any = shortcutKeys?.find((m) => {
  //       const keyToBeUsed =
  //         m?.ctrlKey && m?.altKey
  //           ? altKey && ctrlKey && pressedKey === m?.key
  //           : m?.altKey
  //           ? altKey && pressedKey === m?.key
  //           : m?.ctrlKey
  //           ? ctrlKey && pressedKey === m?.key
  //           : pressedKey === m?.key;

  //       if (keyToBeUsed) return m?.id;
  //     });
  //     const element = document.getElementById(shortcutObj?.id);
  //     console.log("Key Pressed: ", pressedKey);
  //     console.log("Shortcut Object: ", shortcutObj);
  //     console.log("Clicked element", element?.tagName);
  //     const isSearchFocused = document.activeElement === searchRef.current;

  //     if (element?.tagName === "INPUT") {
  //       element.focus();
  //     } else if (!isModalOpen && !isSearchFocused) {
  //       element?.click();
  //     }
  //   },
  //   [isModalOpen]
  // );

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

  return (
    <Container className="mt-5">
      <Row className="justify-content-end mx-0">
        <Form.Control
          ref={searchRef}
          id="search"
          type="text"
          placeholder="Search..."
          className="w-50"
        />
      </Row>
      <Row>
        <Col>
          <h1>Home Page</h1>
          <ListGroup>
            {menus.map(({ id, title, path }) => {
              return (
                <ListGroup.Item key={id} action as={Link} to={path} id={id}>
                  <StyledShortcutKeyTitle
                    title={title}
                    id={id}
                    shortcutKeys={shortcutKeys}
                  />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <p className="mt-3">
            Please use the mentioned keys for the respective pages navigation
            above.
          </p>
          <Button id="modal1" variant="secondary" onClick={openModal}>
            <StyledShortcutKeyTitle
              title="Modal 1"
              id="modal1"
              shortcutKeys={shortcutKeys}
            />
          </Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            eius deleniti sequi non soluta beatae expedita molestiae doloribus
            accusamus? Illum eligendi officiis nesciunt aspernatur cupiditate
            numquam, molestias suscipit labore doloremque sapiente? Nulla
            suscipit natus doloremque officiis quis eos. Assumenda fuga cum ad
            officia laboriosam. A ullam unde sunt nisi molestias maiores?
            Temporibus, consequatur veniam molestiae fugit recusandae aliquam
            magni ex assumenda nobis, ullam, saepe inventore dolores
            necessitatibus eaque explicabo. Explicabo veritatis nihil voluptatum
            nisi architecto commodi in, fugit consectetur expedita aut et
            tempora deleniti non totam ratione delectus quis cupiditate, animi
            soluta ullam nam ipsum molestiae? Molestiae placeat facere alias
            eos! Ullam amet magni, quibusdam vero assumenda iure facere quis
            dolores laudantium et. Magni, autem distinctio. Totam enim veritatis
            facere quo quidem esse qui distinctio maiores accusamus tempore
            molestias officiis fuga tempora voluptas tenetur repudiandae, earum
            magnam. Consequuntur sunt quas itaque porro cupiditate, distinctio
            maxime fugiat quasi odio facere quos blanditiis cum asperiores
            dolores modi repudiandae dicta voluptate magni similique corporis id
            quam delectus. Officiis rerum nobis facere perferendis id, aliquid
            esse accusamus minima, quibusdam corporis eligendi eum sint eveniet
            reiciendis voluptas a? Reprehenderit, molestiae voluptatem dolorum
            provident laudantium illum asperiores et ducimus autem
            necessitatibus temporibus nihil tenetur qui libero.
          </p>
          <Button id="modal3" variant="secondary" onClick={handleModal3}>
            <StyledShortcutKeyTitle
              title="Modal 3"
              id="modal3"
              shortcutKeys={shortcutKeys}
            />
          </Button>
          <TestModal1
            isModalOpen={isModalOpen}
            onClose={handleCloseModal}
            // openKey={openPopupKey}
            // shortcutKeys={shortcutKeys}
          />
          <TestModal3
            isModalOpen={openModal3}
            onClose={handleCloseModal}
            // openKey={openPopupKey}
            // shortcutKeys={shortcutKeys}
          />
          {/* <Stack direction="horizontal" gap={2}>
            {shortcutKeys?.homepage?.popupKeys?.map(
              (popup: PopupKeysProps, index) => (
                <Button
                  key={popup?.openKey}
                  variant="secondary"
                  onClick={() => openModal(popup?.openKey)}
                >
                  Modal {index + 1} <span>({popup?.openKey})</span>
                </Button>
              )
            )}
          </Stack> */}

          {/* Render the correct modal based on the pressed key */}
          {/* {ModalComponent && (
            <ModalComponent
              isModalOpen={isModalOpen}
              onClose={handleCloseModal}
              openKey={openPopupKey}
              shortcutKeys={shortcutKeys}
            />
          )} */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
