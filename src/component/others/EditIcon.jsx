import React from "react";
import EditAdminQuestion from "./EditAdminQuestion";
import Modal from "./Modal";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
const EditIcon = ({data,adminQuestionCollection,setAdminQuestionCollection}) => {
    console.log(adminQuestionCollection)
    const [modal, setModal] = useState(false);
  return (
    <>
       <CreateIcon
        onClick={() => setModal(true)}
        sx={{ color: "#757575", cursor: "pointer" }}
      />
   {   modal && (
      <Modal setModal={setModal} modal={modal}>
        <EditAdminQuestion
          data={data}
          adminQuestionCollection={adminQuestionCollection}
          setAdminQuestionCollection={setAdminQuestionCollection}
          setModal={setModal}
        />
      </Modal>
      )}
    </>
  );
};

export default EditIcon;
