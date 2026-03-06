import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, AlertCircle, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { HfInference } from "@huggingface/inference";

interface Message {
    id: string;
    role: 'bot' | 'user';
    content: string;
    timestamp: Date;
    isError?: boolean;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'bot',
            content: `Hello! I'm Josh's Open-Source AI Agent. I'm connected to his professional database via Hugging Face and can answer questions about his experience, projects, and tech skills!`,
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Get Token from environment
    const HF_TOKEN = process.env.REACT_APP_HUGGINGFACE_TOKEN;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // System Prompt for grounding
    const getSystemContext = () => `
        You are a helpful, professional AI Assistant for Joshua Daniel David's portfolio.
        Josh's Profile Data:
        - Name: ${portfolioData.name}
        - Title: ${portfolioData.title}
        - Bio: ${portfolioData.bio}
        - Experience: ${JSON.stringify(portfolioData.experience)}
        - Projects: ${JSON.stringify(portfolioData.projects)}
        - Skills: ${JSON.stringify(portfolioData.skills)}
        - Background: Magna Cum Laude, AI Analyst at Pop AI Technologies.
        
        Instructions:
        1. Answer ONLY based on the profile above.
        2. Keep responses brief, technical, and professional.
        3. If you don't know something, say you don't have that data but can answer about his projects or skills.
        4. Refer to him as Josh.
    `;

    const generateHeuristicResponse = (query: string): string => {
        const q = query.toLowerCase();
        if (q.includes('skill') || q.includes('tech')) return `Josh is an expert in ${portfolioData.skills[0].skills.slice(0, 3).join(', ')} and AI tools like LLMs and NLP.`;
        if (q.includes('experience')) return `Josh recently served as an AI Business Process Analyst at Pop AI Technologies.`;
        if (q.includes('project')) return `He has developed several missions including D'Xplorer Travel & Tours and Astoria Prime.`;
        return `I'm currently in 'Heuristic Mode' because no Hugging Face token was found. Please ask about "skills", "experience", or "projects"!`;
    }

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const cleanToken = HF_TOKEN?.replace(/['"]+/g, '').trim();

            if (!cleanToken || cleanToken === 'your_hf_token_here') {
                setTimeout(() => {
                    const botMsg: Message = {
                        id: (Date.now() + 1).toString(),
                        role: 'bot',
                        content: generateHeuristicResponse(userMsg.content),
                        timestamp: new Date(),
                    };
                    setMessages(prev => [...prev, botMsg]);
                    setIsTyping(false);
                }, 1000);
                return;
            }

            // Using Hugging Face Inference
            const hf = new HfInference(cleanToken);

            // Using Chat Completion (more modern and reliable provider routing)
            // Llama-3.2-3B is highly optimized and widely available
            const response = await hf.chatCompletion({
                model: 'meta-llama/Llama-3.2-3B-Instruct',
                messages: [
                    { role: 'system', content: getSystemContext() },
                    { role: 'user', content: userMsg.content }
                ],
                max_tokens: 300,
                temperature: 0.7,
            });

            const botContent = response.choices[0]?.message?.content || "No response received.";

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: botContent.trim(),
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, botMsg]);

        } catch (error: any) {
            console.error("HF Link Error:", error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: `AI Core Link Failure: ${error.message?.substring(0, 100) || 'Unknown Error'}. Please verify your Hugging Face token.`,
                timestamp: new Date(),
                isError: true
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-['Orbitron',sans-serif]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] bg-black/95 border-2 border-purple-500/50 backdrop-blur-2xl flex flex-col shadow-[0_0_40px_rgba(168,85,247,0.3)] clip-corner-lg overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-purple-500/30 flex justify-between items-center bg-purple-900/20">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_#a855f7]" />
                                    <div className="absolute inset-0 bg-purple-400 blur-sm animate-pulse opacity-50" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-purple-400 tracking-[.2em] uppercase leading-none">AI Assistant</span>
                                    <span className="text-[7px] text-purple-500 tracking-widest mt-1">Chatbot active</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-purple-400 transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-purple-500/30"
                        >
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-sm glass-panel flex items-center justify-center border ${msg.role === 'user'
                                            ? 'border-cyan-500/50 shadow-[0_0_5px_rgba(0,255,255,0.3)]'
                                            : 'border-purple-500/50 shadow-[0_0_5px_rgba(168,85,247,0.3)]'
                                            }`}>
                                            {msg.role === 'user' ? <User size={14} className="text-cyan-400" /> : <Cpu size={14} className="text-purple-400" />}
                                        </div>
                                        <div className={`p-3 text-[11px] leading-relaxed relative clip-corner-sm ${msg.role === 'user'
                                            ? 'bg-cyan-900/20 border border-cyan-500/30 text-cyan-100'
                                            : msg.isError
                                                ? 'bg-red-900/20 border border-red-500/30 text-red-100'
                                                : 'bg-purple-900/20 border border-purple-500/30 text-purple-100'
                                            }`}>
                                            {msg.isError && <AlertCircle size={10} className="inline mr-1 text-red-400 mb-0.5" />}
                                            {msg.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-sm glass-panel border border-purple-500/50 flex items-center justify-center animate-pulse">
                                            <Bot size={14} className="text-purple-400" />
                                        </div>
                                        <div className="p-3 bg-purple-900/20 border border-purple-500/30 text-purple-500 flex items-center gap-1 clip-corner-sm">
                                            <span className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-purple-500/30 bg-black">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    disabled={isTyping}
                                    placeholder={isTyping ? "NEURAL ENGINE PROCESSING..." : "SYNC QUERY..."}
                                    className="flex-1 bg-black border border-purple-500/30 p-2.5 text-[10px] text-purple-100 placeholder:text-purple-900 uppercase tracking-widest focus:outline-none focus:border-purple-400 transition-colors disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={isTyping}
                                    className="px-4 border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black hover:shadow-[0_0_15px_#a855f7] transition-all disabled:opacity-50"
                                >
                                    <Send size={14} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-black border-2 border-purple-400 rounded-full flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-110 transition-all group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <MessageSquare size={24} className="relative z-10" />
            </button>
        </div>
    );
};

export default Chatbot;
