interface HeaderProps {
    handleChangeText:()=>void;
    handleDarkMode:()=>void;
    handleOpenModal:(type: "contact" | "project")=>void;
    boxSvgTextLogo:string
    boxSvgTextProject:string
    boxSvgTextContact:string
}