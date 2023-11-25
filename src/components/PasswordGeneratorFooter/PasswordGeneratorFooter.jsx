import s from './style.module.css'
import copyPasteIcon from "../../assets/copy-paste.svg"

export function PasswordGeneratorFooter () {
    return <div className={s.root}>
        <div> Super password </div>
        <img className={s.icon} src={copyPasteIcon} alt='Copy Paste Icon'/>
        
    </div>
}