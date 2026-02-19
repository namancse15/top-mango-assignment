import PostCard from "@/components/FeedBoard/PostCard"
import Avatar from '@/components/common/Avatar'
import user_1 from '@/assets/images/user_1.jpg'

const FeedList = () => {
    return <div className="feed-list">
        <PostCard 
            userName={'Ashraf Idrishi'}
            avatarImage={
                <Avatar 
                    src={user_1} alt="user_1"
                />
            }
            caption={"Today’s challenge workout completed—feeling stronger already"}
            attachment={<img src="" />}
            reactionsCount={18}
            uniqueEmojis={['U+1F60D', 'U+1F64F']}
            commentsCount={10}
            createdAt={'2026-02-18'}
        />
    </div>
}

export default FeedList