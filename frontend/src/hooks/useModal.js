import { useState, useEffect, useCallback } from "react";

const useModal = (onClose) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape" && isOpen) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen, closeModal]);

    return {
        isOpen,
        openModal,
        closeModal,
    };
};

export default useModal;
