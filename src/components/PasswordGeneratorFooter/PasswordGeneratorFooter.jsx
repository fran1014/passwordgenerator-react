import s from './style.module.css'
import copyPasteIcon from "../../assets/copy-paste.svg"

export function PasswordGeneratorFooter (props) {
    return (
    <div className={s.root}>
        <div> {props.password} </div>
        <img className={s.icon} src={copyPasteIcon} alt='Copy Paste Icon'/>  
        
    </div> )
}