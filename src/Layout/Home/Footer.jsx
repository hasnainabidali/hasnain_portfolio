import { MenuButton } from "@/components"

export const Footer = () => {

    return (
        <div className="container pt-24 pb-16">
        <h2 className="text-primary text-center font-bold text-2xl md:text-4xl mb-8">Let's chat</h2>
            {/* <h2 className="text-center text-sm uppercase opacity-80">Get in Touch</h2> */}
            <h2 className="text-center">Have something you need built? Want to talk through an idea? Get in touch. I'm friendly!</h2>
            <div className="text-center my-8">
                <div className="py-6 px-8 text-3xl rounded-md mx-auto w-auto inline-block bg-[#00000040] border-dashed border-[#ffffff40] border">
                    hasnainrhraza@gmail.com
                </div>
            </div>
            <div className="flex items-center justify-center relative mt-16">
                <h2 className="text-center text-xs uppercase md:absolute left-0">© 2023 Hasnain Raza</h2>
                <MenuButton
                    classes="link md:text-sm text-sm border rounded-full w-[95px] text-center"
                    link="#"
                >Linkedin</MenuButton>
                <h2 className="text-center text-xs uppercase md:absolute right-0">design & dev ✦ Hasnain Raza</h2>

            </div>
            {/* <h2 className="text-center text-xs uppercase">design & dev ✦ Hasnain Raza</h2> */}
        </div>
    )
}