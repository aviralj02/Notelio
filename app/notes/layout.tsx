import Navbar from "@/components/Navbar"

export const metadata = {
    title: 'Notes',
    description: '',
  }
  
  export default function NotesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <Navbar />
            
            {children}
        </body>
      </html>
    )
  }