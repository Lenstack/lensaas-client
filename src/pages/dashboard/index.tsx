import {GetServerSideProps} from "next";
import {getSession} from "@/utils";
import {LayoutDashboard} from "@/layouts";

export default function DashboardPage() {
    return (
        <LayoutDashboard>
            <h1>Dashboard</h1>
        </LayoutDashboard>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
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