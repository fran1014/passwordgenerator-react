import s from './style.module.css'

export function PasswordGeneratorBody () {
    return <form className={s.root}>
        <div className={s.grid_container}> 
        <div className={s.grid_item}>
        SIZE
        <select defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
        </select>
        </div>
        <div className={s.grid_item}>
            Uppercase
            <input type='checkbox'defaultChecked/>
        </div>
        <div className={s.grid_item}>
            Numbers
            <input type='checkbox'defaultChecked/>
        </div>
        <div className={s.grid_item}>
            Specials
            <input type='checkbox' defaultChecked/>
        </div>
        </div>
        <button className={s.btn_generate}> GENERATE </button>
    </form>

}