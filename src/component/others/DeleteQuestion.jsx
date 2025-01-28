import React from 'react'

import DeleteIcon from "@mui/icons-material/Delete";
const DeleteQuestion = ({data,setAdminQuestionCollection,adminQuestionCollection}) => {
    const handleDelete = (id) => {
        const updatedQuestions = adminQuestionCollection.filter(
          (item) => item.id !== id
        );
        setAdminQuestionCollection(updatedQuestions);
      };
  return (
    <DeleteIcon
        onClick={() => handleDelete(data.id)}
        sx={{ color: "#757575", cursor: "pointer" }}
      />
  )
}

export default DeleteQuestion
