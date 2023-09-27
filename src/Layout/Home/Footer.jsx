import React, { useEffect } from 'react';
import { MenuButton } from "@/components"
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

export const Footer = () => {


    useEffect(() => {
      
        const email = document.querySelector('.footer-email');
        // email.forEach(function(el) { 
            let emailExpand = new gsap.timeline({paused: true})
            const span = email.querySelector('span');

            // socialExpand.to(el, { width: 200, ease:"power4.inOut", })
            CustomEase.create(".215,.61,.355,1");

// TweenLite.to(".logo", 2, { ease: "cubic", x:300 });
            emailExpand.fromTo(
                span, 
                {  scaleX: 1, ease: "cubic"},
                {  scaleX: 0.98, ease: "cubic"}
                )

            email.addEventListener('mouseenter', function() {
                emailExpand.play()
            });
            
            email.addEventListener('mouseleave', function() {
                emailExpand.reverse()
            });

        // })
    
      return () => {
        
      }
    }, [])

    return (
        <div className="container pt-24 pb-8 md:pb-10 px-2 md:px-4 lg:px-0" id="contact">
        <h2 className="text-primary text-center font-bold text-3xl md:text-4xl mb-8">Let's Chat</h2>
            {/* <h2 className="text-center text-sm uppercase opacity-80">Get in Touch</h2> */}
            <h2 className="text-center">Have something you need built? Want to talk through an idea? Get in touch. I'm friendly!</h2>
            <div className="text-center my-8">
                <a href="mailto:hasnainrhraza@gmail.com" className="footer-email link py-4 px-6 md:py-6 md:px-8 text-xl md:text-3xl rounded-md mx-auto w-auto inline-block bg-[#00000040] border-dashed border-[#ffffff40] border">
                    <span className="block scale-100 font-jetbrains">hasnainrhraza@gmail.com</span>
                </a>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center relative mt-12 md:mt-16">
                <h2 className="text-center text-xs uppercase md:absolute left-0 order-2">© 2023 Hasnain Raza</h2>
                <MenuButton
                    classes="link text-xs md:text-xs  border rounded-full w-[80px] text-center"
                    link="https://www.linkedin.com/in/hasnain-raza/"
                >Linkedin</MenuButton>
                <h2 className="text-center text-xs uppercase md:absolute right-0">design & dev ✦ Hasnain Raza</h2>

            </div>
        </div>
    )
}