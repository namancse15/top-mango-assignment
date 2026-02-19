import { JSX } from 'react';
import MenuSvgIcon from '@/components/common/InlineSvgIcons/MenuSvgIcon'
import SmileySvgIcon from '@/components/common/InlineSvgIcons/SmileySvgIcon'
import ChatCircleSvgIcon from '@/components/common/InlineSvgIcons/ChatCircleSvgIcon'
import Badge from '@/components/common/Badge'
import BadgeWithCount from '@/components/BadgeWithCount';

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

const renderEmoji = (code: string) => {
    return code ? String.fromCodePoint(parseInt(code.replace(/^U\+/i, ''), 16)) : ''
}

const PostCard = (props: Props) => {
    const {
        userName,
        avatarImage,
        caption,
        attachment,
        reactionsCount,
        uniqueEmojis,
        commentsCount = 0,
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
                            icon={
                                <>
                                    {uniqueEmojis.map((code) => (
                                        <span>{renderEmoji(code)}</span>
                                    ))}
                                </>
                            }
                            count={reactionsCount}
                        />
                    </span>
                    <span><Badge><SmileySvgIcon height='20px' width='20px' /></Badge></span>
                    <span><Badge><ChatCircleSvgIcon height='20px' width='20px' /></Badge></span>
                </span>
                <span className='section right'>
                    {commentsCount > 1 ? `${commentsCount} Comments` : `${commentsCount} Comment`}
                </span>
            </div>
        </div>
    )
}

export default PostCard