import style from './Card.module.css'
import Button from './../../buttons/button'

function Card() {
    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src="../../../public/Uitachi5.png" alt="" />
            </figure>
            <div className={style.body}>
                <h3>
                    Titolo del Post
                </h3>
                <p className={style.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum ducimus necessitatibus esse placeat tempore facilis nam repellat ea. Voluptate quod id voluptatum. Omnis nisi voluptatem distinctio odio aliquam quas. Voluptatum ipsa deleniti dignissimos commodi! Cumque esse perferendis eaque quod?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, delectus.
                </p>
                <Button />
            </div>
        </div>
    )
}

export default Card