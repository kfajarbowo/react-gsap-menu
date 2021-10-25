import React,{useState, useEffect} from 'react'
import { withRouter, Link} from 'react-router-dom';
import Menu from './Menu'

function Header({history}) {
    //state untuk menu button
    const [state, setState] = useState({
        initial:false,
        clicked: null,
        menuName: "Menu"
    });

    //state untuk disabled menu
    const [disabled, setDisabled] =useState(false);

    //use effect untuk ganti page
    useEffect (()=>{
        history.listen(()=>{
            setState({clicked: false, menuName: "Menu"})
        });
    });
    
    const handleMenu = () =>{
        disableMenu();
        if(state.initial === false){
            setState({
                initial:null,
                clicked: true,
                menuName: "Close"
            })
        } else if(state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            })
        }
        else if(state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
        }
    };

    //determine if our menu button should be disabled
    const disableMenu= () =>{
        setDisabled(!disabled);
        setTimeout(()=>{
            setDisabled(false);
        }, 1200);
    };
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link className="swipe" to='/'>NIHONGO.</Link>
                        </div>
                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu}>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
            <Menu state={state}/>
        </header>
    )
}

export default withRouter(Header);
