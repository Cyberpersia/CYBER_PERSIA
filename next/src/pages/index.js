import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import GuestLayout from "@/components/Layouts/GuestLayout";
import Hero from "@/components/Hero";
import About from "@/components/About/AboutGrid";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <GuestLayout>
            <Head>
                <title>Cyber Persia</title>
            </Head>

            <Hero />
            <About />
        </GuestLayout>
    )
}
