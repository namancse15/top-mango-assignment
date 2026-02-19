import PostCard from "@/components/FeedBoard/PostCard"
import Avatar from '@/components/common/Avatar'
import user_1 from '@/assets/images/user_1.jpg'
import samplePostImage from '@/assets/images/sample-post-image.jpg'

const FeedList = () => {
    return (
        <div className="feed-list">
            <PostCard 
                userName={'Ashraf Idrishi'}
                avatarImage={
                    <Avatar 
                        src={user_1}
                        alt="user_1"
                        height={48}
                        width={48}
                    />
                }
                caption={"Today’s challenge workout completed—feeling stronger already"}
                attachment={<img src={samplePostImage} />}
                reactionsCount={18}
                uniqueEmojis={['U+1F60D', 'U+1F64F']}
                commentsCount={10}
                createdAt={'2026-02-15T16:45:00Z'}
                isNewPost
            />
            <PostCard 
                userName={'Ashraf Idrishi'}
                avatarImage={
                    <Avatar 
                        src={user_1}
                        alt="user_1"
                        height={48}
                        width={48}
                    />
                }
                caption={"Today’s challenge workout completed—feeling stronger already"}
                attachment={<img src={samplePostImage} />}
                reactionsCount={18}
                uniqueEmojis={['U+1F60D', 'U+1F64F']}
                commentsCount={10}
                createdAt={'2026-01-15T10:30:00Z'}
            />
        </div>
    )
}

export default FeedList