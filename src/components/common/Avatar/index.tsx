import "@/components/common/Avatar/style.scss"

type Props = {
    src?: string;
    alt?: string
    height?: number;
    width?: number;
}

const Avatar = (props: Props) => {
    return <div className='avatar-wrapper'>
        <img 
            src={props.src}
            alt={props.alt} 
            height={props.height}
            width={props.width}
        />
    </div>
}

export default Avatar