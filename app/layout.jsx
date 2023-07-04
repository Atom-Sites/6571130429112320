import '@/styles/tailwind.css'
import '@/styles/theme.css'
import 'focus-visible'
import company_data from '../public/static/json/globals.json'

export default function RootLayout(props) {
    const { children } = props

    const { company_id } = company_data

    return (
        <html
            className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
            lang="en"
        >
            <head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/iphone-icon.png"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
                />
                <script type="text/javascript" src="/static/test.js"></script>
                <meta name="format-detection" content="telephone=no"></meta>

                {/* NiceJob SDK */}
                <script
                    type="text/javascript"
                    defer
                    src={`https://cdn.nicejob.co/js/sdk.min.js?id=${company_id}`}
                />
            </head>
            <body
                x-data="{'openDialogId': ''}"
                className="font-body relative bg-[#FFFFFF] text-[#41454c] antialiased dark:bg-[#0e0e0e] dark:text-[#b3c3d9]"
            >
                {children}
            </body>
        </html>
    )
}
