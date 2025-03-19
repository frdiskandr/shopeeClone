"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        if (window.innerWidth < 600) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, []);

    return (
        <div className="text-black w-screen h-screen z-10 bg-black opacity-90 fixed">
            <Button onClick={handleOpen} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className="text-black"
                    >
                        <span className="font-bold">
                            please use Desktop Version <br />
                        </span>
                        Website is under construction in Mobile Version. <br />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
