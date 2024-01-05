export interface HeaderContextProps {
    boxSvgTextLogo: string;
    boxSvgTextProject: string;
    boxSvgTextContact: string;
    handleChangeText: () => void;
    handleDarkMode: () => void;
    handleOpenModal: (type: "contact" | "project") => void;
  }