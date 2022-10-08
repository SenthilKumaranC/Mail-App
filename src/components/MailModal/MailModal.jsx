import { Button, Modal, Paper, TextField } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import RichTextEditor from "react-rte";
import MultiMailInputs from "../MultiMailInputs/MultiMailInputs";
import "./MailModal.css";

const MailModal = (props) => {
  const { open, handleClose } = props;

  const [mails,setMails] = useState([]);

  const [subject,setSubject] = useState([]);

  const [richTextValue,setRichTextValue] = useState({value:RichTextEditor.createEmptyValue()});

  const onRichTextAreaChange = useCallback((value)=>{
    console.log(value)
    setRichTextValue({value})
  },[])

  const handleSelecetedTags = useCallback((items)=> {
    setMails(items);
  },[]);


  const saveSubject = useCallback((event)=>{
    setSubject(event.target.value)
  },[])

  const onSubmit = useCallback(()=>{
       const mailObject = {
        mails,
        subject,
        richTextValue : richTextValue.value.toString("html")
       }
       console.log(mailObject);
  },[mails, richTextValue.value, subject])
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="MailModal"
      >
        <Paper className="MailPaper">
          <div>Compose mail</div>
          <MultiMailInputs
            selectedTags={handleSelecetedTags}
            fullWidth
            variant="outlined"
            id="tags"
            name="tags"
            placeholder="Add Mail"
            label="Mails"
          ></MultiMailInputs>
          <TextField placeholder="Enter Mail Subject" value={subject} onChange={saveSubject}></TextField>
          <RichTextEditor
        value={richTextValue.value}
        className="RichTextEditor"
        onChange={onRichTextAreaChange}
      />
      <Button variant="contained" size="small" onClick={onSubmit}>Send</Button>
        </Paper>
      </Modal>
    </>
  );
};

export default MailModal;
