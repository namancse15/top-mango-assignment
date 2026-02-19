import { JSX } from 'react';
import MenuSvgIcon from '@/components/common/InlineSvgIcons/MenuSvgIcon'
import SmileySvgIcon from '@/components/common/InlineSvgIcons/SmileySvgIcon'
import ChatCircleSvgIcon from '@/components/common/InlineSvgIcons/ChatCircleSvgIcon'
import IconBadge from '@/components/common/IconBadge'
import BadgeWithCount from '@/components/BadgeWithCount'
import dayjs from 'dayjs';

type Props = {
    userName: string;
    avatarImage: JSX.Element;
    caption: string;
    attachment: JSX.Element;
    reactionsCount: number;
    uniqueEmojis: Array<string>;
    commentsCount: number;
    createdAt: string;
    isNewPost?: boolean
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
        isNewPost = false,
    } = props;

    const renderTimeGap = (timeStamp: string) => {
        if(dayjs(timeStamp).isValid()) {
            const diffDays = dayjs().diff(dayjs(createdAt), 'days');
            return diffDays
        }
        return '--'
    }

    const content = (
        <>
            <div className="post-card">
                <div className="head">
                    <span className="avatar-container">
                        {avatarImage}
                    </span>
                    <div className="details-container">
                        <div className="user-name">{userName}</div>
                        <div className="timestamp">{`${renderTimeGap(createdAt)}d`}</div>
                    </div>
                    <span className="options-icon-container">
                        <MenuSvgIcon className='options-icon' />
                    </span>
                </div>
                <div className="caption">
                    {caption}
                </div>
                <div className="attachment">
                    {attachment}
                </div>
                <div className="actions-container">
                    <div className='section'>
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
                        <IconBadge><SmileySvgIcon height='20px' width='20px' /></IconBadge>
                        <IconBadge><ChatCircleSvgIcon height='20px' width='20px' /></IconBadge>
                    </div>
                    <div className='section right'>
                        {commentsCount > 1 ? `${commentsCount} Comments` : `${commentsCount} Comment`}
                    </div>
                </div>
            </div>
        </>
    )

    
    if (isNewPost) {
        return (
            <div className='new-post-container'>
                {/* <img src={confetti} alt="confetti" /> */}
                <span className='label'>Your Submission</span>
                {content}
            </div>
        )
    }

    return content
        
    
}

export default PostCard