import UserNameForm from '@/components/UserNameForm'
import { authOptions, getAuthSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

interface pageProps {
  
}

const page= async ({}) => {

    const session = await getAuthSession()

    if(!session?.user) {
        redirect(authOptions.pages?.signIn || 'sign-in')
    }



    return (
        <div className='max-w-4xl mx-auto py-12'>
            <div className='grid items-start gap-8'>
                <h1 className='font-bold text-3xl md:texl-4xl pl-2 pb-4'>Settings</h1>
            </div>

            <div className='grid gap-10'>
                <UserNameForm user={{
                    id: session.user.id,
                    username: session.user.username || '',
                }}/>
            </div>
        </div>
    )
}

export default page
export const metadata = {
    title: 'Settings',
    description: 'Manage account and webiste settings.'
}