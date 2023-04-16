import { useRouter } from 'next/router';

// useRouter access the current route
//  and its dynamic Parameters
function User(props: {}) {
    const router = useRouter();
    const { userId } = router.query;
    // Destructuring the query of the
    // router to extract userId
    //console.log(userId)
    return (
        <div>
            <h1>Geek {userId}</h1>
            <p>Geek {userId} is Viewing...</p>
        </div>
    );
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { userId: '1' } },
            { params: { userId: '2' } },
            { params: { userId: '3' } },
        ],
        fallback: false
        // If the page with the userId is 
        // not found, returns 404 page
    };
}
export async function getStaticProps({ params }: { params: { UserId: string; }; }) {
    const userId = params;
    const User = {
        id: userId,
        title: `Geek ${userId}`,
        content: `Geek ${userId} is Viewing...!`
    };


    return {
        props: {
            User
        }
    };
}

export default User;