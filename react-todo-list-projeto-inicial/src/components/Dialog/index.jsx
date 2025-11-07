import { IconClose } from "../icons";
import "./dialog.style.css"
import { useEffect, useRef } from "react";

export function Dialog({ isOpen, onClose, children }) {

    const dialogRef = useRef(null)


    // responsavel por abrir e fechar a modal(dialog)
    useEffect(() => {
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }

    }, [isOpen])

    // responsavel por permitir abrir a modal após fechar ela com esc
    useEffect (() => {
        const dialog = dialogRef.current
        dialog?.addEventListener('close', onClose)
        return () => {
            dialog?.removeEventListener('close', onClose)
        }

    },[onClose])

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog className="dialog" ref={dialogRef}>
                <div className="btn-close-wrapper">
                    <button
                        autoFocus
                        onClick={onClose}
                        className="btn-close"
                    >
                        <IconClose />
                    </button>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </dialog>
        </>
    )
}