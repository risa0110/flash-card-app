import { createContext, useState } from "react";
const MenuContext = createContext();

export function MenuProvider({children}){
    const [showCreateAccount, setShowCreateAccount] = useState(false); //for showing CreateAccount/login section(the state of these section)
    const[showMenu, setShowMenu]=useState(false); //for showing Header-menu
    const [mode, setMode] = useState("login");//checking this section is for createing Account or Login(the mode checker)
    const openForm = (formMode)=>{ //opening the login Form
        setMode(formMode);
        setShowCreateAccount(true);
    };
    const closeMenu = ()=> setShowCreateAccount(false);//for closing the login/createAccount-sec
    const btnShowMenu = () => setShowMenu(!showMenu);//for showing the header-menu section


    return(
        <MenuContext.Provider value={{showCreateAccount,showMenu,setShowMenu,mode,openForm,closeMenu,btnShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext;


