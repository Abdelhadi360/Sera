
// Real Mobile-Responsive header DONE
// Adding Log In page DONE
// Remove the console.logs with actual content DONE
// Fixing and positioning the chat box properly DONE
// Real and Secure Routing

import React, { useEffect, useState, useRef } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { LuSend } from "react-icons/lu";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { IoPersonAdd } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize';
import user from './assets/user.png';

function Chat() {

    gsap.registerPlugin(SplitText);
    
    const [email, setEmail] = useState(null);
    const [userPicture, setUserPicture] = useState(null);
    const [input, setInput] = useState("")
    const [chat, setChat] = useState([]);
    const navigate = useNavigate();
    const resRef = useRef(null);


    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }

    const handleSend = () => {
        if (input.trim() === "") return;

        const question = input;
        setInput("");

        
        const newChat = [...chat, { question, answer: "Sera is thinking..." }];
        setChat(newChat);

        aiResponse(question, newChat);
    };

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
            await user.reload();
            if (user.emailVerified) {
                setEmail(user.email);
                setUserPicture(user.photoURL);
            } else {
                navigate("/login");
            }
            } else {
            navigate("/login");
            }
        });

        return unsub;
    }, []);
    
    const logoutUser = async () => {
        try{
            await signOut(auth);
            navigate("/signup");
        } catch (err) {
            
        }
    }
    const aiResponse = async (question, currentChat) => {

        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
        
        try {
            const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1-0528:free",
                messages: [{
                        role: "system",
                        content: "You are Sera, a helpfull assistant created by Abdelhadi Applications, You answer questions with friendly, funny, and a little serious tone, and avoid saying your name or developer unless the user asks you"
                    },
                    { 
                        role: "user",
                        content: question
                    }]
            })
            });

            const data = await res.json();
            const fullAnswer = data.choices[0]?.message?.content || "No response from AI.";

            currentChat[currentChat.length - 1].answer = "";
            setChat([...currentChat]);

            let index = 0;

            const typeNextChar = () => {
            if (index < fullAnswer.length) {
                const charsToAdd = 2; // Type 2 characters at a time
                currentChat[currentChat.length - 1].answer += fullAnswer.slice(index, index + charsToAdd);
                setChat([...currentChat]);
                index += charsToAdd;
                setTimeout(typeNextChar, 10); // Small delay for the typewriter feel
            }
            };

            typeNextChar();
        } catch (err) {
            window.alert("Oops, there was an error while sending response, please try again later.");
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const profileRef = useRef();
    const togglePictureMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useGSAP(() => {
        if (isOpen) {
        gsap.fromTo(
            menuRef.current,
            { autoAlpha: 0, y: -10, scale: 0.95 },
            {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            pointerEvents: "auto",
            }
        );
        gsap.from(profileRef.current, {
            scale: 0,
            duration: 0.8,
            ease: "back.out"
        });
        } else {
        gsap.to(menuRef.current, {
            autoAlpha: 0,
            y: -10,
            scale: 0.95,
            duration: 0.2,
            ease: "power2.in",
            pointerEvents: "none",
        });
        }
    }, [isOpen]);

  return (
    <div className='h-screen overflow-y-hidden flex flex-col relative'>
        <div className='flex items-center justify-end p-2 bg-violet'>
            <div className="relative rounded-full overflow-hidden cursor-pointer border-2 border-black">
                <img onClick={togglePictureMenu} src={userPicture === null ? user : userPicture } className='h-10' />
                {isOpen && <div ref={profileRef} onClick={togglePictureMenu} className='absolute inset-0 rounded-full bg-red-400 text-white flex flex-col items-center justify-center'><FaXmark className='text-xl' /></div>}
            </div>
        </div>
        <div
            ref={menuRef}
            className="flex flex-col bg-stone-100 border rounded-3xl shadow-lg absolute top-16 sm:top-10 right-4 sm:right-10 overflow-hidden"
            style={{ opacity: 0, pointerEvents: "none" }}>
                <p className='p-3 border-b'>{email}</p>
                <Link to="/" className='p-2 hover:bg-stone-200 text-center'>Home</Link>
                <p onClick={logoutUser} className='p-2 cursor-pointer hover:bg-stone-200 text-center'>Log out</p>
        </div>
        

        <div className='flex flex-col flex-1 p-2 gap-y-2 border overflow-y-auto'>
            <div className='p-2 bg-stone-200 rounded-xl rounded-bl-sm w-fit max-w-[90%] sm:max-w-[90%]'>Hello, I am Sera! your AI assistant, Ask me Anything.</div>
            {chat.map((entry, index) => (
                <React.Fragment key={index}>
                    <ReactMarkdown
                        rehypePlugins={[rehypeSanitize]}
                        components={{
                            p: ({ node, ...props }) => (
                            <p {...props} className="prose prose-sm p-2 bg-violet-royal text-white rounded-xl rounded-br-sm w-fit max-w-[70%] self-end" />
                            ),
                        }}
                        >
                        {entry.question}
                    </ReactMarkdown>

                    <ReactMarkdown
                        rehypePlugins={[rehypeSanitize]}
                        components={{
                            p: ({ node, ...props }) => (
                            <p {...props} className="prose prose-sm p-2 bg-stone-200 rounded-xl rounded-bl-sm w-fit max-w-[70%]" />
                            ),
                        }}
                        >
                        {entry.answer}
                    </ReactMarkdown>
                </React.Fragment>
            ))}
        </div>

        
        <div className="flex flex-col gap-1 p-2 overflow-hidden bg-stone-100 w-full text-gray-800">
            <textarea 
                className='resize-none outline-none w-full p-2 bg-gray-100 border-b'
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Ask Sera...' >
            </textarea>
                
            <LuSend onClick={handleSend} className="text-4xl p-2 text-white bg-violet rounded-full cursor-pointer self-end"/>
        </div>
        
    </div>
  )
}

export default Chat