import '@/styles/globals.css'
import Feed from '@components/Feed'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main>
                        <div className='app'>
                            <Nav />
                            {children}
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout