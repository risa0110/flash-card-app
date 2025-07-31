import { createContext, useState } from "react";
const MenuContext = createContext();

export function MenuProvider({children}){
    const [showCreateAccount, setShowCreateAccount] = useState(false); //Login/Signin用のセクション表示用
    const[showMenu, setShowMenu]=useState(false); //Header-menu表示用
    const [mode, setMode] = useState("login");//login-sec表示なのかsignin-sec表示なのかの判別用
    const openForm = (formMode)=>{ //opening the createAccount Form
        setMode(formMode);
        setShowCreateAccount(true);
    };
    const closeMenu = ()=> setShowCreateAccount(false);//login/signin-secでの✖ボタンを押したときの閉じる処理用
    const btnShowMenu = () => setShowMenu(!showMenu);//ログイン時にheaderのユーザーアイコンを押したときにshowmenuをtrueにして表示する用


    return(
        <MenuContext.Provider value={{showCreateAccount,showMenu,setShowMenu,mode,openForm,closeMenu,btnShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext;


