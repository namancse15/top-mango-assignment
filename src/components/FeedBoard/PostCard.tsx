import MenuSvgIcon from '@/components/common/InlineSvgIcons/MenuSvgIcon'
import { JSX } from 'react';
import BadgeWithCount from '../BadgeWithCount';

type Props = {
    userName: string;
    avatarImage: JSX.Element;
    caption: string;
    attachment: JSX.Element;
    reactionsCount: number;
    uniqueEmojis: Array<string>;
    commentsCount: number;
    createdAt: string;
}

const PostCard = (props: Props) => {
    const {
        userName,
        avatarImage,
        caption,
        attachment,
        reactionsCount,
        uniqueEmojis,
        commentsCount,
        createdAt,
    } = props;
    return (
        <div className="post-card">
            <div className="head">
                <span className="avatar-container">
                    {avatarImage}
                </span>
                <div className="details-container">
                    <div className="user-name">{userName}</div>
                    <div className="timestamp">{createdAt}</div>
                </div>
                <span className="options-icon-container">
                    <MenuSvgIcon />
                </span>
            </div>
            <div className="caption">
                {caption}
            </div>
            <div className="attachment">
                {attachment}
            </div>
            <div className="actions-container">
                <span className='section'>
                    <span>
                        <BadgeWithCount
                            icon={<>{Number(uniqueEmojis[0])}</>}
                            count={reactionsCount}
                        />
                    </span>
                    <span>Reaction Button</span>
                    <span>Add comment</span>
                </span>
                <span className='section'>
                    {commentsCount}
                </span>
            </div>
        </div>
    )
}

export default PostCard