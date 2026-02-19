import "@/components/common/Avatar/style.scss"

type Props = {
    src?: string;
    alt?: string
}

const Avatar = (props: Props) => {
    return <span className='avatar-wrapper'>
        <img src={props.src} alt={props.alt} />
    </span>
}

export default Avatar