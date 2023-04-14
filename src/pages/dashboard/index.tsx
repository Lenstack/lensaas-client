
import {GetServerSideProps} from "next";
import {getSession} from "@/utils";

export default function DashboardPage() {
    return (
        <main className="min-h-screen max-w-6xl mx-auto p-6">
            dashboard
        </main>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const {req, res} = context;
    const session = await getSession({req});

    console.log(session)

    if (!session) {
        return {
            redirect: {
                destination: '/authentication',
                permanent: false,
            },
        }
    }

    return {
        props: {}
    }
}